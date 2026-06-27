import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import { INDUSTRIES, SERVICES, projects } from "./portfolio-data";
import ProjectModal from "./ProjectModal";

export function ProjectsIndex() {
  const [services, setServices] = useState(new Set());
  const [industries, setIndustries] = useState(new Set());
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const listRef = useRef(null);

  const toggle = (set, setSet, value) => {
    const next = new Set(set);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
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

  const onMouseMove = (e) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Portfolio · {projects.length} proyectos
            </p>
            <h1 className="mt-5 font-display font-semibold sm:text-5xl md:text-[3.5rem] md:leading-[1.05] tracking-tight">
              Proyectos{" "}
              <span className="italic text-brand-gradient">seleccionados</span>
            </h1>
          </div>
          <p className="text-base text-muted-foreground sm:text-lg lg:max-w-md lg:justify-self-end lg:text-right">
            Una muestra de cómo combinamos estrategia, contenido y código para
            mover métricas que importan. Filtrá por servicio o industria.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-16 space-y-5 border-t border-foreground/10 pt-10">
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
          <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
            <span>
              Mostrando {filtered.length} de {projects.length}
            </span>
            {anyActive && (
              <button
                type="button"
                onClick={clearAll}
                className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1.5 text-foreground transition-colors hover:bg-foreground/[0.07]"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Editorial list */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div
          ref={listRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-foreground/10"
        >
          {/* Floating preview */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  left: cursor.x,
                  top: cursor.y,
                  transform: "translate(-50%, -50%)",
                }}
                className="pointer-events-none absolute z-20 hidden h-[320px] w-[440px] overflow-hidden rounded-2xl border border-foreground/15 shadow-elevated lg:block"
              >
                <img
                  src={hovered.cover}
                  alt={hovered.client}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hovered.accent} mix-blend-overlay opacity-50`}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectRow
                key={p.id}
                project={p}
                index={i}
                onHover={() => setHovered(p)}
                onOpen={() => setActive(p)}
              />
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No hay proyectos con esa combinación de filtros.
            </div>
          )}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectRow({ project, index, onHover, onOpen }) {
  return (
    <motion.button
      type="button"
      layout
      onClick={onOpen}
      onMouseEnter={onHover}
      onFocus={onHover}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-foreground/10 py-8 text-left transition-colors hover:bg-foreground/[0.02] sm:py-10"
    >
      <span className="font-mono text-xs text-muted-foreground sm:text-sm">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.02] tracking-tight transition-transform duration-500 group-hover:translate-x-2">
            {project.client}
          </h3>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {project.tagline}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-foreground/15 bg-foreground/[0.03] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-foreground/80">
            {project.industry}
          </span>
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/80 transition-all duration-500 group-hover:bg-foreground group-hover:text-background sm:h-12 sm:w-12">
        <span
          aria-hidden
          className="text-base transition-transform duration-500 group-hover:rotate-45"
        >
          ↗
        </span>
      </span>
    </motion.button>
  );
}

function FilterRow({ label, items, active, onToggle }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:pt-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((v) => {
          const isOn = active.has(v);
          return (
            <button
              key={v}
              type="button"
              onClick={() => onToggle(v)}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition-all duration-300 ${
                isOn
                  ? "border-foreground/30 bg-foreground text-background shadow-glow"
                  : "border-foreground/10 bg-foreground/[0.03] text-muted-foreground hover:border-foreground/20 hover:text-foreground"
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
