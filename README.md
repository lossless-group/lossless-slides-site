# lossless-slides-site
A decomposed Astro site for slides and presentations of The Lossless Group

## Running locally

The toolchain (node, pnpm, bun, deno) comes from a Nix devshell composed from
[lossless-monorepo](https://github.com/lossless-group/lossless-monorepo)'s `js` aspect.

```bash
nix develop        # or, with direnv: direnv allow
pnpm install
pnpm dev           # serves http://localhost:4321
```

Astro 7 runs the dev server in the background, so `pnpm dev` returns right away.
Manage it with `pnpm astro dev status`, `pnpm astro dev logs`, and `pnpm astro dev stop`.

```bash
pnpm build         # Vercel-ready server build
```

## Changelog

Ship notes live in [`changelog/`](changelog/).
