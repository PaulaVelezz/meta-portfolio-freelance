import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const tools = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "GA4",
  "FB Pixel",
  "HubSpot",
  "Notion",
  "Figma",
  "Webflow",
  "Framer",
  "Shopify",
  "WordPress",
  "Mailchimp",
  "Elementor",
  "TiendaNube",
  "Google Tag Manager",
  "Google Analytics",
  "Zapier",
  "Make",
];

function MarqueeRow({ items, baseVelocity = 1 }) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [hovered, setHovered] = useState(false);

  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    const hoverBoost = hovered ? 3 : 1;

    let moveBy =
      directionFactor.current * baseVelocity * (delta / 1000) * hoverBoost;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mx-6 flex items-center gap-4 font-display text-4xl tracking-tight text-foreground/80 transition-colors hover:text-brand sm:text-6xl"
          >
            {t}
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-brand/60"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const GrowthStack = () => {
  const row1 = tools.slice(0, 10);
  const row2 = tools.slice(10);
  return (
    <section
      id="herramientas"
      className="relative overflow-hidden border-y border-foreground/5 bg-surface-elevated py-32 sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Growth Stack"
          title={
            <>
              Las herramientas{" "}
              <span className="font-display italic text-brand-gradient">
                que usamos.
              </span>
            </>
          }
          description="Plataformas y servicios que orquestamos para activar, medir y escalar cada proyecto."
        />
      </div>

      <div className="mt-16 space-y-6">
        <MarqueeRow items={row1} baseVelocity={2} />
        <MarqueeRow items={row2} baseVelocity={-2} />
      </div>
    </section>
  );
};

export default GrowthStack;
