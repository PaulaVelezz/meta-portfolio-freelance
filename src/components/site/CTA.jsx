import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contacto" className="relative overflow-hidden py-32 sm:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-4xl font-semibold tracking-[-0.025em] text-gradient sm:text-6xl">
          ¿Listo para potenciar <br />
          <span className="font-display italic text-brand-gradient">
            tu presencia digital?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Contanos tu desafío y diseñemos una estrategia a medida.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary-600 hover:shadow-glow"
          >
            Agendar reunión
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-medium text-text-primary transition-colors hover:bg-primary-50"
          >
            Hablemos por WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Respondemos en menos de 24 h hábiles · Sin compromiso
        </p>
      </motion.div>
    </section>
  );
};

export default CTA;
