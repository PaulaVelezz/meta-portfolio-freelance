import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Investigación",
    body: "Comprendemos el negocio, la audiencia y los objetivos.",
  },
  {
    n: "02",
    title: "Estrategia",
    body: "Diseñamos un plan de crecimiento basado en datos.",
  },
  {
    n: "03",
    title: "Ejecución",
    body: "Contenido, campañas y desarrollo trabajando en conjunto.",
  },
  {
    n: "04",
    title: "Optimización",
    body: "Analizamos resultados y mejoramos continuamente.",
  },
  {
    n: "05",
    title: "Escalamiento",
    body: "Potenciamos lo que funciona, retiramos lo que no.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Metodología"
          title={
            <>
              Así{" "}
              <span className="font-display italic text-brand-gradient">
                trabajamos.
              </span>
            </>
          }
          description="Un proceso claro, iterativo y medible. Cada paso tiene un entregable y un indicador."
        />

        <div className="relative mt-16">
          {/* timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-6"
          />

          <ol className="space-y-10 sm:space-y-14">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8"
              >
                <div className="relative">
                  <div className="absolute left-2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-brand shadow-glow sm:left-4" />
                </div>
                <div className="surface-card rounded-2xl p-6 transition-all duration-500 hover:border-primary-200 hover:shadow-elevated">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl text-brand-gradient sm:text-4xl">
                      {s.n}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
