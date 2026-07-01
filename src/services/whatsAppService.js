import { LaptopMinimal, Smartphone, Megaphone } from "lucide-react";

const PHONE = {
  web: import.meta.env.VITE_WPP_WEB,
  content: import.meta.env.VITE_WPP_SOCIAL_MEDIA_CONTENT,
  ads: import.meta.env.VITE_WPP_ADS,
};

export const SERVICES = [
  {
    id: "web",
    phone: PHONE.web,
    icon: LaptopMinimal,
    title: "Desarrollo Web",
    subtitle: "Sitios • Ecommerce • Landing Pages",
    message:
      "Hola! Me interesa el servicio de Desarrollo Web. ¿Podrían enviarme más información?",
  },

  {
    id: "content",
    phone: PHONE.content,
    icon: Smartphone,
    title: "Contenido RRSS",
    subtitle: "Estrategia • Diseño • Community",
    message:
      "Hola! Me interesa el servicio de Contenido para Redes Sociales. ¿Podrían enviarme más información?",
  },

  {
    id: "ads",
    phone: PHONE.ads,
    icon: Megaphone,
    title: "Publicidad Digital",
    subtitle: "Meta Ads • Google Ads",
    message:
      "Hola! Me interesa comenzar campañas publicitarias. ¿Podrían enviarme más información?",
  },
];

export function openWhatsApp(service) {
  const url = `https://wa.me/${service.phone}?text=${encodeURIComponent(
    service.message,
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
