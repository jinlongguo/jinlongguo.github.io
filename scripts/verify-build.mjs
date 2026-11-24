import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
for (const page of ['index.html', 'en/index.html', 'zh/articles/index.html', 'en/articles/index.html', 'zh/projects/index.html', 'en/resources/index.html', 'atlas/index.html', 'atlas/app.js', 'atlas/data/atlas.json', 'atlas/data/atlas.csv', 'downloads/metascience-atlas-source.zip']) {
  await access(`${root}dist/${page}`);
}
const source = await readFile(`${root}public/atlas/data/atlas.json`);
const built = await readFile(`${root}dist/atlas/data/atlas.json`);
assert.deepEqual(built, source, 'Atlas data must be copied without modification');
const db = JSON.parse(built);
assert.equal(db.records.length, 108);
assert.equal(new Set(db.records.map(r => r.id)).size, 108);
assert(db.records.every(r => r.sources?.length));
const home = await readFile(`${root}dist/index.html`, 'utf8');
assert(home.includes('Knowledge Reconstruction'));
assert(home.includes('/atlas/'));
assert(!/fonts\.googleapis|cdnjs|unpkg\.com/.test(home));
const routes = JSON.parse(await readFile(`${root}src/generated/article-routes.json`, 'utf8'));
for (const route of routes) {
  const html = await readFile(`${root}dist/${route.lang}/articles/${route.id}/index.html`, 'utf8');
  const canonical = `https://jinlongguo.github.io${route.canonicalPath}`;
  assert(html.includes(`<link rel="canonical" href="${canonical}"`), 'Historical pages must point to the current permalink');
  assert(html.includes('Suggested Citation'), 'Articles must include a suggested citation');
  assert(html.includes('data-copy-citation'), 'Articles must include the copy control');
  assert(html.includes(canonical), 'Citation must include the canonical permalink');
}
console.log(`Verified ${routes.length} article permalinks/citations, routes, Atlas data preservation (108 records), downloads, and self-hosted assets.`);
