import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!project) {
      setGalleryOpen(false);
      setGalleryIndex(0);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (galleryOpen) setGalleryOpen(false);
        else onClose();
      }
      if (galleryOpen && project) {
        if (e.key === "ArrowRight")
          setGalleryIndex((i) => (i + 1) % project.gallery.length);
        if (e.key === "ArrowLeft")
          setGalleryIndex(
            (i) => (i - 1 + project.gallery.length) % project.gallery.length,
          );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, galleryOpen]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-0 top-0 flex h-full w-full flex-col overflow-y-auto border-l border-border bg-background shadow-elevated md:w-[min(92vw,960px)]"
            role="dialog"
            aria-modal="true"
            aria-label={project ? `Caso ${project.client}` : "Proyecto"}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-5 py-3 backdrop-blur-xl sm:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-primary-50 px-2.5 py-1 text-[11px] text-text-secondary">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  Case study
                </span>

                <span className="truncate text-sm text-muted-foreground">
                  {project.industry} · {project.year}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setGalleryIndex(0);
                    setGalleryOpen(true);
                  }}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-primary-50 px-3 py-1.5 text-xs text-text-primary transition-colors hover:bg-primary-100"
                >
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    ▦
                  </span>
                  Gallery
                  <span className="hidden text-[10px] text-muted-foreground sm:inline">
                    {project.gallery.length}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-text-primary transition-colors hover:bg-primary-50"
                >
                  Cerrar
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    ×
                  </span>
                </button>
              </div>
            </div>

            {/* Hero */}
            <header className="relative overflow-hidden border-b border-white/5">
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.accent} opacity-60`}
              />
              <div className="px-5 pt-12 pb-10 sm:px-10 sm:pt-16 sm:pb-14">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {project.client}
                </p>

                <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                  {project.tagline}
                </h2>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border px-2.5 py-1 text-[11px]"
                    >
                      {s}
                    </span>
                  ))}

                  {project.goals.map((g) => (
                    <span
                      key={g}
                      className="rounded-full border px-2.5 py-1 text-[11px]"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 pb-8 sm:px-10">
                <div className="overflow-hidden rounded-2xl border">
                  <img
                    src={project.cover}
                    alt={project.client}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </header>

            {/* Meta */}
            <section className="grid gap-px border-b border-border bg-border sm:grid-cols-3">
              {[
                { label: "Cliente", value: project.client },
                { label: "Industria", value: project.industry },
                { label: "Objetivo", value: project.goals.join(" · ") },
              ].map((m) => (
                <div key={m.label} className="bg-background px-5 py-5 sm:px-8">
                  <p className="text-xs uppercase">{m.label}</p>
                  <p className="mt-2 text-sm font-medium">{m.value}</p>
                </div>
              ))}
            </section>

            {/* Body */}
            <div className="space-y-14 px-5 py-14 sm:px-10 sm:py-20">
              <Block kicker="Objetivo" title="Lo que había que lograr">
                {project.objective}
              </Block>

              <Block kicker="Desafío" title="El punto de partida">
                {project.challenge}
              </Block>

              <Block kicker="Solución" title="Lo que construimos">
                {project.solution}
              </Block>

              {/* Metrics */}
              <section>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Resultados
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-tight text-gradient sm:text-3xl">
                  {project.result}
                </h3>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl border p-5">
                      <p className="text-xs uppercase tracking-[0.18em]">
                        {m.label}
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-brand-gradient">
                        {m.value}
                      </p>
                      {m.trend && <p className="mt-1 text-xs">{m.trend}</p>}
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery preview */}
              <section>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Galería
                    </p>
                    <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                      Mirá el proyecto en detalle
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setGalleryIndex(0);
                      setGalleryOpen(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-primary-50 px-4 py-2 text-xs text-text-primary transition-colors hover:bg-primary-100"
                  >
                    Ver galería completa <span aria-hidden>→</span>
                  </button>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.gallery.map((src, i) => (
                    <button
                      type="button"
                      key={src + i}
                      onClick={() => {
                        setGalleryIndex(i);
                        setGalleryOpen(true);
                      }}
                      className={`group overflow-hidden rounded-2xl border border-white/10 transition-all hover:border-white/25 ${i === 0 ? "sm:col-span-2" : ""}`}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="rounded-3xl relative overflow-hidden border p-8 sm:p-10">
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
                />
                <h3 className="text-2xl font-medium">
                  ¿Tenés un desafío similar?
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Conversemos cómo replicar este enfoque en tu marca.
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#contacto"
                    onClick={onClose}
                    className="rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground hover:bg-primary-600 transition-colors"
                  >
                    Agendar reunión →
                  </a>

                  <button
                    onClick={onClose}
                    className="rounded-full border border-border bg-white px-5 py-3 text-sm text-text-primary hover:bg-primary-50 transition-colors"
                  >
                    Ver más casos
                  </button>
                </div>
              </section>
            </div>
          </motion.aside>

          {/* Immersive Gallery overlay */}
          <AnimatePresence>
            {galleryOpen && (
              <motion.div
                key="gallery"
                className="absolute inset-0 z-[110] flex flex-col bg-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-10">
                  <div className="flex min-w-0 items-center gap-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {project.client} · Gallery
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {String(galleryIndex + 1).padStart(2, "0")} /{" "}
                      {String(project.gallery.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGalleryOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-text-primary transition-colors hover:bg-primary-50"
                    >
                      ← Caso
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-text-primary transition-colors hover:bg-primary-50"
                    >
                      Cerrar ×
                    </button>
                  </div>
                </div>

                {/* Image stage */}
                <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5 pb-6 sm:px-10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={project.gallery[galleryIndex]}
                      src={project.gallery[galleryIndex]}
                      alt=""
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="max-h-full max-w-full rounded-2xl border border-white/10 object-contain"
                    />
                  </AnimatePresence>

                  {/* Nav arrows */}
                  {project.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setGalleryIndex(
                            (i) =>
                              (i - 1 + project.gallery.length) %
                              project.gallery.length,
                          )
                        }
                        aria-label="Anterior"
                        className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary sm:left-10"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setGalleryIndex(
                            (i) => (i + 1) % project.gallery.length,
                          )
                        }
                        aria-label="Siguiente"
                        className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary sm:right-10"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex items-center justify-center gap-2 px-5 pb-6 sm:px-10">
                  {project.gallery.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      onClick={() => setGalleryIndex(i)}
                      aria-label={`Imagen ${i + 1}`}
                      className={`relative h-14 w-20 overflow-hidden rounded-md border transition-all ${
                        i === galleryIndex
                          ? "border-primary opacity-100"
                          : "border-border opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

/* ---------------- BLOCK ---------------- */

function Block({ kicker, title, children }) {
  return (
    <section>
      <p className="text-xs uppercase">{kicker}</p>
      <h3 className="mt-3 text-2xl font-medium sm:text-3xl">{title}</h3>
      <p className="mt-4 text-base text-muted-foreground">{children}</p>
    </section>
  );
}
