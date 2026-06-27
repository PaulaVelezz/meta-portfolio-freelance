import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import t1 from "@/assets/testimonial-1-pexels-ferlacan-11501678.jpg";
import t2 from "@/assets/testimonial-2-pexels-uiliamnornberg-30767567.jpg";
import t3 from "@/assets/testimonial-3-pexels-sandy-rondon-636255771-34509323.jpg";
import t4 from "@/assets/testimonial-4-pexels-cmrcn-30034933.jpg";
import t5 from "@/assets/testimonial-5-pexels-rut-isasi-930524-11840469.jpg";

const testimonials = [
  {
    img: t1,
    name: "Camila Restrepo",
    role: "Fundadora · Lúmina Skincare",
    quote:
      "Pasamos de campañas dispersas a un sistema de crecimiento real. En seis meses triplicamos el revenue de DTC y duplicamos el AOV.",
    highlight: "triplicamos el revenue",
  },
  {
    img: t2,
    name: "Mateo Salinas",
    role: "CEO · Cordillera Real Estate",
    quote:
      "El equipo entendió el negocio desde la primera reunión. Hoy generamos leads cualificados a un costo 40% menor que con la agencia anterior.",
    highlight: "leads 40% más baratos",
  },
  {
    img: t3,
    name: "Valentina Ortiz",
    role: "Head of Marketing · Noria EdTech",
    quote:
      "Estrategia, contenido y producto trabajando como una sola pieza. La conversión del onboarding subió 28% en el primer trimestre.",
    highlight: "+28% en onboarding",
  },
  {
    img: t4,
    name: "Dr. Iván Pereyra",
    role: "Director Médico · Atlas Health",
    quote:
      "Profesionalizaron toda nuestra comunicación. La calidad del lead mejoró tanto que el equipo comercial cierra más con menos esfuerzo.",
    highlight: "mejor calidad de lead",
  },
  {
    img: t5,
    name: "Sofía Aguirre",
    role: "Directora Comercial · Casa Norte",
    quote:
      "Las landings y campañas funcionan como un reloj. Tenemos pipeline previsible mes a mes por primera vez en cinco años.",
    highlight: "pipeline previsible",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  // autoplay
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % testimonials.length),
      6500,
    );
    return () => clearInterval(id);
  }, []);

  const go = (dir) =>
    setActive((a) => (a + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Testimonios"
          title={
            <>
              Lo que dicen{" "}
              <span className="font-display italic text-brand-gradient">
                de nosotros.
              </span>
            </>
          }
          description="Marcas que confiaron en el estudio y construyeron resultados sostenibles."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
          {/* Active portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-foreground/10 bg-surface-elevated shadow-elevated">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.img}
                  src={current.img}
                  alt={current.name}
                  width={512}
                  height={640}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
                  {current.highlight}
                </p>
                <h3 className="mt-1 font-display text-2xl tracking-tight">
                  {current.name}
                </h3>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>

            {/* counter chip */}
            <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground shadow-elevated">
              <span className="text-foreground">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span>/ {String(testimonials.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Quote + controls */}
          <div className="relative">
            <span
              aria-hidden
              className="font-display text-[10rem] leading-none text-brand/15 sm:text-[14rem]"
            >
              "
            </span>
            <div className="relative -mt-24 sm:-mt-32">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-2xl leading-snug tracking-tight sm:text-4xl"
                >
                  {current.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Avatar selector */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="mr-2 flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Anterior"
                  className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 text-foreground/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Siguiente"
                  className="grid h-10 w-10 place-items-center rounded-full bg-brand text-primary-foreground transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {testimonials.map((tt, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={tt.name}
                      onClick={() => setActive(i)}
                      aria-label={`Ver testimonio de ${tt.name}`}
                      className={`relative h-14 w-14 overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "border-brand shadow-glow scale-110"
                          : "border-foreground/10 grayscale hover:grayscale-0 hover:border-foreground/30"
                      }`}
                    >
                      <img
                        src={tt.img}
                        alt={tt.name}
                        width={120}
                        height={120}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
