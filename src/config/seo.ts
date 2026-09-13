export interface SiteSEO {
  siteName: string;
  twitterHandle?: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage?: string;
}

export const SITE_SEO: SiteSEO = {
  siteName: 'Lossless Slides',
  defaultTitle: 'Slides & Presentations — The Lossless Group',
  defaultDescription:
    'A decomposed Astro site for slides and presentations of The Lossless Group.',
};
