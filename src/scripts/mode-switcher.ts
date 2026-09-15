/**
 * Mode switcher: the three-mode contract, 'light' | 'dark' | 'vibrant'.
 *
 * Adapted from dididecks-ai's shell runtime (apps/deck-shell/src/runtime/
 * mode-switcher.ts). Differences here:
 *   - Writes `data-theme` on <html>, this site's attribute, not `data-mode`.
 *   - The first-paint mode is applied by an inline script in BaseHead.astro,
 *     so this module only reads the attribute, it never guesses a default.
 *   - One storage key for the whole site, since it hosts only Lossless decks.
 */

export type Mode = 'light' | 'dark' | 'vibrant';

export const MODES: readonly Mode[] = ['light', 'dark', 'vibrant'];

/** Must match the inline first-paint script in BaseHead.astro. */
export const MODE_STORAGE_KEY = 'lossless-slides:mode';

export interface ModeSwitcher {
  getMode(): Mode;
  setMode(mode: Mode): Mode;
  /** light → dark → vibrant → light */
  cycle(): Mode;
}

const isMode = (value: unknown): value is Mode =>
  typeof value === 'string' && (MODES as readonly string[]).includes(value);

let instance: ModeSwitcher | null = null;

export function getModeSwitcher(): ModeSwitcher {
  if (instance) return instance;

  const root = document.documentElement;

  const getMode = (): Mode => {
    const current = root.getAttribute('data-theme');
    return isMode(current) ? current : 'dark';
  };

  const setMode = (mode: Mode): Mode => {
    root.setAttribute('data-theme', mode);
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
      // Private browsing or storage disabled: the mode still applies for this page.
    }
    window.dispatchEvent(new CustomEvent('mode-change', { detail: { mode } }));
    return mode;
  };

  instance = {
    getMode,
    setMode,
    cycle: () => setMode(MODES[(MODES.indexOf(getMode()) + 1) % MODES.length]),
  };
  return instance;
}
