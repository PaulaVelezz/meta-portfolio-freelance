import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { INDUSTRIES, SERVICES, projects } from "./portfolio-data";

const SPAN_CLASS = {
  1: "md:row-span-2",
  2: "md:row-span-3",
  3: "md:row-span-4",
};

const Portfolio = () => {
  const [services, setServices] = useState(new Set());
  const [industries, setIndustries] = useState(new Set());
  const [active, setActive] = useState(null);

  const toggle = (set, setSet, value) => {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    setSet(next);
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const sOk =
        services.size === 0 || p.services.some((s) => services.has(s));

      const iOk = industries.size === 0 || industries.has(p.industry);

      return sOk && iOk;
    });
  }, [services, industries]);

  const clearAll = () => {
    setServices(new Set());
    setIndustries(new Set());
  };

  const anyActive = services.size + industries.size > 0;

  return (
    <section id="casos" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeader
            eyebrow="Portfolio"
            title={
              <>
                Proyectos donde{" "}
                <span className="font-display italic text-brand-gradient">
                  estrategia, contenido y código se encuentran.
                </span>
              </>
            }
            description="Casos reales con desafío, solución y métricas. Filtrá por servicio, industria u objetivo para encontrar el que más se parece al tuyo."
          />

          <div className="flex items-center gap-3 lg:justify-end">
            <span className="text-xs text-muted-foreground">
              {filtered.length} de {projects.length}
            </span>

            {anyActive && (
              <button
                onClick={clearAll}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-xs hover:bg-primary-50 text-text-primary transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-12 space-y-5">
          <FilterRow
            label="Servicios"
            items={SERVICES}
            active={services}
            onToggle={(v) => toggle(services, setServices, v)}
          />

          <FilterRow
            label="Industrias"
            items={INDUSTRIES}
            active={industries}
            onToggle={(v) => toggle(industries, setIndustries, v)}
          />
        </div>

        {/* GRID */}
        <div className="mt-14">
          {filtered.length === 0 ? (
            <div className="rounded-3xl py-20 text-center">
              <p>No hay proyectos con esos filtros.</p>

              <button
                onClick={clearAll}
                className="mt-4 rounded-full border px-4 py-2 text-sm"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[80px]"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    index={i}
                    onOpen={() => setActive(p)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Portfolio;

/* ---------------- FILTER ROW ---------------- */

function FilterRow({ label, items, active, onToggle }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[7rem_minmax(0,1fr)]">
      <p className="text-xs uppercase text-muted-foreground">{label}</p>

      <div className="flex flex-wrap gap-2">
        {items.map((v) => {
          const isOn = active.has(v);

          return (
            <button
              key={v}
              onClick={() => onToggle(v)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                isOn
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-white text-text-secondary border-border hover:bg-primary-50"
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`
      group
      surface-card
      relative
      overflow-hidden
      rounded-2xl
      text-left
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-primary-300
      hover:shadow-elevated
      ${SPAN_CLASS[project.span]}
      `}
    >
      <div className="absolute inset-0">
        <img
          src={project.cover}
          alt={project.client}
          loading="lazy"
          className="
          h-full
          w-full
          object-cover
          transition-all
          duration-[1400ms]
          ease-out
          group-hover:scale-[1.06]
          group-hover:blur-[2px]
          "
        />

        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-overlay opacity-50`}
        />

        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-background
          from-15%
          via-background/60
          via-50%
          to-transparent
        "
        />

        <div
          className="
          absolute inset-0
          bg-background/0
          transition-colors
          duration-500
          group-hover:bg-background/25
        "
        />
      </div>

      <div className="relative flex h-full min-h-[300px] flex-col justify-between p-5 sm:p-6">
        {/* Header Card */}
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-text-primary backdrop-blur-md">
            <span className="h-1 w-1 rounded-full bg-brand" />
            {project.industry}
          </span>

          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-sm text-text-primary backdrop-blur-md transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
            <span
              aria-hidden
              className="transition-transform group-hover:rotate-45"
            >
              ↗
            </span>
          </span>
        </div>
        {/* Info */}
        <div>
          <p className="text-xs uppercase">{project.client}</p>

          <h3 className="mt-2 text-xl">{project.tagline}</h3>

          <div className="mt-3 flex gap-2">
            {project.services.slice(0, 3).map((s) => (
              <span key={s} className="text-[10px] opacity-70">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
