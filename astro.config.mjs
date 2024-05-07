import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  output: 'static',
  integrations: [tailwind(), preact()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es'
    }
  }
});