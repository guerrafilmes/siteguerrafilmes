# Guerra Filmes — Site Next.js 14 (corrigido)

## 1) Rodar local
- Node 18+
- `npm install`
- `npm run dev` → http://localhost:3000

## 2) Publicar na Vercel
- Add New → Project → Import Git Repository (repo no GitHub) ou Upload
- Deploy

## 3) Conectar domínio (Registro.br)
- Vercel → Project → Settings → Domains → Add → `andreguerrafilmes.com.br`
- DNS no registro.br:
  - A (apex @) → 76.76.21.21
  - CNAME (www) → cname.vercel-dns.com

## Alterações desta versão
- Imports relativos (sem `@/`) para evitar erros de resolução
- `next.config.mjs` com alias `@` via webpack, caso queira usar `@/` no futuro
- `tsconfig.json` com `baseUrl`/`paths` configurados
