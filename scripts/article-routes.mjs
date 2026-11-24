import { execFileSync } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { relative, resolve } from 'node:path';
import yaml from 'js-yaml';
import { articlePath, validateSlug } from '../src/lib/article-urls.mjs';

export function parseArticle(text, id) {
  const match = text.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`Article ${id} needs YAML frontmatter.`);
  const data = yaml.load(match[1]);
  if (!data || !['zh', 'en'].includes(data.lang)) throw new Error(`Article ${id} needs lang: zh or en.`);
  validateSlug(data.slug);
  return { id, data: { ...data, draft: data.draft ?? true } };
}

export async function readArticles(projectRoot) {
  const base = resolve(projectRoot, 'src/content/articles');
  const result = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const filename = resolve(directory, entry.name);
      if (entry.isDirectory()) await walk(filename);
      else if (entry.isFile() && entry.name.endsWith('.md')) {
        const id = relative(base, filename).replaceAll('\\', '/').replace(/\.md$/, '');
        result.push(parseArticle(await readFile(filename, 'utf8'), id));
      }
    }
  }
  await walk(base);
  return result;
}

export function readPublishedHistory(projectRoot, articles) {
  const root = realpathSync(projectRoot);
  const git = (...args) => execFileSync('git', ['-C', root, ...args], {
    encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 16 * 1024 * 1024,
  }).trim();
  try {
    if (realpathSync(git('rev-parse', '--show-toplevel')) !== root) return new Map();
  } catch { return new Map(); }
  // A shallow checkout would silently discard older public URLs.
  if (git('rev-parse', '--is-shallow-repository') === 'true') {
    throw new Error('Full Git history is required to preserve article URLs. Fetch history before building.');
  }
  const history = new Map();
  const commitOrder = new Map(git('log', '--reverse', '--format=%H', '--', 'src/content/articles').split('\n').filter(Boolean).map((sha, index) => [sha, index]));
  for (const article of articles) {
    const filename = `src/content/articles/${article.id}.md`;
    const commits = git('log', '--format=%H', '--', filename).split('\n').filter(Boolean);
    const snapshots = [];
    for (const commit of commits) {
      let text;
      try { text = git('show', `${commit}:${filename}`); } catch { continue; }
      const old = parseArticle(text, article.id);
      old.historyOrder = commitOrder.get(commit) ?? 0;
      if (!old.data.draft) snapshots.push(old);
    }
    history.set(article.id, snapshots);
  }
  return history;
}

export function buildRoutes(articles, history = new Map()) {
  const routes = new Map();
  const owners = new Map();
  // The first article to claim a historical address keeps it. Ignore later
  // conflicting attempts in history so correcting a rejected Slug can recover.
  const snapshots = articles.flatMap(article => history.get(article.id) || []).sort((a, b) => (a.historyOrder ?? 0) - (b.historyOrder ?? 0));
  for (const snapshot of snapshots) {
    const url = articlePath(snapshot);
    if (!owners.has(url)) owners.set(url, snapshot.id);
  }
  const reserve = (url, articleId) => {
    const owner = owners.get(url);
    if (owner !== undefined && owner !== articleId) {
      throw new Error(`Article URL collision: ${url} belongs to both ${owner} and ${articleId}. Choose a different Slug; historical URLs cannot be reused.`);
    }
    owners.set(url, articleId);
  };
  for (const article of articles) {
    const current = articlePath(article);
    const snapshots = history.get(article.id) || [];
    const paths = new Set([current, ...snapshots.map(articlePath).filter(url => owners.get(url) === article.id)]);
    // Draft slugs and historical URLs stay reserved, without exposing draft content.
    reserve(current, article.id);
    if (article.data.draft) continue;
    for (const url of paths) {
      const [, lang, , ...segments] = url.split('/');
      routes.set(url, { lang, id: segments.filter(Boolean).join('/'), articleId: article.id, canonicalPath: current });
    }
  }
  return [...routes.values()].sort((a, b) => `${a.lang}/${a.id}`.localeCompare(`${b.lang}/${b.id}`));
}
