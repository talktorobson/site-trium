/* TRIUM BPO — configuração de produção (trocar antes/depois de publicar)
   Carregado como script normal antes do app. Disponível em window.TRIUM. */
window.TRIUM = {
  // PLACEHOLDER: número comercial do WhatsApp, formato internacional sem espaços.
  WA_NUMBER: "5515999999999",
  WA_GREETING: "Olá! Vim pelo site da TRIUM e quero saber mais sobre o BPO de folha.",
  // URL do Portal do Cliente. Enquanto for "#", o botão mostra o aviso de "em implantação".
  PORTAL_URL: "https://portal.triumbpo.com.br",
  // Destino do formulário via FormSubmit (confirmar e-mail no primeiro envio).
  FORM_EMAIL: "contato@triumbpo.com.br",
  // Notificação de novo lead para o comercial (com cópia). Também via FormSubmit;
  // o endereço LEAD_NOTIFY_EMAIL precisa ser ativado no primeiro envio.
  LEAD_NOTIFY_EMAIL: "comercial@triumbpo.com.br",
  LEAD_NOTIFY_CC: "talktorobson@gmail.com",
  waLink: function (text) {
    return "https://wa.me/" + this.WA_NUMBER + "?text=" + encodeURIComponent(text || this.WA_GREETING);
  },
};
