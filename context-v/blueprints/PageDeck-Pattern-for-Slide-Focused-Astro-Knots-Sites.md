---
title: "PageDeck: A Pattern for Slide-Focused Astro Knots Sites"
lede: "A whole deck as one Astro page: each slide a component, one small player for keys and snapping, and no Reveal."
publish: false
date_created: 2026-09-14
date_modified: 2026-09-14
date_authored_initial_draft: 2026-09-14
date_authored_current_draft: 2026-09-14
date_authored_final_draft:
authors:
  - Michael Staton
augmented_with:
  - Claude Code on Claude Opus 5 (1M context)
at_semantic_version: 0.0.0.1
status: Draft
category: Blueprint
site_uuid: 629e6064-8231-470a-9e29-a4a502349cc4
hex_code: 56ffqw
summary: "Pattern of record for how lossless-slides-site builds and plays HTML/CSS decks. Inspired by, not ported from, calmstorm-decks' PageAsDeckWrapper, fullstack-vc's section-composed deck spec, and the dididecks-ai shell. Records what proved out, what to improve, the proposed directory shape, and the open decisions. Pairs with the generation discipline in Generate-Whole-Decks-and-Regenerate-Fresh. Held at publish: false because it names client deck repos by path."
tags:
  - Slide-Decks
  - Decks-as-Code
  - PageDeck
  - Section-Composed
  - Scroll-Snap
  - Keyboard-Nav
  - Vanilla-JS
  - Astro-Knots
  - Lossless-Brand
---

# PageDeck: A Pattern for Slide-Focused Astro Knots Sites

## Why Care?

Slide software makes you design one slide at a time, in a tool that isn't the web. Coding agents are bad at that, and good at something else: writing a whole, coherent page of HTML and CSS in one go.

A **PageDeck** plays to that strength. The entire deck is one Astro page. Each slide is its own component, so slides are easy to reorder, swap, or regenerate. A small player wraps the page and makes it behave like a presentation: each slide snaps to the screen, the arrow keys move between slides, and a counter shows where you are. It's plain HTML and CSS, with vanilla JavaScript only where the player genuinely needs it.

The pattern already works. It shipped three full seventeen-slide decks for a fundraise in one build week. This blueprint takes what worked there, names what to improve, and makes it The Lossless Group's way of building presentations.

## Where it comes from

This is **inspired by, pulling what works**. It's not a port, and not a shared package. Each Astro Knots site copies the pattern and adapts it.

- **calmstorm-decks** is where the pattern proved out. See `ai-labs/dididecks-ai/client-sites/calmstorm-decks/src/layouts/PageAsDeckWrapper.astro`, which calls itself a "light-mode adaptation of the dark-matter PageAsDeckWrapper pattern." Its playbook is [[Build-a-Fundraise-Deck-Workspace]].
- **fullstack-vc** generalized it: one markdown file per slide, section components, and the three-mode theme as a hard requirement. See [[Build-Section-Composed-Decks-with-Live-Theme-Mode]].
- **dididecks-ai** lifted it into a shell shared by several client decks, and documented the player in `context-v/sitemap/components/PageAsDeckWrapper.md`. We want the documentation habit from there, not the shared-package shape.

The starting code is **calmstorm's wrapper, the one that already works**. The improvements below are what makes this version "new and improved."

## The three parts

### 1. The page

One Astro page per deck version. It imports its slide components in order and drops them into the player. It holds no layout of its own; it's a table of contents that renders.

### 2. The slides

One component per slide. Each renders exactly one top-level `<section>`.

- **Compose shared vocabulary.** A slide uses the site's semantic tokens and deck typography classes. Scoped `<style>` is for that slide's unique flourishes only.
- **One slide, one file.** That's what makes reordering, deleting, and regenerating a single slide cheap.
- **Content comes from the deck's source,** not from inside the layout (see *Content source* below).

### 3. The player

A wrapper layout that turns a stack of sections into a presentation. It's the only part of a PageDeck that ships JavaScript.

## What proved out (keep)

From calmstorm's `PageAsDeckWrapper.astro`:

