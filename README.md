# Site TRIUM BPO

Landing page e prévia do Portal do Cliente da TRIUM BPO (triumbpo.com.br).

**Escopo de conteúdo (v3 + módulos):** FOPA (folha, DP, eSocial, portal digital) como núcleo; módulos opcionais alinhados ao `trium-portal` — Solução de Ponto, Recrutamento, Canal de Denúncias, Gestão de Riscos NR-1 e Gestão de PJs. Sem tabela de preços pública (PEPM/tiers ficam só na proposta).

**Screenshots:** `trium/shots/` — capturas do portal RH, PWA colaborador, PWA prestador, acompanhamento de denúncia e nomeação de RT/psicólogo independente (NR-1). Origem: demos do `trium-portal` + página pública `/denuncia`.

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
