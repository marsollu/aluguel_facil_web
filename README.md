# Aluguel Fácil — Site

Landing page e páginas legais do app [Aluguel Fácil](https://play.google.com/store/apps/details?id=com.marsollu.meus_alugueis).

Construído com [Astro](https://astro.build) — site estático, sem backend.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321
```

## Comandos

| Comando           | O que faz                              |
| ----------------- | -------------------------------------- |
| `npm install`     | Instala as dependências                |
| `npm run dev`     | Servidor de desenvolvimento            |
| `npm run build`   | Gera o site estático em `./dist`       |
| `npm run preview` | Serve o build local para conferir      |

## Estrutura

```
public/
  logo.png             ícone do app
  hero/                screenshots cruas usadas no topo
  screenshots/         imagens de marketing (já com título e moldura)
src/
  data/site.ts         link da Play Store, features, textos — EDITE AQUI
  layouts/Base.astro   HTML base, SEO e Open Graph
  layouts/Legal.astro  moldura das páginas de privacidade e termos
  components/          Header, Hero, Features, Gallery, Privacy, Faq, Cta, Footer
  pages/               index, privacidade, termos, 404
  styles/global.css    tokens espelhados de lib/core/theme/app_theme.dart do app
```

## Onde editar o quê

- **Textos, features e link da loja** → `src/data/site.ts`
- **Perguntas frequentes** → `src/components/Faq.astro`
- **Política de privacidade / termos** → `src/pages/privacidade.astro` e `src/pages/termos.astro`
- **Cores** → `src/styles/global.css` (mantenha em sincronia com o tema do app)

## Atualizando as screenshots

As imagens vêm do repositório do app (`assets/store/`). Ao gerar uma nova
leva de screenshots de marketing lá, copie para `public/screenshots/` e ajuste
a lista `SCREENSHOTS` em `src/data/site.ts`.

## Deploy

O workflow em `.github/workflows/deploy.yml` publica no GitHub Pages a cada push
na `main`. Para ativar: **Settings → Pages → Source: GitHub Actions**.

Antes do primeiro deploy, ajuste `site` (e `base`, se o site ficar em um
subcaminho) em `astro.config.mjs`.

Para publicar na Vercel ou Netlify, basta apontar para o repositório — ambas
detectam Astro automaticamente (build: `npm run build`, saída: `dist`).
