import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  prefetch: true,
  devToolbar: {
		enabled: false,
	},
  integrations: [tailwind()],
  output: 'server',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    },
    fallback:{
      en: 'es'
    }
  }
});