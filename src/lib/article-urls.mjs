export const SITE_URL = 'https://jinlongguo.github.io';
export const AUTHOR = 'Jinlong Guo';

// A trailing hyphen remains valid for the site's existing 2026-11-24- permalink.
export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*-?$/;

export function validateSlug(value) {
  if (value === undefined || value === null || value === '') return;
  if (typeof value !== 'string' || value.length > 120 || !SLUG_PATTERN.test(value)) {
    throw new Error('Slug must use lowercase English letters, numbers, and single hyphens (maximum 120 characters).');
  }
}

export function articlePath(article) {
  validateSlug(article.data.slug);
  return `/${article.data.lang}/articles/${article.data.slug || article.id}/`;
}

export function articleURL(article) {
  return new URL(articlePath(article), SITE_URL).href;
}

export function citationText(article) {
  const date = new Date(article.data.date).toISOString().slice(0, 10);
  return `${AUTHOR}. (${date}). ${article.data.title}. Knowledge Reconstruction. ${articleURL(article)}`;
}
