import heroBg from "@/assets/hero-bg.jpg";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ animate }) => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!animate) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })

        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          "-=.25",
        )

        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
          },
          "-=.45",
        )

        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
          },
          "-=.35",
        )

        .from(
          ".hero-preview",
          {
            opacity: 0,
            y: 60,
            scale: 0.97,
            duration: 1,
          },
          "-=.45",
        );
    }, heroRef);

    return () => ctx.revert();
  }, [animate]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative isolate overflow-hidden pt-40 pb-32 sm:pt-48 sm:pb-44"
    >
      {/* Background glow image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      {/* Floating orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-3xl animate-float-slow"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="hero-badge mx-auto flex max-w-fit items-center gap-2 rounded-full border border-border bg-primary-50 px-3.5 py-1.5 text-xs text-text-secondary backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          Aceptando proyectos para Q1 — 2 lugares
        </div>

        <h1 className="hero-title mx-auto mt-8 max-w-4xl text-center text-5xl font-semibold tracking-[-0.03em] sm:text-6xl md:text-7xl">
          <span className="text-gradient">
            Contenido, performance y desarrollo
          </span>{" "}
          <span className="font-display italic text-brand-gradient">
            para marcas que quieren crecer.
          </span>
        </h1>

        <p className="hero-description mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Estrategia, creatividad y tecnología trabajando juntas para
          transformar presencia digital en resultados reales.
        </p>

        <div className="hero-buttons mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary-600 hover:shadow-glow"
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
            href="#casos"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-primary-50"
          >
            Ver casos
          </a>
        </div>

        {/* Hero preview card */}
        <div className="hero-preview relative mx-auto mt-20 max-w-4xl">
          <div className="absolute -inset-x-10 -inset-y-6 -z-10 rounded-[2rem] bg-gradient-to-b from-brand/20 to-transparent blur-2xl" />
          <div className="surface-card rounded-2xl p-2 shadow-elevated">
            <div className="rounded-xl border border-border bg-background/80 p-5 sm:p-7">
              <div className="flex items-center gap-1.5 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 text-[11px] text-muted-foreground">
                  nucleo / dashboard
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {[
                  { label: "Engagement", value: "+312%", trend: "vs. Q3" },
                  { label: "Leads calificados", value: "1.847", trend: "+64%" },
                  { label: "CAC", value: "−38%", trend: "optimizado" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border bg-primary-50/50 p-3 sm:p-4"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                      {m.label}
                    </div>
                    <div className="mt-1.5 text-xl font-semibold tracking-tight text-gradient sm:text-3xl">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">
                      {m.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