| Behavior | How |
|---|---|
| Each slide snaps to the viewport | `scroll-snap-type: y mandatory` on the wrapper, which is also the scroll container |
| Keyboard navigation | ↓ / PageDown next, ↑ / PageUp previous, Home first, End last |
| Ignores keys while typing | Skips `INPUT`, `TEXTAREA`, and `contenteditable` targets |
| Double-click navigation | Upper half of the screen goes back, lower half goes forward |
| Slide counter | "7 / 17", with tabular numerals |
| Deep links | `#s-N` in the URL jumps straight to slide N on load |
| Presenting controls | `c` hides the chrome so only the slide shows; `f` toggles fullscreen |
| Reveal on arrival | `.reveal-item` children fade in when they scroll into view, staggered by a `--delay` custom property |
| Chrome decoupled from the player | The player broadcasts a `deck:section-changed` event and listens for `deck:section-prev` / `deck:section-next`, so nav buttons never reach into it |
| Header-aware height | `--deck-height` (default `100vh`) lets a page shrink the deck when a header sits above it |
| Counts only real slides | Counts direct-child sections only. A flat `querySelectorAll('section')` once counted decorative nested sections and showed "24 / 17" |
| Survives Astro page transitions | Initializes on both `DOMContentLoaded` and `astro:page-load`, guarded by `data-initialized` |

## What to improve (candidates for the new version)

Found by reading calmstorm's wrapper. Each item is a candidate to decide on while building, not a commitment.

1. **Modifier keys aren't checked. This is a real bug.** The key handler never looks at `metaKey` or `ctrlKey`, so **Cmd+C / Ctrl+C toggles the chrome and `preventDefault()` blocks the copy.** The same applies to other browser shortcuts that share a key. The fix is to return early when a modifier is held.
2. **The chrome is hard-coded for light mode.** The counter and hint use `background: rgb(255 255 255 / 0.9)`. Move them to semantic tokens so they work in every mode.
3. **No reduced-motion support.** Smooth scrolling and the bouncing hint arrow ignore `prefers-reduced-motion`.
4. **Space and Shift+Space do nothing.** fullstack-vc's key contract lists them as next and previous.
5. **Switching versions from the keyboard.** fullstack-vc's contract uses ← / → to move between versions of a deck, keeping ↑ / ↓ within a deck. calmstorm's wrapper doesn't handle ← / →.
6. **Tracking the current slide.** Currently a debounced loop over `getBoundingClientRect()` on scroll. An `IntersectionObserver` would do this without layout reads.
7. **The navigation lock.** A fixed 500 ms `isNavigating` timeout. The `scrollend` event is the more honest signal where browsers support it.
8. **Listeners may pile up.** `document` and `window` listeners are added on every init and never removed. The `data-initialized` guard stops double-init of the same element, but after page transitions a new wrapper element may add another set. Worth verifying.
9. **The counter's position assumes a header.** It sits at `top: 4.5rem`. Tie that to the same variable as `--deck-height`.

## Styling: Lossless brand, tunable deck scale

**The brand is fixed. The deck's type scale and spacing are expected to change.**

- **Brand:** use the site's existing Lossless tokens in `src/styles/tokens.css`: the brand colors, the cyan → purple → crimson → orange gradient, and Inter. Slides read semantic tokens and never raw hex.
- **Deck scale:** keep font sizes, line lengths, slide padding, and gaps in **one set of deck-level tokens** (for example `--deck-font-headline`, `--deck-space-slide-pad`), defined once for the whole deck. When a generated deck is almost right, most tuning should happen there, not slide by slide.
- **Modes:** Astro Knots sites support light, dark, and vibrant. Lossless brand work predates the three-mode system, and this site's `tokens.css` currently defines a `:root` palette and `[data-theme='dark']`, with no vibrant. **Deriving the missing modes is an open build step.** [[Three-Modes-Derivation]] is a worked example of deriving modes for a brand that never had them. The direction for Lossless:
  - **Light is a newspaper, or a vintage financial report / annual investor update.** Paper and ink, serif type, hairline rules, restrained accent. **No brand gradients.**
  - **Dark** is the Lossless look as it exists today.
  - **Vibrant leans into the brand gradients.** The gradient stops become glassmorphic surfaces, glows, and radiant shadows. Per the `theme-system` skill, vibrant is dark-based.
  - A mode can own more than color: type, rules, and effects can change too.
