import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1),
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
