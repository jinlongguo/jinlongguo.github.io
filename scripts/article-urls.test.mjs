import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { articlePath, articleURL, citationText, validateSlug } from '../src/lib/article-urls.mjs';
import { buildRoutes, parseArticle, readPublishedHistory } from './article-routes.mjs';

const article = (id, data = {}) => ({ id, data: { title: '研究与实践', date: '2026-11-24', lang: 'zh', draft: false, ...data } });

test('legacy URLs remain unchanged, including the published trailing hyphen', () => {
  assert.equal(articlePath(article('2026-11-24-')), '/zh/articles/2026-11-24-/');
  assert.equal(articlePath(article('2026-11-24-', { slug: '2026-11-24-' })), '/zh/articles/2026-11-24-/');
});

test('title, date, tags, and body edits never recalculate a saved slug', () => {
  const before = article('zh-research-notes', { slug: 'research-notes' });
  const after = article('zh-research-notes', { slug: 'research-notes', title: 'A different title', date: '2027-01-03', tags: ['changed'], body: 'changed' });
  assert.equal(articlePath(before), articlePath(after));
  assert.equal(articleURL(after), 'https://jinlongguo.github.io/zh/articles/research-notes/');
});

test('citations include exact title, author, publication date, and canonical URL', () => {
  const text = citationText(article('zh-test', { slug: 'publishing-practice', title: '研究 & "实践"' }));
  assert.equal(text, 'Jinlong Guo. (2026-11-24). 研究 & "实践". Knowledge Reconstruction. https://jinlongguo.github.io/zh/articles/publishing-practice/');
});

test('slugs reject traversal, separators, URL delimiters and invalid characters', () => {
  for (const slug of ['../secret', 'foo/bar', 'x?draft=true', 'x#heading', '%2f', 'A Title', '-bad', 'two--hyphens', 'a'.repeat(121)]) {
    assert.throws(() => validateSlug(slug), /Slug must/);
  }
});

test('published historical URLs stay available and drafts never produce routes', () => {
  const history = new Map([['zh-original', [article('zh-original', { slug: 'original' }), article('zh-original', { slug: 'revised' })]]]);
  const current = article('zh-original', { slug: 'stable' });
  const routes = buildRoutes([current], history);
  assert.deepEqual(routes.map(r => r.id).sort(), ['original', 'revised', 'stable']);
  assert(routes.every(r => r.canonicalPath === '/zh/articles/stable/'));
  assert.deepEqual(buildRoutes([{ ...current, data: { ...current.data, draft: true } }], history), []);
});

test('current and historical slug collisions stop a deployment; languages have separate namespaces', () => {
  assert.throws(() => buildRoutes([article('a', { slug: 'same' }), article('b', { slug: 'same' })]), /collision/);
  assert.throws(() => buildRoutes([article('a', { slug: 'new' }), article('b', { slug: 'old', draft: true })], new Map([['a', [article('a', { slug: 'old' })]]])), /historical URLs cannot be reused/);
  assert.equal(buildRoutes([article('zh-same', { slug: 'same' }), article('en-same', { lang: 'en', slug: 'same' })]).length, 2);
});

test('actual Git history preserves old URLs across multiple slug and language edits', () => {
  const root = mkdtempSync(join(tmpdir(), 'article-url-history-'));
  const filename = join(root, 'src/content/articles/2026-11-24-.md');
  const git = (...args) => execFileSync('git', ['-C', root, '-c', 'core.hooksPath=/dev/null', '-c', 'commit.gpgsign=false', '-c', 'user.name=URL tests', '-c', 'user.email=9891509+jinlongguo@users.noreply.github.com', ...args], { stdio: 'pipe' });
  const save = (frontmatter) => {
    writeFileSync(filename, `---\ntitle: Test\ndate: 2026-11-24\ndraft: false\n${frontmatter}\n---\nBody\n`);
    git('add', '.'); git('commit', '-m', 'URL fixture');
  };
  try {
    git('init', '-q');
    mkdirSync(join(root, 'src/content/articles'), { recursive: true });
    save('lang: zh');
    save('lang: zh\nslug: readable');
    save('lang: en\nslug: stable');
    const current = article('2026-11-24-', { lang: 'en', slug: 'stable' });
    const history = readPublishedHistory(root, [current]);
    const routes = buildRoutes([current], history);
    assert.deepEqual(routes.map(r => `/${r.lang}/articles/${r.id}/`).sort(), ['/en/articles/stable/', '/zh/articles/2026-11-24-/', '/zh/articles/readable/']);
    assert(routes.every(r => r.canonicalPath === '/en/articles/stable/'));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('frontmatter parsing defaults to draft and supports quoted slugs', () => {
  const parsed = parseArticle('---\nlang: en\nslug: "research-notes"\n---\nBody', 'file');
  assert.equal(parsed.data.draft, true);
  assert.equal(parsed.data.slug, 'research-notes');
});

test('correcting a rejected duplicate slug recovers without stealing its original owner', () => {
  const original = { ...article('a', { slug: 'existing' }), historyOrder: 0 };
  const rejected = { ...article('b', { slug: 'existing' }), historyOrder: 1 };
  const history = new Map([['a', [original]], ['b', [rejected]]]);
  assert.throws(() => buildRoutes([original, rejected], history), /collision/);
  const routes = buildRoutes([original, article('b', { slug: 'corrected' })], history);
  assert.equal(routes.find(r => r.id === 'existing').articleId, 'a');
  assert.equal(routes.find(r => r.id === 'corrected').articleId, 'b');
});
