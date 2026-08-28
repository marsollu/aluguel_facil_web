// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque para a URL final do site (ex.: https://aluguelfacil.app)
// Se publicar no GitHub Pages em um subcaminho, defina tambem `base`.
export default defineConfig({
  site: 'https://marsollu.github.io/aluguel-facil-site',
  integrations: [sitemap()],
});
