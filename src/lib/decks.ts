/**
 * Registry of decks and their versions.
 *
 * The one list the gallery, the deck chrome (version cycling), and each deck
 * page read from. Inspired by calmstorm-decks' scroll-decks.ts. Adding a
 * version of a deck is one entry in `versions`; each version lives in its own
 * sections folder so versions never overwrite each other (see
 * context-v/blueprints/Generate-Whole-Decks-and-Regenerate-Fresh.md).
 */

export interface DeckVersion {
  /** Folder under src/layouts/sections/{deck-slug}/, e.g. "v1". */
  key: string;
  /** Route the version is mounted at, without a trailing slash. */
  href: string;
  /** Short label shown in the deck chrome. */
  label: string;
  /** The single design voice this version was generated in. */
  voice: string;
}

export interface Deck {
  slug: string;
  title: string;
  subtitle: string;
  /** One line for the gallery card. */
  summary: string;
  status: 'Draft' | 'Published';
  versions: DeckVersion[];
}

export const DECKS: Deck[] = [
  {
    slug: 'ai-agents-human-collaboration',
    title: 'Transformative Highlights from an AI + Agents + Human Collaboration',
    subtitle: 'Notes from a 2 Year Rabbit Hole',
    summary:
      "Two years of building with coding agents: how fast the ground moved, what they can and can't be relied on for, and what we recommend.",
    status: 'Draft',
    versions: [
      {
        key: 'v1',
        href: '/presentations/ai-agents-human-collaboration',
        label: 'v1',
        voice: 'Field notes',
      },
    ],
  },
];

export interface DeckContext {
  deck: Deck;
  version: DeckVersion;
  /** Zero-based position of this version within the deck. */
  index: number;
  total: number;
  /** Neighbors for cycling; only present when a deck has more than one version. */
  prev?: DeckVersion;
  next?: DeckVersion;
}

const normalize = (path: string) => path.replace(/\/+$/, '') || '/';

export function getDeckContext(pathname: string): DeckContext | undefined {
  const target = normalize(pathname);
  for (const deck of DECKS) {
    const index = deck.versions.findIndex((v) => normalize(v.href) === target);
    if (index === -1) continue;
    const total = deck.versions.length;
    const cycles = total > 1;
    return {
      deck,
      version: deck.versions[index],
      index,
      total,
      prev: cycles ? deck.versions[(index - 1 + total) % total] : undefined,
      next: cycles ? deck.versions[(index + 1) % total] : undefined,
    };
  }
  return undefined;
}
