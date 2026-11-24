import { rm } from 'node:fs/promises';

// Start from source on every deployment, including when the last article is deleted.
await rm(new URL('../.astro/', import.meta.url), { recursive: true, force: true });
await rm(new URL('../node_modules/.astro/', import.meta.url), { recursive: true, force: true });
