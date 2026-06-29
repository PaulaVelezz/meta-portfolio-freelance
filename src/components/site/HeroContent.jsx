import React from "react";

const HeroContent = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default HeroContent;
