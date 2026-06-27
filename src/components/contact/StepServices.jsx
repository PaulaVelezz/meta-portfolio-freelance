import React from "react";
import SelectCard from "../common/SelectCard";
import {
  Palette,
  Layout,
  Code,
  Rocket,
  ShoppingCart,
  TrendingUp,
  Share2,
  Video,
  Cpu,
  Bot,
  Search,
  Users,
  PlusCircle,
  DollarSign,
  Clock,
  GraduationCap,
} from "lucide-react";

const serviceOptions = [
  { id: "Branding", label: "Branding", icon: Palette },
  { id: "Diseño Web", label: "Diseño Web", icon: Layout },
  { id: "Desarrollo Web", label: "Desarrollo Web", icon: Code },
  { id: "Landing Page", label: "Landing Page", icon: Rocket },
  { id: "Sitio Institucional", label: "Sitio Institucional", icon: Code },
  { id: "Ecommerce", label: "Ecommerce", icon: ShoppingCart },
  { id: "Tienda Nube", label: "Tienda Nube", icon: ShoppingCart },
  { id: "Elearning/Cursos", label: "Elearning/Cursos", icon: GraduationCap },
  {
    id: "Performance Marketing",
    label: "Performance Marketing",
    icon: TrendingUp,
  },
  { id: "Redes Sociales", label: "Redes Sociales", icon: Share2 },
  { id: "Creación de Contenido", label: "Creación de Contenido", icon: Video },
  { id: "Automatización", label: "Automatización", icon: Bot },
  { id: "SEO", label: "SEO", icon: Search },
  { id: "Consultoría", label: "Consultoría", icon: Users },
  { id: "Otro", label: "Otro", icon: PlusCircle },
];

const budgetOptions = [
  "Hasta $300.000",
  "$300.000 – $700.000",
  "$700.000 – $1.500.000",
  "Más de $1.500.000",
  "Todavía no esta definido",
];

const timelineOptions = [
  "Lo antes posible",
  "En los próximos 30 días",
  "En los próximos 60 días",
  "Flexible",
];

const StepServices = ({ formik }) => {
  const { values, setFieldValue } = formik;

  const toggleService = (serviceId) => {
    const current = values.services || [];
    if (current.includes(serviceId)) {
      setFieldValue(
        "services",
        current.filter((s) => s !== serviceId),
      );
    } else {
      setFieldValue("services", [...current, serviceId]);
    }
  };

  return (
    <div className="flex flex-col gap-9">
      {/* Services Selection */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
            ¿Qué estás buscando?
          </h2>
          <p className="text-sm text-text-secondary mt-1 font-body">
            Seleccioná uno o más servicios que necesite tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {serviceOptions.map((opt) => (
            <SelectCard
              key={opt.id}
              label={opt.label}
              icon={opt.icon}
              isSelected={(values.services || []).includes(opt.id)}
              onClick={() => toggleService(opt.id)}
            />
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="flex flex-col gap-4 pt-4 border-t border-border/60">
        <div>
          <h3 className="text-xl font-bold font-heading text-foreground flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Presupuesto estimado
          </h3>
          <p className="text-xs text-text-secondary mt-0.5 font-body">
            Nos ayuda a proponer el alcance y la mejor estrategia posible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {budgetOptions.map((b) => (
            <SelectCard
              key={b}
              label={b}
              isSelected={values.budget === b}
              onClick={() => setFieldValue("budget", b)}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-4 pt-4 border-t border-border/60">
        <div>
          <h3 className="text-xl font-bold font-heading text-foreground flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            ¿Cuándo te gustaría comenzar?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {timelineOptions.map((t) => (
            <SelectCard
              key={t}
              label={t}
              isSelected={values.timeline === t}
              onClick={() => setFieldValue("timeline", t)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepServices;
