import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { INDUSTRIES, SERVICES, projects } from "./portfolio-data";
import ProjectModal from "./ProjectModal";

export function ProjectsGrid() {
  const [services, setServices] = useState(new Set());
  const [industries, setIndustries] = useState(new Set());
  const [sort, setSort] = useState("newest");
  const [active, setActive] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

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
    const list = projects.filter((p) => {
      const sOk =
        services.size === 0 || p.services.some((s) => services.has(s));
      const iOk = industries.size === 0 || industries.has(p.industry);
      return sOk && iOk;
    });
    return [...list].sort((a, b) =>
      sort === "newest"
        ? Number(b.year) - Number(a.year)
        : Number(a.year) - Number(b.year),
    );
  }, [services, industries, sort]);

  const clearAll = () => {
    setServices(new Set());
    setIndustries(new Set());
  };

  const anyActive = services.size + industries.size > 0;

  return (
    <section className="relative border-t border-foreground/10 py-24 sm:py-32">
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

        {/* Filter bar */}
        <div
          ref={wrapRef}
          className="relative mt-10 flex flex-wrap items-center gap-3"
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

          <FilterPill
            label="Orden"
            value={sort === "newest" ? "Nuevos" : "Antiguos"}
            open={openMenu === "sort"}
            onToggle={() => setOpenMenu(openMenu === "sort" ? null : "sort")}
          >
            <div className="py-2">
              {["newest", "oldest"].map((k) => {
                const on = sort === k;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      setSort(k);
                      setOpenMenu(null);
                    }}
                    className={`flex w-full items-center justify-between gap-6 px-4 py-2 text-left text-sm transition-colors ${
                      on
                        ? "text-foreground"
                        : "text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {k === "newest"
                      ? "Más nuevos primero"
                      : "Más antiguos primero"}
                    {on && <span className="text-xs">●</span>}
                  </button>
                );
              })}
            </div>
          </FilterPill>

          {anyActive && (
            <button
              type="button"
              onClick={clearAll}
              className="ml-auto text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Reset filtros
            </button>
          )}
        </div>

        {/* Masonry (CSS columns) */}
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <MasonryCard
                key={p.id}
                project={p}
                index={i}
                onOpen={() => setActive(p)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            Sin proyectos para esta combinación.
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function FilterPill({ label, count, value, open, onToggle, children }) {
  const active = open || (count ?? 0) > 0;
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors ${
          active
            ? "border-foreground/40 bg-foreground/[0.04] text-foreground"
            : "border-foreground/15 bg-foreground/[0.02] text-foreground/70 hover:border-foreground/30 hover:text-foreground"
        }`}
      >
        <span>{label}</span>
        {value ? (
          <span className="text-foreground/60 normal-case tracking-normal">
            {value}
          </span>
        ) : count && count > 0 ? (
          <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] tracking-normal text-background">
            {count}
          </span>
        ) : null}
        <span className="text-base leading-none">{open ? "—" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-40 mt-2 min-w-[260px] overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-elevated"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownList({ items, selected, onPick }) {
  return (
    <div className="py-2">
      {items.map((it) => {
        const on = selected.has(it);
        return (
          <button
            key={it}
            type="button"
            onClick={() => onPick(it)}
            className={`flex w-full items-center justify-between gap-6 px-4 py-2 text-left text-sm transition-colors ${
              on
                ? "text-foreground"
                : "text-foreground/55 hover:text-foreground"
            }`}
          >
            <span>{it}</span>
            <span className={`text-xs ${on ? "opacity-100" : "opacity-0"}`}>
              ●
            </span>
          </button>
        );
      })}
    </div>
  );
}

function MasonryCard({ project, index, onOpen }) {
  const aspect =
    project.span === 3
      ? "aspect-[3/4]"
      : project.span === 2
        ? "aspect-[4/3]"
        : "aspect-square";

  return (
    <motion.button
      type="button"
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group mb-6 block w-full break-inside-avoid text-left"
    >
      <div className={`relative ${aspect} overflow-hidden rounded-2xl`}>
        <img
          src={project.cover}
          alt={project.client}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-overlay opacity-40 transition-opacity duration-500 group-hover:opacity-60`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 max-w-[80%] rounded-xl bg-background/85 px-4 py-3 backdrop-blur-md transition-all duration-500 group-hover:bg-background">
          <p className="font-display text-lg leading-tight tracking-tight text-foreground">
            {project.client}
          </p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {project.industry} · {project.year}
          </p>
        </div>

        <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
          <span aria-hidden className="text-base">
            ↗
          </span>
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 px-1">
        {project.services.slice(0, 3).map((s) => (
          <span
            key={s}
            className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.button>
  );
}
