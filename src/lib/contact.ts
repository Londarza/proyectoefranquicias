const WHATSAPP_NUMBER = "5491164656763";
const DEFAULT_WHATSAPP_TEXT =
  "Hola, vi e-Franquicias y quiero asesoramiento para evaluar una franquicia.";

export function buildWhatsAppHref(message = DEFAULT_WHATSAPP_TEXT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = buildWhatsAppHref();

export const emailJsConfig = {
  endpoint: "https://api.emailjs.com/api/v1.0/email/send",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export function isEmailJsConfigured() {
  return Boolean(
    emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey,
  );
}
