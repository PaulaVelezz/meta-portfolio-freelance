import React from "react";
import { Stagger, itemVariants } from "./Reveal";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const problems = [
  {
    title: "Más visibilidad",
    body: "Posicionamiento orgánico y pagado que pone tu marca donde está tu audiencia.",
  },
  {
    title: "Más consultas",
    body: "Funnels de captación claros, con mensajes que conectan e invitan a actuar.",
  },
  {
    title: "Más conversiones",
    body: "Landings y experiencias optimizadas para que cada visita rinda más.",
  },
  {
    title: "Más credibilidad digital",
    body: "Identidad consistente, contenido editorial y prueba social bien construida.",
  },
  {
    title: "Más eficiencia comercial",
    body: "Datos, automatizaciones y procesos que reducen fricción en cada etapa.",
  },
  {
    title: "Más crecimiento sostenible",
    body: "Optimización continua: lo que funciona se escala, lo que no, se descarta.",
  },
];

const Problems = () => {
  return (
    <section className="relative border-y border-border bg-surface py-28 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Lo que resolvemos"
          title={
            <>
              No vendemos servicios.{" "}
              <span className="font-display italic text-brand-gradient">
                Resolvemos desafíos.
              </span>
            </>
          }
        />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              className="group relative bg-background p-7 transition-colors duration-500 hover:bg-primary-50"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-brand transition-all group-hover:w-4" />
                Resultado
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Problems;
