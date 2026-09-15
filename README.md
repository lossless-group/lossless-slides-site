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

Lossless Slides is a successor to prior art and working codebases across many projects. It will build on and codify patterns that enable dynamic, theme- and mode-consistent presentations served from their destination URL. Presentations can be made with extreme simplicity (Markdown), polished UI (Astro or HTML/CSS), or interactive rendering (Svelte), depending on the requirements for authorship and the demands of the audience and presentation.

After trying [Reveal.js](https://revealjs.com) and [Slidev](https://sli.dev), we realized we can easily "roll our own" slides system to our liking using harness engineering techniques. Our conventions are well covered (but scattered) in context-v files ([context-vigilance-kit](https://github.com/lossless-group/context-vigilance-kit)) and across several production [astro-knots](https://github.com/lossless-group/astro-knots) sites. Significant "play" and "scroll" mode viewers have been nearly perfected in [dididecks-ai](https://github.com/lossless-group/dididecks-ai), though Dididecks is primarily about agent-based authoring and design iterations.

Lossless Slides will take the mantle of the latest in our patterns for:

- a list or gallery of many presentations,
- play and scroll modes for presentation displays, and
- balancing the need for confidentiality in some presentations with ease of access, through a tiered gated auth system.

All of this has prior art, and we look forward to bringing it together in an elegant way.

This effort is part of "decoupling" as a strategy for refactoring, redesigning, and overhauling the core Lossless Group site ([lossless.group](https://lossless.group)). We have already decoupled the changelog, and are almost done with the toolkit. Slides are next on the list, primarily because we have some upcoming presentations we want to nail!

Happy Hacking. If you want to collaborate or have questions, get in touch.

*Michael Staton and the Lossless crew.*

## Table of Contents

- [Where it stands today](#where-it-stands-today)
- [Authoring and viewing](#authoring-and-viewing)
- [Markdown, charts, and animation](#markdown-charts-and-animation)
- [Prior art](#prior-art)
- [Implementation Status](#implementation-status)
- [Major Dependencies](#major-dependencies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Documentation](#documentation)

***

# Where it stands today

**Today** the site is a landing page carrying the Lossless look — the dark ground, the cyan-to-orange brand gradient, Inter, and the Lossless mark — with an empty presentations gallery waiting for its first decks.

**Next** is the gallery itself, then the play and scroll viewers that present each deck. See [Implementation Status](#implementation-status) for what exists and what doesn't.

The look is inherited, deliberately. [lossless.group](https://lossless.group) came first, `mpstaton-site` refined it, and this site starts from `mpstaton-site`'s config, stylesheets, and brand assets, because that is where the newest version lives.

***

# Authoring and viewing

### Three ways to author a presentation

| Approach | Reach for it when | Built with |
|---|---|---|
| **Extreme simplicity** | The words carry the talk and it has to be drafted fast | Markdown |
| **Polished UI** | The presentation needs custom layouts and a designed finish | Astro or HTML/CSS |
| **Interactive rendering** | The audience should explore, not just watch | Svelte |

Every approach inherits the site's theme and mode, so a deck looks like it belongs wherever it is opened.

### Ways to view and share

| Surface | What it does |
|---|---|
| **Gallery** | Lists many presentations in one place |
| **Play mode** | Presents a deck one slide at a time |
| **Scroll mode** | Presents a deck as a continuous, scrollable page |
| **Tiered gated access** | Keeps confidential decks behind a code while public decks stay one click away |

***

# Markdown, charts, and animation

Markdown presentations don't have to stay plain. We will import [Lossless Flavored Markdown](https://jsr.io/@lossless-group/lfm) (`@lossless-group/lfm`), our shared extended-markdown package. LFM allows for more advanced use of Markdown-based presentations by triggering and rendering styled Astro or web components, so a deck written as text can still carry designed layouts, callouts, and embeds.

Two visualization libraries will be included in LFM, and will also be used independently in Astro and Svelte presentations:

| Library | Reach for it when |
|---|---|
| **[Vega-Lite](https://vega.github.io/vega-lite/)** | Charts, where SVG or HTML/CSS is not appropriate or accurate enough |
| **[D3.js](https://d3js.org)** | Cool animations |

Other libraries may be included if they serve a purpose, though we try to stay consistent and only add dependencies when true need persists.

> **Status:** planned. LFM's current release (0.6.0) covers GitHub-flavored Markdown, directives, callouts, and citations. Vega-Lite and D3 are not part of it yet, and none of the three is installed in this site so far.

***

# Prior art

This site gathers patterns that already work elsewhere. None of them is ported yet.

| Pattern | Where it lives today |
|---|---|
| Conventions, blueprints, and reminders | [context-vigilance-kit](https://github.com/lossless-group/context-vigilance-kit) and `astro-knots/context-v/` |
| Play and scroll mode viewers | [dididecks-ai](https://github.com/lossless-group/dididecks-ai) |
| Deck registries, markdown decks, and gallery preview cards | `astro-knots/sites/hypernova-site` |
| Gated, two-surface deck workspace | `astro-knots/sites/calmstorm-decks` |
| Gated materials behind a polite access code, and the newest listing cards | `astro-knots/sites/mpstaton-site` (`/promote`, `/proposals`) |
| Extended markdown rendering | [`@lossless-group/lfm`](https://jsr.io/@lossless-group/lfm), rendered through `mpstaton-site` |

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
- [ ] **Gallery** — preview cards listing every presentation
- [ ] **Markdown presentations**
- [ ] **Astro / HTML-CSS presentations**
- [ ] **Svelte interactive presentations**
- [ ] **Play mode viewer**
- [ ] **Scroll mode viewer**
- [ ] **Tiered gated access** — public, code-gated, and confidential presentations
- [ ] **Share images per presentation** — `coverImage` / `shareImage` fallbacks

### Markdown, charts, and animation
- [ ] **LFM rendering** — `@lossless-group/lfm` triggering styled Astro or web components in Markdown presentations
- [ ] **Vega-Lite charts** — in LFM and on their own
- [ ] **D3 animations** — in LFM and on their own

### Site hygiene
- [ ] **`/brand-kit` and `/design-system` pages** — required on every Astro Knots site
- [ ] **`/llms.txt` and `/llms-full.txt`**
- [ ] **Analytics**
- [ ] **Production domain and Vercel deployment**

***

# Major Dependencies

Every installed dependency is on its latest release as of 2026-09-13.

### Runtime
- **Astro** — v7.3.2 — server output via `@astrojs/vercel`
- **@astrojs/vercel** — v11.0.10 — Vercel adapter
- **@astrojs/sitemap** — v3.7.4 — sitemap for prerendered pages

### Build and styling
- **Tailwind CSS** — v4.3.3 — through `@tailwindcss/vite`
- **Svelte** — v5.57.0 — with `@astrojs/svelte` v9.0.1, for interactive presentations

### Planned
Added when the first presentation needs them, not before.
- **@lossless-group/lfm** — from JSR (v0.6.0 is current) — extended markdown that renders Astro or web components
- **Vega-Lite** — charts where SVG or HTML/CSS is not accurate enough
- **D3.js** — animations

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

The site deploys to `https://lossless-decks.vercel.app`, which `astro.config.mjs` and `public/robots.txt` both name. That hostname is generated from the Vercel **project name** — the project was renamed `lossless-slides-site` → `lossless-decks`, and the old subdomain now 404s — so renaming the project again means updating both files. Set `SITE_URL` to override it; sitemap and canonical URLs read from it. The GitHub repo is still `lossless-slides-site`; only the Vercel project was renamed.

Every push, on any branch, becomes the production deployment. Vercel's own Git auto-deploy is off (`vercel.json`, `git.deploymentEnabled: false`) because it can only promote one branch; `.github/workflows/deploy-production.yml` is the single deploy path and needs the repo secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.

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
- [@lossless-group/lfm on JSR](https://jsr.io/@lossless-group/lfm) — Lossless Flavored Markdown
- [Vega-Lite](https://vega.github.io/vega-lite/) and [D3.js](https://d3js.org)
- [context-vigilance-kit](https://github.com/lossless-group/context-vigilance-kit) — the context-v conventions this site follows
- [dididecks-ai](https://github.com/lossless-group/dididecks-ai) — play and scroll mode viewers, agent-based deck authoring
- Parent repo: `astro-knots/CLAUDE.md` — philosophy and cross-site patterns
- Slides system: `astro-knots/context-v/blueprints/Slides-System-for-Astro-and-Markdown.md`
- Embeddable slides: `astro-knots/context-v/blueprints/Maintain-Embeddable-Slides.md`
- Fundraise deck workspace: `astro-knots/context-v/blueprints/Build-a-Fundraise-Deck-Workspace.md`
- Styles architecture: `astro-knots/context-v/blueprints/Styles-Architecture-Blueprint.md`
- Devshell aspects: `lossless-monorepo/flake-modules/` and `lossless-monorepo/templates/project/`

---

Built by [The Lossless Group](https://lossless.group) with ❤️ using Astro

<a href="https://lossless.group" target="_blank" rel="noopener" style="text-decoration: none; display: inline-flex; align-items: center; margin: 8px 0;">
  <img src="https://ik.imagekit.io/xvpgfijuw/uploads/lossless/trademarks/bannerImage__The-Lossless-Group.png?updatedAt=1758016899338" alt="The Lossless Group" width="100%" style="margin-right: 8px;" />
</a>
