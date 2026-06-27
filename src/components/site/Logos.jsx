import React from "react";
import { Reveal } from "./Reveal";

const brands = [
  "Vértice",
  "Cordillera",
  "Mareo",
  "Atlas Health",
  "Lúmina",
  "Noria",
  "Editorial Páramo",
  "Casa Norte",
];

const Logos = () => {
  return (
    <section className="relative border-y border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Experiencia construida junto a diferentes industrias
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 md:grid-cols-4">
            {brands.map((b) => (
              <li
                key={b}
                className="text-center font-display text-xl tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Logos;
