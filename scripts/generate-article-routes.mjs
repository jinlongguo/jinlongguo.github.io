import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { readArticles, readPublishedHistory, buildRoutes } from './article-routes.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const articles = await readArticles(root);
const history = readPublishedHistory(process.env.ARTICLE_HISTORY_ROOT || root, articles);
const routes = buildRoutes(articles, history);
const output = new URL('../src/generated/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL('article-routes.json', output), JSON.stringify(routes, null, 2) + '\n');
console.log(`Prepared ${routes.length} current and historical article URLs.`);
