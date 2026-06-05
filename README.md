# Site TRIUM BPO

Landing page da TRIUM BPO (triumbpo.com.br). Terceirização de folha de pagamento e departamento pessoal para empresas de 10 a 99 colaboradores. FOPA é a linha de serviço de folha.

## Estrutura

Single file: `index.html` contém HTML, CSS e JS, sem build e sem dependências. Fontes via Google Fonts (Sora e Inter). Ícones SVG inline.

`index-v1-backup.html` é a versão anterior, mantida só como referência.

## Configuração antes de publicar

Constantes no bloco `<script>` no fim do `index.html`:

`WA_NUMBER` — número comercial do WhatsApp, formato internacional sem espaços (placeholder atual 5515999999999).
`PORTAL_URL` — URL do Portal do Cliente. Enquanto for `#`, o botão mostra um aviso de "em implantação".
`FORM_EMAIL` — destino do formulário de contato via FormSubmit. No primeiro envio, o FormSubmit manda um email de confirmação para esse endereço.

Placeholders no HTML: sobrenomes e minibios das sócias na seção Equipe (comentário PLACEHOLDER).

## Deploy

Qualquer host estático serve (Vercel, Netlify, Cloudflare Pages). Basta publicar a raiz do repo.
