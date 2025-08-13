# Guerra Filmes — Site Next.js 14

## 1) Rodar local
- Requisitos: Node 18+
- Instalar deps: `npm install`
- Subir: `npm run dev` e abrir http://localhost:3000

## 2) Publicar na Vercel
- Crie conta em https://vercel.com (gratuita)
- Clique **New Project** → **Import** (GitHub) ou **Deploy** via Upload
- A Vercel gera uma URL do tipo `https://guerra-filmes.vercel.app`

## 3) Conectar domínio (Registro.br)
- Projeto na Vercel → **Settings** → **Domains** → **Add** → `andreguerrafilmes.com.br`
- No **registro.br**: em DNS do domínio, crie
  - **A (apex)**: `@` → `76.76.21.21`
  - **CNAME (www)**: `www` → `cname.vercel-dns.com`
- Volte na Vercel e **Verify**.

## 4) Ajustes rápidos
- Headline do Hero em `components/Hero.tsx`
- Trocar logo em `/public/logo-guerra.png`
- Vídeos em `lib/films.ts`
- Cores em `tailwind.config.ts` e `app/globals.css`

## 5) Próximas páginas
- `/sobre` e blog (SEO)
- `/pacotes` com valores e tabela comparativa
- Eventos GA4/Pixel para cliques de WhatsApp e envio do Tally
