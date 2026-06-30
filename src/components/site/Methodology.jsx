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

function TimelineCard({ step, index, progress }) {
  const start = index / steps.length;
  const end = start + 0.12;

  const scale = useTransform(progress, [start, end], [0.6, 1]);

  const opacity = useTransform(progress, [start, end], [0.35, 1]);

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col items-center"
    >
      {/* Dot */}

      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="
          relative
          z-20
          h-4
          w-4
          rounded-full
          bg-brand
          shadow-glow
          ring-4
          ring-background
        "
      />

      {/* Connector */}

      <div className="h-8 w-px bg-border/40" />

      {/* Card */}

      <motion.div
        style={{
          opacity,
          y: useTransform(progress, [start, end], [24, 0]),
        }}
        className="
          surface-card
          w-full
          rounded-2xl
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-primary-300
          hover:shadow-elevated
        "
      >
        <span className="font-display text-4xl text-brand-gradient">
          {step.n}
        </span>

        <h3 className="mt-4 text-xl font-medium tracking-tight">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {step.body}
        </p>
      </motion.div>
    </motion.li>
  );
}

const Methodology = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 30%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
  });

  return (
    <section
      id="metodologia"
      className="relative py-28 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
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
          description="Un proceso claro, iterativo y medible. Cada etapa tiene un objetivo concreto y genera información para la siguiente."
        />

        <div ref={timelineRef} className="relative mt-20">
          {/* Línea base */}

          <div
            className="
                absolute
                left-0
                right-0
                top-2
                h-[2px]
                bg-border
              "
          />

          {/* Línea animada */}

          <motion.div
            style={{
              scaleX,
              transformOrigin: "left",
            }}
            className="
                absolute
                left-0
                right-0
                top-2
                h-[2px]
                bg-gradient-to-r
                from-brand
                via-brand-glow
                to-accent
              "
          />

          <ol className="grid grid-cols-1 gap-10 pt-2 md:grid-cols-5 md:gap-8">
            {steps.map((step, index) => (
              <TimelineCard
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
