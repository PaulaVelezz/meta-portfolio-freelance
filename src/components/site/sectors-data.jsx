import caseHealth from "@/assets/case-health.jpg";
import caseRealEstate from "@/assets/case-realestate.jpg";
import caseEditorial from "@/assets/case-editorial.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";
import pEdu1 from "@/assets/portfolio-edu-1.jpg";

export const SECTORS = [
  {
    number: "01",
    name: "Health Care",
    description:
      "Clínicas, especialistas y salud preventiva que necesitan captar pacientes calificados y gestionar su reputación digital.",
    tags: ["Captación", "Turnos", "Reputación"],
    image: caseHealth,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Real Estate",
    description:
      "Desarrollos, brokers y propiedades premium con ciclos de venta largos que demandan presencia digital sofisticada.",
    tags: ["Inventario", "Tours", "Leads de alto ticket"],
    image: caseRealEstate,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Editorial",
    description:
      "Editoriales y librerías construyendo comunidad lectora, catálogo de marca y lanzamientos con impacto cultural.",
    tags: ["Comunidad", "Lanzamientos", "Newsletter"],
    image: caseEditorial,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Educación",
    description:
      "Universidades, academias y programas de formación que escalan inscripciones y mejoran la experiencia de cohortes.",
    tags: ["Inscripciones", "Funnels", "Cohortes"],
    image: pEdu1,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Ecommerce",
    description:
      "Marcas DTC y retail que escalan performance, optimizan conversiones y retienen clientes sin sacrificar margen.",
    tags: ["ROAS", "CRO", "Retención"],
    image: caseEcom,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
];
