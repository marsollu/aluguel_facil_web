# Aluguel Fácil — Web

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
na `main`. Para ativar: **Settings -> Pages -> Source: GitHub Actions**.

### Dominio proprio: aluguelfacil.app

O arquivo `public/CNAME` ja declara o dominio. Falta apontar o DNS no
registrador do dominio:

**Registros A (apex, `aluguelfacil.app`)** - os quatro:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Registro AAAA (opcional, IPv6)**:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**Registro CNAME (`www`)**: `marsollu.github.io`

Depois, em **Settings -> Pages -> Custom domain**, confirme `aluguelfacil.app` e
marque **Enforce HTTPS** (o certificado leva alguns minutos para ser emitido).

### app-ads.txt

`public/app-ads.txt` contem a mesma linha do hub AppSollu
(`marsollu.github.io/app-ads.txt`). Ele precisa estar acessivel em
`https://aluguelfacil.app/app-ads.txt` **antes** de trocar o site do
desenvolvedor na ficha da Play Store para este dominio - senao o AdMob passa a
tratar o app como nao autorizado e a receita de anuncios cai.

Se o ID de publicador do AdMob mudar, atualize os dois arquivos juntos.

### Outras hospedagens

Para publicar na Vercel ou Netlify, basta apontar para o repositorio - ambas
detectam Astro automaticamente (build: `npm run build`, saida: `dist`).
