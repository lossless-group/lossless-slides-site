# Lossless Slides — Presentations by The Lossless Group

<p align="center">
  <span style="font-size: 18px; font-weight: 500; color: #374151;">A decomposed Astro site for slides and presentations, built with</span>
  <span style="font-size: 20px; color: #ef4444; margin: 0 4px;">❤️</span>
  <span style="font-size: 18px; font-weight: 500; color: #374151;">by</span>
  <br/>
  <a href="https://lossless.group" target="_blank" rel="noopener" style="text-decoration: none; display: inline-flex; align-items: center; margin: 8px 0;">
    <img src="https://ik.imagekit.io/xvpgfijuw/uploads/lossless/trademarks/trademark__The-Lossless-Group.svg?updatedAt=1758016855404" alt="The Lossless Group" height="24" style="margin-right: 8px;" />
    <span style="font-size: 22px; font-weight: 600; color: #1f2937;">The Lossless Group</span>
  </a>
  <br/>
  <span style="font-size: 14px; color: #6b7280; margin-top: 12px; display: block;">
    Server-rendered with
    <a href="https://astro.build" style="color: #7c3aed; text-decoration: none; font-weight: 500;">Astro 7</a>,
    <a href="https://tailwindcss.com" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">Tailwind CSS v4</a>, and
    <a href="https://svelte.dev" style="color: #f97316; text-decoration: none; font-weight: 500;">Svelte 5</a>
  </span>
</p>

## Table of Contents

