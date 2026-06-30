import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

function TimelineStep({ step, index, progress }) {
  const dotScale = useTransform(
    progress,
    [index * 0.18, index * 0.18 + 0.08],
    [0.6, 1],
  );

  const dotOpacity = useTransform(
    progress,
    [index * 0.18, index * 0.18 + 0.08],
    [0.3, 1],
  );

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8"
    >
      <div className="relative">
        <motion.div
          style={{
            scale: dotScale,
            opacity: dotOpacity,
          }}
          className="
            absolute
            left-2
            top-3
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-brand
            shadow-glow
            sm:left-6
          "
        />
      </div>

      <div className="surface-card rounded-2xl p-6 transition-all duration-500 hover:border-primary-200 hover:shadow-elevated">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-3xl text-brand-gradient sm:text-4xl">
            {step.n}
          </span>

          <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
            {step.title}
          </h3>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}

const Methodology = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
  });

  return (
    <section id="metodologia" className="relative py-28 sm:py-28">
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

        <div ref={timelineRef} className="relative mt-16">
          {/* Línea gris */}
          <div
            className="
              absolute
              left-4
              top-2
              bottom-2
              w-[2px]
              bg-border
              sm:left-6
            "
          />

          {/* Línea coloreada */}
          <motion.div
            style={{
              scaleY,
              transformOrigin: "top",
            }}
            className="
              absolute
              left-4
              top-2
              bottom-2
              w-[2px]
              bg-gradient-to-b
              from-brand
              via-brand-glow
              to-accent
              sm:left-6
            "
          />

          <ol className="space-y-10 sm:space-y-14">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.n}
                step={step}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
