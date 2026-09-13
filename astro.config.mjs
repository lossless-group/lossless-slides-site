import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'

// Adapted from mpstaton-site's astro.config.mjs. Left behind on purpose:
// - the /promote raw-content watcher, which only that site's gated memos need
// - the conditional @knots workspace aliases; this site is deployed on its own,
//   and its import aliases live in tsconfig.json `paths` (see the astro-knots
//   reminder Preference-for-Shortcuts-in-Config-to-Absolute-Paths)

export default defineConfig({
  // Placeholder until the production domain is chosen. @astrojs/sitemap and
  // canonical URLs both read this.
  site: process.env.SITE_URL ?? 'https://lossless-slides-site.vercel.app',
  output: 'server',
  adapter: vercel(),
  // The dev-only toolbar overlays the bottom-centre of every page, which is
  // exactly where slide controls sit.
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      // Shiki language ids are lowercase and case-sensitive, so a ```R fence
      // would miss the bundled `r` grammar and fall back to plaintext.
      langAlias: {
        R: 'r',
      },
    },
  },
  integrations: [
    svelte(),
    // Lists every prerendered page. llms.txt endpoints serve LLMs, not search
    // engines, and the 404 page is not a destination.
    sitemap({
      filter: (page) =>
        !page.includes('/llms.txt') &&
        !page.includes('/llms-full.txt') &&
        !page.endsWith('/404/') &&
        !page.endsWith('/404'),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
})
