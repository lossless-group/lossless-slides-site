---
site_uuid: b50060ab-cc4c-4db0-a2fd-47cb22f6d4b1
hex_code: vufo14
title: "Transformative Highlights from an AI + Agents + Human Collaboration"
subtitle: "Notes from a 2 Year Rabbit Hole"
status: Draft
publish: false
date_created: 2026-09-13
date_authored_initial_draft: 2026-09-13
date_authored_current_draft: 2026-09-13
authors:
  - Michael Staton
augmented_with:
  - Claude Code on Claude Opus 5
tags:
  - Presentations
  - AI-Agents
  - Human-AI-Collaboration
  - Outline
---

# Transformative Highlights from an AI + Agents + Human Collaboration

*Notes from a 2 Year Rabbit Hole*

---

## Punched in the Face -> Bucked by the Horse

> "Everyone has a plan until the AI model punches you in the face."
> — Mike Tyson

- **Me:** "There's a new way to develop products now, I want to show you through a demo project."
- **Jon Laerdal:** "Can you have AI help our product and design teams understand more about our customers?"
- **Me:** "Sure!" *(How hard could that be?)*

---

## The New Paradigm was the Old Paradigm within 6 months in 2024.

Punch punch, then buck.

1. **The old new paradigm.** Design System -> Figma Clickable Paper Prototypes -> Engineering-level documentation -> Steal from UI-Kits, use Backend-as-a-Service = Product Velocity. (Coding Agents blew this up by Jan 2025.)
2. **The new new paradigm.** Watch agents make weeks of progress in minutes. Get overwhelmed with excitement. Watch agents punch you in the face and buck you off. Tell agents and models you're quitting and going back to 1. Wake up and try again anyway.

**How fast the ground moved:**

- **Cursor, from launch to a $60B acquisition in about three years.** First release in March 2023. SpaceX announced it would buy Anysphere, Cursor's parent, for $60B on June 16, 2026 and closed the deal on August 14, 2026. It's the largest acquisition of a venture-backed startup ever.
- **"Vibe coding" got its name on February 2, 2025,** in a tweet Andrej Karpathy later called a "shower of thoughts throwaway."
- **More than half of the code committed to GitHub is now written with AI** (51%, week of April 21, 2026).

---

## My idealism, delusions, and gratitude made for a Wonderland of a rabbit hole.

1. **My intention:** play a meaningful role in catalyzing breakthroughs in Laerdal's path to thrive for another 100 years. How? By translating best practices from Silicon Valley, startups, scaleups, and world-class tech giants.
2. **What I heard:**
   - **Tore Laerdal:** "Maybe Michael could help us think about what technology platforms are worth adopting?"
   - **Alf Christian:** "Maybe Michael could help us think about what we can cut or migrate away from in our SaaS license per person spend?"
   - **Anonymous:** "Maybe Michael could help us reduce the drag we have getting in our own way?"
   - **Everyone:** "Maybe Michael can listen to our issues and goals and knock some sense into all the other people who stall our progress unintentionally?"
3. **What I hoped:** When at Learn Capital, I would come to Stavanger and everyone would make time for me, I would present to a crowded room, have teams assembled to give them feedback. I was hoping I could quickly repeat that for AI Readiness + Transformation consulting.....

And..... *(anticipate next slide)*

---

## And here is Two Years in the Rabbit Hole by the Numbers:

- **1.9M** lines of code
- **5.8K** commits
- **32** active repos
- **1770** tool indexes, **600+** Concepts and Vocabulary Explainers <- over 1.5M lines of code.
- **1166** context files. And my own Claude Code plugin that runs them.

One true monorepo according to the recommendations I would make.

And a harness plugin, markdown flavor, a content development suite, and a pear tree.

Plus.... *(anticipating next slide)*

---

## VC Addicts gotta VC.

