---
title: "Generate Whole Decks, and Regenerate Fresh"
lede: "Agents design a whole deck better than a single slide. If the deck is close, iterate. If it's meh, start over without looking."
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
site_uuid: 42b5dc0e-b100-48f8-904a-67992469f774
hex_code: yuy0ut
summary: "The generation discipline for PageDecks in lossless-slides-site: generate the whole deck in one task, iterate only from a deck that's close, and regenerate a meh deck from scratch without showing the agent earlier versions. Distilled from calmstorm-decks' build week and the AI-Assisted Iteration Discipline in Build-a-Fundraise-Deck-Workspace. Where the deck-iteration-workflow skill recommends per-slide variants, this blueprint's whole-deck approach wins. Held at publish: false because it names client deck repos."
tags:
  - Slide-Decks
  - Decks-as-Code
  - PageDeck
  - AI-Assisted-Design
  - Creative-Generation
  - Whole-Deck-Variants
  - Iteration-Discipline
---

# Generate Whole Decks, and Regenerate Fresh

## Why Care?

Designing slides one at a time with a coding agent is slow. Every slide becomes its own round of layout nitpicks and visual preferences, and the back-and-forth eats the day.

Asking for the **whole deck at once** works far better. The agent can see the full arc, hold one visual voice across every slide, and hand back something you can react to in minutes. Then there's a simple choice:

- **Almost to your liking?** Iterate from it.
- **Meh?** Don't fix it. Generate a **completely new** deck, and don't let the agent look at the first one.

It's creative generation, not incremental polishing. On calmstorm-decks, a second full seventeen-slide version (about 3,400 lines) and then a third, in an editorial magazine voice, each shipped in a single session.

## The loop

```text
 words decided  ──►  generate the whole deck (one task)
                              │
                     look at it end to end
                      │                  │
              almost right              meh
                      │                  │
        iterate from it:          generate a fresh version:
        deck-level scale first,   new folder, new voice,
        then specific slides      no access to earlier versions
```

## The rules

### 1. Decide the words before the layout

The content is written and settled before any design generation: the outline, or one narrative per slide. The agent composes layout *against* the words; it doesn't rewrite them at the same time.

**Why:** a new version then becomes a layout problem, which is fast and fun, instead of a copy-plus-layout problem, which is slow and exhausting. This is the biggest single reason a whole version fits in one session.

### 2. Generate the whole deck in one task

Ask for every slide, as a complete PageDeck version (see [[PageDeck-Pattern-for-Slide-Focused-Astro-Knots-Sites]]), in one go. Don't ask for slide 1, review it, then ask for slide 2.

### 3. Brief the agent with the foundation

Point the agent at:

- the deck's content source
- the site's tokens and deck typography vocabulary
- the player (what a slide component must render: one top-level `<section>`)

Output quality rises sharply when the foundation is in context, not just the task.

### 4. One design voice per version, named up front

Pick a single design language for the version before generating (for example "editorial print magazine" or "technical and surgical") and hold it across every slide. Mixed voices feel incoherent in a scroll deck.

### 5. A new version must not see earlier versions

When regenerating, give the agent the content, the tokens, and the player, **and not versions 1 through N−1.** Otherwise the new version drifts toward the old ones instead of finding new territory.

Each new version must make **substantially different layout choices**: different information architecture, not a re-skin.

### 6. Never overwrite a version to make a new one

Every version lives in its own folder and route (`v1/`, `v2/` …) and gets one line in the deck registry. Old versions stay playable for comparison; a weaker version can still donate a good slide later.

### 7. When iterating a close deck, tune the scale before the slides

If a deck is almost right and the complaint is "text too big, too cramped, too sparse," change the **deck-level type and spacing tokens** first. They move every slide at once. Only after that, fix individual slides.

## What this is not

- **Not per-slide variant generation.** The `deck-iteration-workflow` skill suggests 2–10 variants *per slide*. That's the slow, preference-honing loop this blueprint exists to avoid. **This blueprint wins.**
- **Not "regenerate one slide until it's right."** If many slides are wrong, the deck is meh: regenerate the deck.
- **Not a design system first.** Tokens and vocabulary are harvested from versions that land, not designed up front.

## Where this was learned

- [[Build-a-Fundraise-Deck-Workspace]]: sections *The Narrative-Driven Composition Recipe* and *AI-Assisted Iteration Discipline*, from calmstorm-decks' build week (Apr 30 – May 3, 2026)
- [[Build-Section-Composed-Decks-with-Live-Theme-Mode]]: fullstack-vc's "narrative first, words before pixels"
- `chroma-decks/context-v/narratives/ChromaDB_Deck-Outline__Enhanced-v1.md`: a working example of a brief written to be "improvised as a whole deck, not slide-by-slide," including a through-line, voice, and visual register
- [[Deck-Convergence-Slot-Level-Alternatives-and-Compositions]] (dididecks-ai): "Making alternatives is no longer the bottleneck. Choosing between them is." Where this goes once there are many versions to choose between

## Related

- [[PageDeck-Pattern-for-Slide-Focused-Astro-Knots-Sites]]: the page, slide, and player structure these generations fill in
