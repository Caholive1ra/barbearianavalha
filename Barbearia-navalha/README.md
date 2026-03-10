# Navalha Sampa Barbearia 💈

Landing page da **Navalha Sampa**, barbearia premium no Centro de São Paulo.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- SEO otimizado com **JSON-LD** (Schema.org BarberShop)

## Como rodar

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # Build de produção
npm run preview    # Preview do build
```

## Estrutura

```
src/
├── components/     # Seções da landing page
├── hooks/          # useScrollAnimation, useMobile
├── pages/          # Index (home) e 404
├── assets/         # Imagens (logo, fotos, etc.)
└── index.css       # Design tokens e utilities
public/
├── sitemap.xml     # Sitemap para crawlers
├── robots.txt      # Regras de indexação
└── logo.png        # OG image para compartilhamento
```

## Deploy

Qualquer plataforma de hospedagem estática: **Vercel**, **Netlify**, **Cloudflare Pages**.

> ⚠️ Após o deploy, atualize o domínio real em `sitemap.xml`, `robots.txt` e nas meta tags `og:url` / `canonical` em `index.html`.
