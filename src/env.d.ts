/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
