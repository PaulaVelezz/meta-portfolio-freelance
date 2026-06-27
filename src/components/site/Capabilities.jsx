import React from "react";
import { Stagger, itemVariants } from "./Reveal";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const caps = [
  "Estrategia",
  "Community Management",
  "Paid Media",
  "Desarrollo Frontend",
  "Landing Pages",
  "Optimización de conversión",
  "Analítica",
  "Experiencias digitales",
];

const Capabilities = () => {
  return (
    <section className="relative py-32 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[300px] max-w-3xl -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Diferencial"
          title={
            <>
              Más que{" "}
              <span className="font-display italic text-brand-gradient">
                marketing.
              </span>
            </>
          }
          description="Combinamos estrategia, contenido, performance y tecnología para construir experiencias digitales que generan resultados medibles."
        />

        <Stagger className="mt-14 flex flex-wrap gap-3" staggerChildren={0.04}>
          {caps.map((c) => (
            <motion.span
              key={c}
              variants={itemVariants}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-text-primary transition-all duration-300 hover:border-primary-300 hover:bg-primary-50"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-brand/20 text-[10px] text-brand-glow">
                ✓
              </span>
              {c}
            </motion.span>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Capabilities;
