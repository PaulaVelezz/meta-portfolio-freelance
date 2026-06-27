import React from "react";
import { motion } from "framer-motion";
import caseHealth from "@/assets/case-health.jpg";
import caseRealEstate from "@/assets/case-realestate.jpg";
import caseEditorial from "@/assets/case-editorial.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";
import { SectionHeader } from "./SectionHeader";

const cases = [
  {
    client: "Atlas Health",
    industry: "Health Care",
    services: ["Estrategia", "Paid Media", "Landing"],
    result: "+248% en consultas calificadas",
    detail: "Funnel de captación para clínica con 4 sucursales.",
    image: caseHealth,
  },
  {
    client: "Cordillera Estates",
    industry: "Real Estate",
    services: ["Frontend", "CRO", "Contenido"],
    result: "3.2× conversión a visitas agendadas",
    detail: "Plataforma de inventario premium con tour 3D.",
    image: caseRealEstate,
  },
  {
    client: "Editorial Páramo",
    industry: "Editorial",
    services: ["Community", "Branding", "Campañas"],
    result: "+96k comunidad en 7 meses",
    detail: "Lanzamiento editorial y catálogo digital.",
    image: caseEditorial,
  },
  {
    client: "Noria Goods",
    industry: "E‑commerce",
    services: ["Performance", "Optimización", "Analítica"],
    result: "−42% CAC con +180% ROAS",
    detail: "Escalamiento de Meta + Google para DTC.",
    image: caseEcom,
  },
];

const Cases = () => {
  return (
    <section id="casos" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Casos"
          title={
            <>
              Resultados que{" "}
              <span className="font-display italic text-brand-gradient">
                se pueden medir.
              </span>
            </>
          }
          description="Una muestra de proyectos donde estrategia, contenido y desarrollo trabajaron como un solo equipo."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group surface-card relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary-200 hover:shadow-elevated"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
                <img
                  src={c.image}
                  alt={c.client}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] text-text-primary backdrop-blur">
                  {c.industry}
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold tracking-tight">
                    {c.client}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.detail}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="mt-1 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground"
                >
                  ↗
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white px-2.5 py-0.5 text-[11px] text-text-secondary hover:bg-primary-50 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Resultado
                </span>
                <span className="text-base font-medium text-brand-gradient">
                  {c.result}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
