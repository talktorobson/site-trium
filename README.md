# Site TRIUM BPO

Landing page e prévia do Portal do Cliente da TRIUM BPO (triumbpo.com.br).

**Escopo de conteúdo (v3 + módulos):** FOPA (folha, DP, eSocial, portal digital) como núcleo; módulos opcionais alinhados ao `trium-portal` — Solução de Ponto, Recrutamento, Canal de Denúncias, Gestão de Riscos NR-1 e Gestão de PJs. Sem tabela de preços pública (PEPM/tiers ficam só na proposta).

**Product media**

- `trium/video/` — jornadas webm (marketing, ~400KB cada):
  - `colab-pf.webm` — app colaborador CLT (PF)
  - `prestador-pj.webm` — app prestador PJ
  - posters `*-poster.jpg`
- `trium/shots/` — stills do portal RH / NR-1 / denúncias

**Re-gravar jornadas** (em `trium-portal`, stack local + seed):

```sh
# Colaborador PF
DRY=1 node demo/record-employee.mjs
node demo/record-employee.mjs
# comprimir para o site:
ffmpeg -y -i demo/…-employee-pwa.webm -an -c:v libvpx-vp9 -b:v 0 -crf 38 -vf scale=390:-2 \
  ../site-trium/trium/video/colab-pf.webm
```

Prestador PJ: use / regrave o fluxo do portal do prestador (ver `demo/*gestao-pj-portal-prestador.webm`) e comprima para `prestador-pj.webm`.

## Estrutura (v3)

Site React renderizado no navegador (sem etapa de build), via React 18 + Babel standalone carregados por CDN. Sem `npm install`.

- `index.html` — landing page (monta `trium/app.jsx` e as seções).
- `client-portal.html` — prévia do Portal do Cliente (demo).
- `trium/` — componentes JSX (`app.jsx`, `sections-top/mid/bottom.jsx`, `icons.jsx`, `portal.jsx`), estilos (`site.css`, `portal.css`), ícones PNG e `config.js`.
- `_ds/` — design system TRIUM (tokens, estilos e bundle com `TriumLogo`).
- `index-v2-backup.html` / `index-v1-backup.html` — versões anteriores (single-file), mantidas só como referência.

O painel de edição de design ("Tweaks") usado na prototipagem foi removido da versão publicada.

## Configuração antes de publicar

Tudo em `trium/config.js` (`window.TRIUM`):

- `WA_NUMBER` — número comercial do WhatsApp, formato internacional sem espaços (placeholder atual `5515999999999`).
- `PORTAL_URL` — URL do Portal do Cliente. Enquanto for `#`, o botão mostra o aviso de "em implantação". Para apontar para a prévia local, use `client-portal.html`.
- `FORM_EMAIL` — destino do formulário de contato via FormSubmit. No primeiro envio, o FormSubmit manda um email de confirmação para esse endereço.

Placeholders no conteúdo: sobrenomes e minibios das sócias na seção Equipe.

## Notas de produção

React e Babel são carregados em modo de desenvolvimento via CDN e o JSX é transpilado no navegador. Funciona, mas para máxima performance/SEO o ideal é pré-compilar os JSX num bundle estático no futuro.

## Deploy

Qualquer host estático serve (Vercel, Netlify, Cloudflare Pages). Basta publicar a raiz do repo. Projeto atual: Vercel `site-trium`.