- [What this site does](#what-this-site-does)
- [Deck formats](#deck-formats)
- [Implementation Status](#implementation-status)
- [Major Dependencies](#major-dependencies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Documentation](#documentation)

***

# What this site does

This is where The Lossless Group's talks, pitches, and explainers live: as pages you open in a browser, share with a link, and eventually embed in other pages.

**Today** it is a landing page carrying the Lossless look — the dark ground, the cyan-to-orange brand gradient, Inter, and the Lossless mark — with an empty presentations gallery waiting for its first decks.

**Next** is the gallery itself and the routes that present each deck. See [Implementation Status](#implementation-status) for what exists and what doesn't.

The look is inherited, deliberately. [lossless.group](https://www.lossless.group) came first, `mpstaton-site` refined it, and this site starts from `mpstaton-site`'s config, stylesheets, and brand assets, because that is where the newest version lives.

***

# Deck formats

Three ways a deck will be authored here, following the astro-knots blueprints:

| Format | What it is | Blueprint |
|---|---|---|
| **Markdown decks** | Plain Markdown, one slide per section, drafted in Obsidian and shipped with a commit | `Slides-System-for-Astro-and-Markdown` |
| **Astro decks** | Component-built presentations for custom layouts, data visualizations, or motion | `Slides-System-for-Astro-and-Markdown` |
| **Embeddable** | Any deck dropped into an essay, a changelog, or another site | `Maintain-Embeddable-Slides` |

The reference implementation for all three is `astro-knots/sites/hypernova-site` (deck registries, markdown decks, preview cards, and the Reveal.js wrapper). None of it is ported yet.

***

# Implementation Status

### Site foundation
- [x] **Landing page** — hero, gallery section (empty state), deck formats
- [x] **Lossless design tokens** — `tokens.css` brand gradient and light/dark semantic tokens, `globals.css`, `prose.css`
- [x] **Responsive header** — inline links on desktop, hamburger panel below 768px
- [x] **Sitemap and robots.txt** — `@astrojs/sitemap` plus `public/robots.txt`
- [x] **Canonical and OpenGraph meta** — title, description, URL; share image when one is set
- [x] **Nix devshell** — node, pnpm, bun, deno from lossless-monorepo's `js` aspect

### Presentations
- [ ] **Gallery** — preview cards listing every deck
- [ ] **Markdown decks** — `src/content/slides/` collection and presentation route
- [ ] **Astro decks** — component deck registry and presentation route
- [ ] **Embeds** — an embed route and `:::slides` directive
- [ ] **Share images per deck** — `coverImage` / `shareImage` fallbacks

### Site hygiene
- [ ] **`/brand-kit` and `/design-system` pages** — required on every Astro Knots site
- [ ] **`/llms.txt` and `/llms-full.txt`**
- [ ] **Analytics**
- [ ] **Production domain and Vercel deployment**

***

# Major Dependencies

Every dependency is on its latest release as of 2026-09-13.

### Runtime
- **Astro** — v7.3.2 — server output via `@astrojs/vercel`
- **@astrojs/vercel** — v11.0.10 — Vercel adapter
- **@astrojs/sitemap** — v3.7.4 — sitemap for prerendered pages

### Build and styling
- **Tailwind CSS** — v4.3.3 — through `@tailwindcss/vite`
- **Svelte** — v5.57.0 — with `@astrojs/svelte` v9.0.1, for interactive islands when a deck needs them

### Tooling
- **Nix** — flake devshell supplying the toolchain (see [Getting Started](#getting-started))
- **pnpm** — v11 — always pnpm; never npm or yarn

***

# Project Structure

```
lossless-slides-site/
├── changelog/                 # ship notes, YYYY-MM-DD_NN.md
├── public/                    # favicon, robots.txt, trademarks, icons, images
├── src/
│   ├── brand/lossless.ts      # brand name, colors, logo, favicon
│   ├── components/
│   │   └── basics/Header.astro
│   ├── config/
│   │   ├── brand.ts           # re-exports the active brand (@brand)
│   │   └── seo.ts             # site name and default title/description
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro      # landing page
│   ├── styles/                # globals.css, tokens.css, prose.css
│   ├── types/brand.ts
│   └── env.d.ts
├── astro.config.mjs
├── flake.nix / flake.lock     # Nix devshell
├── .envrc                     # direnv: `use flake`
├── .npmrc                     # standalone install, JSR registry
├── pnpm-workspace.yaml        # approves esbuild and sharp build scripts
├── tsconfig.json              # @components, @layouts, @styles, @brand … aliases
└── package.json
```

***

# Getting Started

## Prerequisites

- **[Nix](https://nixos.org/download/)** with flakes enabled, and optionally **[direnv](https://direnv.net/)** with nix-direnv
- **Access to the private `lossless-group/lossless-monorepo` repo.** The devshell's toolchain is defined there, so Nix has to be able to fetch it. Give Nix a GitHub token that can read it:

  ```ini
  # ~/.config/nix/nix.conf (chmod 600)
  access-tokens = github.com=<token with repo scope>
  ```

Without Nix, Node 22 and pnpm 11 also work.

## Installation

```bash
nix develop        # or, with direnv: direnv allow
pnpm install
```

`.npmrc` sets `ignore-workspace=true`, so pnpm treats this site as standalone even when it sits inside the `astro-knots` checkout — the same way Vercel installs it.

## Development

```bash
pnpm dev           # serves http://localhost:4321
```

Astro 7 runs the dev server in the background, so `pnpm dev` returns right away. Manage it with:

```bash
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

***

# Available Scripts

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server in the background |
| `pnpm build` | Build for production (Vercel server output) |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro ...` | Run Astro CLI commands directly |

***

# Deployment

The site builds as a server-output Astro app for **Vercel** via `@astrojs/vercel`. It is **not deployed yet**.

```bash
pnpm build
```

The site URL is a placeholder, `https://lossless-slides-site.vercel.app`, until a domain is chosen. Set `SITE_URL` to override it; sitemap and canonical URLs read from it. Update `public/robots.txt` to match when the domain is final.

Vercel should watch this repo directly, not the parent `astro-knots` repo, so the site must stay self-contained: no `workspace:*` dependencies and no imports from `@knots/*` packages.

## Configuration files

- **`astro.config.mjs`** — Vercel adapter, Svelte, sitemap, Tailwind v4 Vite plugin, server output, dev toolbar off
- **`tsconfig.json`** — extends `astro/tsconfigs/strict`, canonical astro-knots alias set plus `@brand`
- **`.npmrc`** — `ignore-workspace=true`, hoisting, `@jsr:registry=https://npm.jsr.io`
- **`pnpm-workspace.yaml`** — `allowBuilds` for esbuild and sharp, required by pnpm 11
- **`flake.nix`** — imports `flakeModules.default` from lossless-monorepo and selects the `js` aspect

***

# Documentation

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- Parent repo: `astro-knots/CLAUDE.md` — philosophy and cross-site patterns
- Slides system: `astro-knots/context-v/blueprints/Slides-System-for-Astro-and-Markdown.md`
- Embeddable slides: `astro-knots/context-v/blueprints/Maintain-Embeddable-Slides.md`
- Styles architecture: `astro-knots/context-v/blueprints/Styles-Architecture-Blueprint.md`
- Devshell aspects: `lossless-monorepo/flake-modules/` and `lossless-monorepo/templates/project/`

---

Built by [The Lossless Group](https://lossless.group) with ❤️ using Astro

<a href="https://lossless.group" target="_blank" rel="noopener" style="text-decoration: none; display: inline-flex; align-items: center; margin: 8px 0;">
  <img src="https://ik.imagekit.io/xvpgfijuw/uploads/lossless/trademarks/bannerImage__The-Lossless-Group.png?updatedAt=1758016899338" alt="The Lossless Group" width="100%" style="margin-right: 8px;" />
</a>
