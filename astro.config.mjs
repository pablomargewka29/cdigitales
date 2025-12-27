import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://cuentasdigitales.com.ar",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  i18n: { 
    defaultLocale: 'es', 
    locales: ['es','es-AR','es-MX','es-ES'] 
  }
});
