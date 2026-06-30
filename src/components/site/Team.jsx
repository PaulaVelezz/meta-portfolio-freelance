import React from "react";
import { motion } from "framer-motion";
import teamCm from "@/assets/team-community-manager.png";
import teamStrategist from "@/assets/team-creative-strategist-paidmedia.png";
import teamDev from "@/assets/team-frontend-developer.png";
import { SectionHeader } from "./SectionHeader";

const team = [
  {
    name: "Micaela Cedrón",
    role: "Community Manager",
    bio: "Construye comunidades que conversan, comparten y compran. 6 años creando voz de marca y contenido editorial.",
    img: teamCm,
  },
  {
    name: "Florencia Copertari",
    role: "Creative Strategist & Paid Media",
    bio: "Estrategia y performance en Meta, Google y TikTok. Más de $2M USD optimizados en campañas DTC y B2B.",
    img: teamStrategist,
  },
  {
    name: "Paula Velez",
    role: "Frontend Developer",
    bio: "Landings y productos web rápidos, accesibles y diseñados para convertir. Especialista en React y motion.",
    img: teamDev,
  },
];

const Team = () => {
  return (
    <section
      id="equipo"
      className="relative border-y border-border bg-surface py-28 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Equipo"
          title={
            <>
              Un equipo.{" "}
              <span className="font-display italic text-brand-gradient">
                Tres especialidades.
              </span>
            </>
          }
          description="Trabajamos juntos en cada proyecto. Sin handoffs, sin freelancers desconectados."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group surface-card overflow-hidden rounded-2xl p-2 transition-all duration-500 hover:-translate-y-1 hover:border-primary-200"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={m.img}
                  alt={m.name}
                  width={640}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-brand-glow">
                    {m.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-medium tracking-tight">
                    {m.name}
                  </h3>
                </div>
              </div>
              <p className="px-4 py-5 text-sm leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
