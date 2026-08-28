// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// O site e servido na raiz do dominio proprio (public/CNAME).
// Por isso nao ha `base`: os caminhos absolutos (/logo.png) funcionam direto.
export default defineConfig({
  site: 'https://aluguelfacil.app',
  integrations: [sitemap()],
});