- **Observed, not changed:** this site's tokens use shadcn-style names (`--background`, `--primary`) rather than the two-tier `--color__named` → `--color-semantic` convention in [[Maintain-Themes-Mode-Across-CSS-Tailwind]].

### Improvise in Tailwind, then refactor

**Inline Tailwind utilities are the encouraged way to improvise a slide's styles.** Generation should be fast and unafraid. It shouldn't stop to design a system first.

The habit that makes that safe is refactoring afterward. When a generated version lands, each improvised style gets one of three outcomes:

1. **Integrate into the design system.** A pattern that repeats across slides or versions becomes a token, a deck class, or a component.
2. **Let it sit as is.** A one-off flourish that belongs to one slide stays inline. That's fine.
3. **Impose the design system.** An improvisation that reinvented something the system already has gets replaced with the system's version.

One constraint holds throughout: improvised styles read semantic tokens or mode-aware utilities, so every slide still works in every mode.
- **Observed, not changed:** this site's tokens use shadcn-style names (`--background`, `--primary`) rather than the two-tier `--color__named` → `--color-semantic` convention in [[Maintain-Themes-Mode-Across-CSS-Tailwind]].

**The JS ladder** (per the `astro-knots` skill): CSS first (scroll-snap, container queries, transitions), then vanilla JS only when needed, then a small focused package. The player is the one place vanilla JS has earned its spot. **No Reveal.js.**

## Content source

A deck's words are decided before its layout. See [[Generate-Whole-Decks-and-Regenerate-Fresh]] for why.

- The first deck's source is a single outline at `src/content/presentations/{deck-slug}/outline.md`.
- calmstorm and fullstack-vc used **one narrative file per slide** instead. Both shapes work. Split into one file per slide when a deck's slides get long, or when slides start being regenerated individually.

## Proposed directory shape

**Proposed, not built.** Names may change when the first deck is built.

```text
lossless-slides-site/
├── src/
│   ├── content/presentations/{deck-slug}/
│   │   └── outline.md                  # the deck's words (exists today)
│   ├── layouts/
│   │   ├── PageDeck.astro              # the player (working name)
│   │   └── sections/{deck-slug}/
│   │       ├── v1/S01-{Slide-Slug}.astro
│   │       └── v2/S01-{Slide-Slug}.astro   # a fresh version, generated independently
│   ├── pages/presentations/{deck-slug}/
│   │   ├── index.astro                 # v1
│   │   └── v2.astro                    # v2
│   └── lib/decks.ts                    # registry: which decks and versions exist
```

Each version gets its own folder so versions never overwrite each other. A **registry** (`lib/decks.ts`, after calmstorm's `scroll-decks.ts`) is the single list of decks and versions. The header, nav, version switching, and the gallery all read from it. Adding a version should be one line.

## Out of scope for now

- **Fixed 16:9 slides and PDF export.** dididecks' "Play-UI" builds a separate static 1920×1080 copy of each slide. It's valuable, and it's a second implementation of every slide. See [[Port-Astro-Deck-Sections-to-Slides]] when it's needed.
- **Access gates, slide ranking, review matrices.** These belong to client fundraise decks and the dididecks product.
- **A shared package.** Sites copy and adapt this pattern.

## Open decisions

1. The player's component name (`PageDeck.astro` is a working name).
2. Whether ← / → switches between versions of a deck.
3. The light and vibrant token values for Lossless.
4. Route shape (`/presentations/{deck}/` vs. something shorter).

## Related

- [[Generate-Whole-Decks-and-Regenerate-Fresh]]: how decks get generated and iterated
- [[Build-a-Fundraise-Deck-Workspace]]: calmstorm's playbook (`astro-knots/context-v/blueprints/`)
- [[Build-Section-Composed-Decks-with-Live-Theme-Mode]]: fullstack-vc's spec, including the full key contract
- [[Slides-System-for-Astro-and-Markdown]] and [[Maintain-Embeddable-Slides]]: the earlier Reveal-based systems
- `ai-labs/dididecks-ai/context-v/sitemap/components/PageAsDeckWrapper.md`: the player's documented contract in the dididecks shell