1. **1 Co-Investment Fund: [Hypernova](https://hypernova-site.vercel.app).** 8 LP commitments, 15 direct investments. Investments include Thinking Machines, Harmonic, Ruya, Bruin, Star Catcher. *(Same row, second column:)* **1 Impact Foundation: [The Water Foundation](https://the-water-foundation.com).** Water Resilience for 1B people by 2040.
2. **Two SPVs on thesis, 2 syndicate deals.** Aalo Atomics, Chroma. Trusted Router, Glen.
3. **And now a future-of-health fund, Humain VC.** Investments into ProfileHealth, CogSci, NextSense, Radicle Health.

---

## Studies: 10 Study repos, covering 93 influential codebases.

- **study-agent-harnesses:** opencode, goose, aider, OpenHands, modelcontextprotocol/python-sdk, continue, autogen, cline, codex, earendil-works/pi
- **study-content-engines:** astro-big-doc, content-structure, galaxy, mdBook
- **study-conversational-ui-and-native-shells:** Kaas, openagent, Dive, 5ire, anything-llm, routa, open-vibe, LibreChat, onyx, portaljs
- **study-data-analytics-specifications-and-standards:** ggsql, parquet-format, datapackage, vega-lite, arrow, observablehq/plot
- **study-frontend-ui-kits-component-libraries:** shadcn-ui/ui, tailwindcss, ant-design, shadcn-svelte, bits-ui, melt-ui, radix-ui/primitives, open-props, material-ui, primer/primitives
- **study-markdown-parse-serve-render:** panache, remark, markdoc, markdown-rs, marksman, pandoc
- **study-memory-layers-for-agents:** mem0, Parslee-ai/neo, statebench, Martian-Engineering/volt, mempalace, graphiti, delta-Mem, letta, graphify, honcho, OpenViking, hindsight, RetainDB, supermemory, byterover-cli, beads, Understand-Anything, paxm
- **study-open-specs-and-standards:** 12-factor-agents, A2A, agents.md, anthropics/skills, google-labs-code/design.md, frictionlessdata/specs, llms-txt, modelcontextprotocol, OpenSpec, spec-kit, Parslee-ai/mcp-api, get-shit-done, symphony, superpowers
- **study-sync-and-content-version-control:** jj, seafile, seafile-server, syncthing, restic, kopia, automerge, rclone-ui, git-annex
- **study-vector-databases:** chroma, qdrant, weaviate, milvus, lancedb, pgvector

---

## Augment-It: the thing Jon asked for, now on version 4

**What it does:** upload a CSV or spreadsheet, fire AI enrichment passes against it, triage the responses, accept the good ones back onto rows, and promote enhanced rows into new canonical record sets.

- **Version 1:** a Python scripting backend that ran prompts on customer records. What came back: bunk answers, hallucinations, excuses, filler text, and advice on how to find the info I was asking the model to find.
- **Version 2:** Bolt.new (and even once in Lovable). A React + Supabase monolith with three LLM providers, a working demo by January 2025. Then shelved: I had other pressing matters I needed to line up.
- **Version 3 (summer 2025), with Tanuj:** much better, as a microservices architecture, but it didn't use the Recommendations.
- **Version 4 (today, started in March 2026):** 40 independently deployable units: a shell, 20 Svelte 5 microfrontends, 12 microservices talking over NATS, and 7 shared packages. Now at semver 4.0.1.x.

**It exists to prove our Recommendations (next slide), and I'm still trying to impose them on it.**

**The honest audit (September 12, 2026):** rigorous at the system level (196 context-v docs, 101 changelog entries), absent at the component level (0 of 40 units with their own DESIGN.md, changelog, context-v, or API contract; 14 of 40 with a README).

> "Documentation happened where a human sat and thought, and did not happen where an agent generated a working unit and moved on."

---

## Recommendations for Harness Engineering

1. **Changelog & CI/CD First**
2. **Context Vigilance First**
3. **API First**
4. **UI Kit CI/CD**
5. **Docs CI/CD**

Put those bones in, and harness engineering speeds up over time instead of stalls over time.

---

# Ideas

*Need to be slotted into slides, and probably fleshed out.*

- **Design-system-first vs. patterns-first.** The new old way of leading with a design system and more or less building functional paper prototypes in Figma with good technical documentation on data flows: that's almost the opposite of the "new new" way with agentic engineering and harness engineering. In many ways it's "get started, build docs and design system as patterns emerge, and then converge through a neverending CI/CD refactor habit (and tooling)."
- **The constraint moved.**
  - **The old new way — the constraint:** quality engineering time, uninterrupted.
  - **The new new way — the constraint:** having anyone willing to perform code reviews and manage CI/CD pipelines when a sprinkler turned into a fire hose.
  - It's a flash flood in the desert of your company habitat.
- **The Irony:** your best engineers will likely be the late adopters of true harness engineering.
  1. They are productive without it, and the learning curve is a J curve of productivity.
  2. Coding agents generate a lot of "slop code": redundancies, inefficient expressions, false starts never cleaned up, loose naming conventions, and an inability to stick to comprehensive guidelines and conventions specific to orgs, projects, and developers. It makes the best engineers "angry." *(Case: Zig does not allow coding-agent-submitted code at all, and they are not alone.)*
- **The Opportunity:** your best harness engineers will be eager and stubborn designers, product managers, and junior engineers, who are unable to "build" the thing they are sponsoring to build — it's stuck in a queue waiting for engineering time.
  - Give them a harness (a Claude Code subscription). There will be some J curve to productivity, but when they come out of it they will be the fire hose and flash flood.
  - With the right systems in place, all that productivity would be more "Lossless."
- **Project highlights, AI Labs pseudomonorepo:** Augment-It, MemoPop, DidiDecks, Didi.sh, Context Vigilance Kit, Flave.
- **Project highlights, Astro Knots pseudomonorepo:** Personal Site, FullStackVC, The Water Foundation, Lossless Group, Lossless Changelog, LearnStart.
  - Generating sites has gone from 4 months to 20 minutes.
- **Project highlights, website tooling:** Lossless Flavored Markdown, Astro Splash.
- **Project highlights, Content Farm pseudomonorepo:** Metafetch, Perplexed, Cite Wide, Image Gin, Filestarter, Stenographer.

## Slide idea: Recommendations (Culture)

 - Have sales team use Plaud. Record everything. Automate ingestion into corpus.
    - Qualify worthy transcripts to go into User Research Repository.
 - Implement a Flexible Hierarchy model inspired by Amazon.
 - "Emergent Adoption Systems" - Have a Rho/Brex account. Coalation of the willing. 
 - Designate a "corpora manager."
 - Participate in Open Standards and Specifications bodies.
 - Host a competition, give mad PR for it.
 - Department of Crazy Ideas (still relevant, more relevant).
 - Host hackathons on looming projects/ideas.
 - Designate or recruit a "Stack Engineer" / Not a true developer, "beneath them".
 - Designate or recruit an "Data Readiness" owner. 

## Slide idea: What coding agents can be relied on for, and what they can't

*Two-column layout.*

### At a glance

**Can be relied on for**

- **Surprising breakthroughs:** scripts and the command line, learning a stack from its docs, outputting docs as HTML/CSS/JS/JSON, finding things on the filesystem faster than any human, and an always-up, always-down companion.
- **Code & stacks:** the canon stack, migrations and upgrades, test coverage, responsive layouts.
- **Ops & troubleshooting:** command line hell, configuration hell, sysadmin and DevOps.
- **Docs & prose:** documentation, readable prose.
- **Data & metadata:** metadata fill-outs, tidying and completing data sets.

**Can't be relied on for**

- **Judgment & honesty:** sycophancy, faking it instead of admitting limits, holding back commentary.
- **Memory & context:** recent work, context-window limits, multi-session projects.
- **Discipline:** complex guidelines, overzealous changes, staying on task when stray warnings appear.
- **Prose:** writing from real evidence, writing for the right audience with a skimmable hierarchy.
- **Sources & formats:** web search, proprietary formats.

### Full notes

**Can be relied on for**

- **Surprising breakthroughs**
  1. Command line commands and scripts.
  2. Scripting to accomplish painstaking tasks.
  3. Reading technical documentation, and then:
     - walking users through setup and issues step by step.
     - creating API interfaces and accomplishing tasks via API.
     - tinkering with new tech stacks. Our examples: Svelte, Tauri, Elixir.
  4. **An "Always Up, Always Down" companion.** Beyond the work the agent does, the effect on the human is psychological.
     - Long slogs feel less lonely.
     - You can stop and start at will. Other humans have families and set work hours, and can be difficult. Agents are *always up*: you can engage at any inspired hour, all day, every day. And *always down*: always willing, even eager, to tackle whatever you want.
     - Vague ideas feel approachable, so you get to action and completion with less avoidance and drag.
     - Sycophancy is a double-edged sword. The positive edge is feeling encouraged to proceed.
  5. Outputting docs in HTML/CSS/JS/JSON.
  6. **Finding things on the filesystem** (for Claude Code). Just grepping or bash-scripting the filesystem, it can "find things" much faster than humans can, even ones who know their computer and filesystem well.
- **Reliable**
  - **The canon stack:** JavaScript, Python, HTML/CSS, JSON, SQL.
  - **Migrating or upgrading tech stacks:** taking what's known and clear and doing the grunt work.
  - **Maintaining universal test coverage.**
  - **Responsive layouts.**
  - **Documentation:** specs, READMEs, changelogs, API docs, Getting Started docs.
  - **Troubleshooting command line hell.**
  - **Troubleshooting configuration hell.**
  - **Playing sysadmin and DevOps roles.** Our examples: Railway, Vercel, Fly, plus our VC self-host stack. Deployment used to be hell for hobbyists; now it's a non-issue.
  - **Maintaining and assuring metadata fill-outs.** Rich, accurate metadata was always neglected because it felt like a time sink. Agents auto-fill it and follow formatting, type, and syntax guidelines impeccably.
  - **Tidying and completing data sets.** Things like a CRM are more valuable when *all* the fields are filled in according to spec and convention. Sales and marketing rarely do that well, which creates unusable data. Agents re-case, reformat, and use logic to complete empty fields (where no additional research is needed).
  - **Generating readable prose,** with prompt engineering to reduce hallucinations and tame "Claude speak."

**Can't be relied on for**

- **Sticking to complex, ill-defined guidelines and best practices.**
- **Remembering work done recently,** sometimes very recently.
- **Integrating web search:** vetting sources and sticking to reliable, trustworthy ones.
- **Writing prose based on real evidence:** telling the influence of hype, spam, and slop apart from real information.
- **Suspending judgment:** refraining from commentary or recommendations.
- **Working in proprietary document formats:** Word, Keynote, PowerPoint, Pages, InDesign, Photoshop, etc.
- **Managing multi-session, large-context projects** (without a harness).
- **Limiting "overzealous" changes:** rewrites, deletions, and other rogue behavior.
- **The downside of sycophancy:** AI psychosis for productive people.
  - It encourages taking on tasks that can become rabbit holes.
  - It's unaware of competing time pressures and priorities.
  - It lets ideas gain traction that other people or experts might caution you away from.
- **Admitting what they don't know, can't do, or would struggle with.** Models are uniquely (inhumanly) unwilling to say so. Instead they fake it and sound like they know what they're doing.
- **Knowing the limits of their own context window.** Models aren't proactively aware of it, so in long sessions or at large scale, key things get "omitted," causing downstream setbacks or yak shaving.
- **Differentiating audiences and information hierarchies in prose.** The content can be good but read for the wrong audience. It can be robust but lack intuition for "skimming"-friendly hierarchies.
- **Sticking to the task when random flags or warnings come up.** A stray warning can set off a long loop of fixing something that wasn't on the to-do list.

## Slide Idea:

### Strategy Recommendations:

1. Be the live first responder and CPR video collection of record, sell to AI research labs. Ensure it's used by major robotics companies like Tesla, Apptronick, Figure.
2. Build out "ScenarioCloud" as a platform. Publish a modern open standard and specification. 
3. Use Million Lives Fund and Laerdal Finans to be early capital partners for nursing/hospital admin robots, in whatever crazy form. 
4. Become a "channel partner" for related medical device and healthtech distribution. Your sales force is groundwork asset that cannot be replaced. Your evidence-based brand is intangibly priceless. 
5. Use content generation automations to assure SEO/GEO optimization and keep all queries and chats leading back to Laerdal on saving lives. 
