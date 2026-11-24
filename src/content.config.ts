import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SLUG_PATTERN } from './lib/article-urls.mjs';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/articles',
    // Keep the content identity independent of the editable URL slug.
    generateId: ({ entry }) => entry.replace(/\.md$/i, ''),
  }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().max(120).regex(SLUG_PATTERN).optional().or(z.literal('')),
    date: z.coerce.date(),
    summary: z.string().default(''),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['zh', 'en']),
    draft: z.boolean().default(true),
    cover: z.string().optional(),
    translationKey: z.string().optional(),
  }),
});

export const collections = { articles };
