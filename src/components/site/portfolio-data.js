import caseHealth from "../../assets/case-health.jpg";
import caseRealEstate from "../../assets/case-realestate.jpg";
import caseEditorial from "../../assets/case-editorial.jpg";
import caseEcom from "../../assets/case-ecommerce.jpg";

import pHealth1 from "@/assets/portfolio-health-1.jpg";
import pHealth2 from "@/assets/portfolio-health-2.jpg";
import pRe1 from "@/assets/portfolio-realestate-1.jpg";
import pEdi1 from "@/assets/portfolio-editorial-1.jpg";
import pEcom1 from "@/assets/portfolio-ecom-1.jpg";
import pEcom2 from "@/assets/portfolio-ecom-2.jpg";
import pEdu1 from "@/assets/portfolio-edu-1.jpg";
import pPro1 from "@/assets/portfolio-pro-1.jpg";

export const SERVICES = [
  "Community",
  "Paid Media",
  "Desarrollo Web",
  "Landing Pages",
  "Estrategia",
];

export const INDUSTRIES = [
  "Health Care",
  "Real Estate",
  "Educación",
  "Editorial",
  "Ecommerce",
  "Servicios Profesionales",
];

export const GOALS = [
  "Leads",
  "Branding",
  "Conversión",
  "Engagement",
  "Ventas",
];

export const projects = [
  {
    id: "atlas-health",
    client: "Atlas Health",
    industry: "Health Care",
    services: ["Estrategia", "Paid Media", "Landing Pages"],
    goals: ["Leads", "Conversión"],
    tagline: "De clínica local a referente regional en 7 meses.",
    cover: caseHealth,
    span: 2,
    accent: "from-primary-300/30 to-accent-300/20",
    year: "2025",
    objective:
      "Triplicar el volumen de consultas calificadas sin aumentar CAC.",
    challenge: "Dependencia de referidos y funnel digital inexistente.",
    solution: "Sistema end-to-end con landings y campañas segmentadas.",
    result: "+248% consultas calificadas con CAC menor.",
    metrics: [
      { label: "Consultas", value: "+248%", trend: "vs baseline" },
      { label: "CAC", value: "−31%", trend: "optimizado" },
      { label: "Show rate", value: "84%", trend: "+22 pts" },
      { label: "Sucursales", value: "4" },
    ],
    gallery: [pHealth1, pHealth2, caseHealth],
  },

  {
    id: "cordillera",
    client: "Cordillera Estates",
    industry: "Real Estate",
    services: ["Desarrollo Web", "Estrategia", "Landing Pages"],
    goals: ["Conversión", "Branding"],
    tagline: "Plataforma de inventario premium con tour 3D.",
    cover: pRe1,
    span: 3,
    accent: "from-primary-400/30 to-accent-400/20",
    year: "2025",
    objective: "Canal directo de visitas agendadas.",
    challenge: "Sitio estático sin conversión.",
    solution: "Buscador + CRM + tours 3D.",
    result: "3.2× conversión a visitas.",
    metrics: [
      { label: "Conversión", value: "3.2×" },
      { label: "Engagement", value: "+186%" },
      { label: "Visitas", value: "412/mes" },
      { label: "Lighthouse", value: "98" },
    ],
    gallery: [pRe1, caseRealEstate, caseHealth],
  },

  {
    id: "paramo",
    client: "Editorial Páramo",
    industry: "Editorial",
    services: ["Community", "Estrategia", "Paid Media"],
    goals: ["Engagement", "Branding"],
    tagline: "Una comunidad lectora desde cero.",
    cover: pEdi1,
    span: 2,
    accent: "from-primary-200/30 to-accent-300/20",
    year: "2024",
    objective: "Construir audiencia digital.",
    challenge: "Sin comunidad online.",
    solution: "Contenido + newsletter + eventos.",
    result: "+96k comunidad.",
    metrics: [
      { label: "Comunidad", value: "+96k" },
      { label: "Engagement", value: "9.4%" },
      { label: "Newsletter", value: "12k" },
      { label: "Eventos", value: "18" },
    ],
    gallery: [pEdi1, caseEditorial, caseEcom],
  },

  {
    id: "noria",
    client: "Noria Goods",
    industry: "Ecommerce",
    services: ["Paid Media", "Estrategia", "Landing Pages"],
    goals: ["Ventas", "Conversión"],
    tagline: "Escalamiento DTC con ROAS 5.6.",
    cover: pEcom1,
    span: 3,
    accent: "from-primary-500/20 to-accent-400/20",
    year: "2025",
    objective: "Escalar ventas sin perder margen.",
    challenge: "Dependencia de remarketing.",
    solution: "Creatividades + testing + atribución.",
    result: "ROAS 5.6 sostenido.",
    metrics: [
      { label: "ROAS", value: "5.6×" },
      { label: "CAC", value: "−42%" },
      { label: "Facturación", value: "3.4×" },
      { label: "AOV", value: "+27%" },
    ],
    gallery: [pEcom1, pEcom2, caseEcom],
  },

  {
    id: "lumina-edu",
    client: "Lúmina Academia",
    industry: "Educación",
    services: ["Desarrollo Web", "Estrategia", "Paid Media"],
    goals: ["Leads", "Conversión"],
    tagline: "Plataforma de cursos escalable.",
    cover: pEdu1,
    span: 2,
    accent: "from-primary-300/25 to-accent-200/15",
    year: "2024",
    objective: "Validar demanda y vender cursos.",
    challenge: "Sin marca ni infraestructura.",
    solution: "Funnels + landings + email nurturing.",
    result: "1.2k leads, 14% conversión.",
    metrics: [
      { label: "Leads", value: "1.2k" },
      { label: "Conversión", value: "14%" },
      { label: "CAC", value: "$22" },
      { label: "Cohortes", value: "3" },
    ],
    gallery: [pEdu1, caseHealth, caseEcom],
  },

  {
    id: "vertice-legal",
    client: "Vértice Legal",
    industry: "Servicios Profesionales",
    services: ["Estrategia", "Desarrollo Web", "Community"],
    goals: ["Branding", "Leads"],
    tagline: "Estudio boutique con autoridad digital.",
    cover: pPro1,
    span: 3,
    accent: "from-primary-400/20 to-accent-200/20",
    year: "2024",
    objective: "Posicionamiento digital.",
    challenge: "Baja diferenciación.",
    solution: "Branding + LinkedIn + contenido.",
    result: "32 reuniones C-level.",
    metrics: [
      { label: "Reuniones", value: "32" },
      { label: "Tráfico", value: "+412%" },
      { label: "Papers", value: "1.8k" },
      { label: "Cierres", value: "9" },
    ],
    gallery: [pPro1, caseRealEstate, caseHealth],
  },
];
