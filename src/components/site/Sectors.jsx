import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import caseHealth from "@/assets/case-health.jpg";
import caseRealEstate from "@/assets/case-realestate.jpg";
import caseEditorial from "@/assets/case-editorial.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";
import pEdu1 from "@/assets/portfolio-edu-1.jpg";
import pPro1 from "@/assets/portfolio-pro-1.jpg";

const sectors = [
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
  {
    number: "06",
    name: "Servicios Profesionales",
    description:
      "Estudios, consultoras y B2B que buscan autoridad de marca, leads cualificados y posicionamiento premium.",
    tags: ["Branding", "Autoridad", "Leads B2B"],
    image: pPro1,
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
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const Sectors = () => {
  const [active, setActive] = useState(null);
  return (
    <section id="sectores" className="relative py-36 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column — sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              eyebrow="Sectores"
              title={
                <>
                  Industrias donde{" "}
                  <span className="font-display italic text-brand-gradient">
                    generamos resultados.
                  </span>
                </>
              }
              description="No empezamos desde cero. Conocemos el lenguaje, la audiencia y los ciclos comerciales de cada sector."
            />

            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
                {String((active ?? 0) + 1).padStart(2, "0")} /{" "}
                {String(sectors.length).padStart(2, "0")}
              </span>
              <span className="inline-block h-px w-12 bg-brand/60" />
              <span className="text-xs uppercase tracking-[0.22em] text-foreground/90">
                {sectors[active ?? 0].name}
              </span>
            </div>
          </div>

          {/* Right column — stacked cards */}
          <div className="relative">
            {sectors.map((s, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={s.name}
                  className="relative"
                  style={{ zIndex: i + 1 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl border bg-[oklch(0.13_0.012_270)] transition-all duration-500 ${
                      i > 0 ? "-mt-10" : ""
                    } ${
                      isActive
                        ? "border-white/20 shadow-elevated"
                        : "border-white/10 shadow-lg"
                    }`}
                  >
                    {/* Solid surface with subtle radial glow on hover */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        background:
                          "radial-gradient(600px circle at 90% 10%, rgba(255,255,255,0.04), transparent 60%)",
                      }}
                    />

                    <div className="relative p-6 sm:p-8">
                      {/* Card header */}
                      <div className="flex items-start justify-between">
                        <span
                          className={`text-foreground/80 transition-colors duration-300 ${
                            isActive ? "text-brand-glow" : ""
                          }`}
                        >
                          {s.icon}
                        </span>
                        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {s.number}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="mt-6 flex items-center gap-3">
                        <h3 className="font-display text-2xl tracking-[-0.02em] text-foreground sm:text-3xl">
                          {s.name}
                        </h3>
                        <motion.span
                          className="text-muted-foreground"
                          animate={{
                            rotate: isActive ? 45 : 0,
                            scale: isActive ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          ↗
                        </motion.span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                          Enfoque
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-foreground/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
