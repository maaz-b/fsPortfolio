/**
 * EmailJS public config.
 *
 * NOTE: Hardcoded for now. Move to `VITE_*` env vars before going public:
 *   VITE_EMAILJS_PUBLIC_KEY=
 *   VITE_EMAILJS_SERVICE_ID=
 *   VITE_EMAILJS_TEMPLATE_ID=
 *
 * Template should use: {{from_name}}, {{reply_to}}, {{subject}}, {{message}}
 */
const HARDCODED = {
    publicKey: '_7eE8p_fnEQyBwqJy',
    serviceId: 'service_sowtphh',
    templateId: 'template_ytem57c',
};

export function getEmailJsConfig() {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? HARDCODED.publicKey;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? HARDCODED.serviceId;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? HARDCODED.templateId;
    if (!publicKey || !serviceId || !templateId) {
        return null;
    }
    return { publicKey, serviceId, templateId };
}
