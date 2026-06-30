import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { INDUSTRIES, SERVICES, projects } from "./portfolio-data";

const Portfolio = () => {
  const [services, setServices] = useState(new Set());
  const [industries, setIndustries] = useState(new Set());
  const [active, setActive] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const wrapRef = useRef(null);

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
    <section id="casos" className="relative py-32 sm:py-32">
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
              {filtered.length} de {projects.length} proyectos
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

        {/* FILTER MENU PILLS */}
        <div
          ref={wrapRef}
          className="relative mt-12 flex flex-wrap items-center gap-3"
        >
          <FilterPill
            label="Servicios"
            count={services.size}
            open={openMenu === "services"}
            onToggle={() =>
              setOpenMenu(openMenu === "services" ? null : "services")
            }
          >
            <DropdownList
              items={SERVICES}
              selected={services}
              onPick={(v) => toggle(services, setServices, v)}
              onClose={() => setOpenMenu(null)}
            />
          </FilterPill>

          <FilterPill
            label="Industrias"
            count={industries.size}
            open={openMenu === "industries"}
            onToggle={() =>
              setOpenMenu(openMenu === "industries" ? null : "industries")
            }
          >
            <DropdownList
              items={INDUSTRIES}
              selected={industries}
              onPick={(v) => toggle(industries, setIndustries, v)}
            />
          </FilterPill>

          {anyActive && (
            <button
              type="button"
              onClick={() => {
                clearAll();
                setOpenMenu(null);
              }}
              className="ml-auto text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Limpiar filtros
            </button>
          )}
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
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
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

/* ---------------- FILTER PILL ---------------- */

function FilterPill({ label, count, value, open, onToggle, children }) {
  const active = open || (count ?? 0) > 0;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
          active
            ? "border-primary bg-primary/5 text-primary"
            : "border-border bg-white text-text-secondary hover:border-primary/40 hover:text-primary"
        }`}
      >
        <span>{label}</span>

        {value ? (
          <span className="normal-case tracking-normal text-text-secondary">
            {value}
          </span>
        ) : count > 0 ? (
          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] text-white">
            {count}
          </span>
        ) : null}

        <span
          className={`text-base leading-none transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{
              duration: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 top-full z-40 mt-3 min-w-[260px] overflow-hidden rounded-2xl border border-border bg-background shadow-elevated"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- DROPDOWN LIST ---------------- */

function DropdownList({ items, selected, onPick, onClose }) {
  return (
    <div className="py-2">
      {items.map((item) => {
        const active = selected.has(item);

        return (
          <button
            key={item}
            type="button"
            onClick={() => {
              onPick(item);
              onClose?.();
            }}
            className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
              active
                ? "text-primary bg-primary/5"
                : "text-text-secondary hover:bg-primary-50 hover:text-primary"
            }`}
          >
            <span>{item}</span>

            <span
              className={`text-xs transition-opacity ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              ●
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- PROJECT CARD ---------------- */
function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      type="button"
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.04, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group surface-card relative overflow-hidden rounded-2xl p-2 text-left transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-elevated`}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative h-[320px]">
          <img
            src={project.cover}
            alt={project.client}
            loading="lazy"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              grayscale
              transition-all
              duration-[1400ms]
              ease-out
              group-hover:scale-[1.05]
              group-hover:grayscale-0
            "
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* HEADER */}
          <div className="absolute inset-x-5 top-5 flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.18em] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {project.industry}
            </span>

            <span
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-primary
                text-primary-foreground
                transition-transform
                duration-500
                group-hover:rotate-45
                group-hover:scale-110
              "
            >
              ↗
            </span>
          </div>

          {/* TEXT */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand-glow">
              {project.client}
            </p>

            <h3 className="mt-2 text-2xl font-medium leading-tight tracking-tight">
              {project.tagline}
            </h3>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-3 py-4">
        <div className="flex flex-wrap gap-2">
          {project.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="
                rounded-full
                border
                border-border
                bg-background
                px-3
                py-1
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-muted-foreground
                transition-colors
                duration-300
                group-hover:border-primary/20
                group-hover:text-foreground
              "
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
