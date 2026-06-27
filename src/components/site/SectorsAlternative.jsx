import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

import { SectionHeader } from "./SectionHeader";
import { SECTORS } from "./sectors-data.jsx";

gsap.registerPlugin(ScrollTrigger);

const SectorsAlternative = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const currentIndex = { current: 0 };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${SECTORS.length * 100}%`,
        pin: true,
        scrub: 1,
        markers: false,

        onUpdate: (self) => {
          const index = Math.min(
            SECTORS.length - 1,
            Math.floor(self.progress * SECTORS.length),
          );

          if (index !== currentIndex.current) {
            currentIndex.current = index;

            setActive(index);
          }
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const sector = SECTORS[active];

  return (
    <section
      id="sectores"
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="grid w-full gap-20 lg:grid-cols-[550px_1fr]">
          {/* LEFT */}

          <div>
            <SectionHeader
              eyebrow="Sectores"
              title={
                <>
                  Lo construimos para{" "}
                  <span className="italic text-brand-gradient">
                    tu industria.
                  </span>
                </>
              }
              description="Conocemos el lenguaje, la audiencia y los ciclos comerciales de cada sector."
            />

            <div className="mt-16">
              {SECTORS.map((item, i) => {
                const isActive = active === i;

                return (
                  <div
                    key={item.name}
                    className={`
                      flex items-center gap-4 py-4
                      transition-all duration-500
                    `}
                  >
                    <span
                      className={`
                        text-xs tracking-[0.2em]
                        ${isActive ? "text-brand" : "text-muted-foreground"}
                      `}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`
                        font-display text-lg transition-all duration-500
                        ${
                          isActive
                            ? "translate-x-2 text-foreground"
                            : "text-muted-foreground/40"
                        }
                      `}
                    >
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={sector.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
              >
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
                  {/* IMAGE */}

                  <div className="absolute inset-0">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="h-full w-full object-cover opacity-20"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                  </div>

                  {/* CONTENT */}

                  <div className="relative p-8 sm:p-10 lg:p-12">
                    {/* Header */}

                    <div className="flex items-start justify-between">
                      <span className="text-brand-glow">{sector.icon}</span>

                      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {sector.number}
                      </span>
                    </div>

                    {/* Title */}

                    <div className="mt-8 flex items-center gap-3">
                      <h3 className="font-display text-4xl tracking-[-0.03em] text-foreground lg:text-5xl">
                        {sector.name}
                      </h3>

                      <span className="text-brand text-xl">↗</span>
                    </div>

                    {/* Description */}

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {sector.description}
                    </p>

                    {/* Tags */}

                    <div className="mt-8">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                        Enfoque
                      </span>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {sector.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-border
                              bg-primary-50
                              px-3
                              py-1.5
                              text-[11px]
                              text-foreground/80
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress */}

                    <div className="mt-12 flex items-center gap-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {sector.number}
                      </span>

                      <div className="h-px flex-1 bg-border">
                        <div
                          className="h-full bg-brand transition-all duration-500"
                          style={{
                            width: `${((active + 1) / SECTORS.length) * 100}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {String(SECTORS.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsAlternative;
