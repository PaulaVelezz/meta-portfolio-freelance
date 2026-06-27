import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-3 top-0 z-40 hidden h-screen w-[3px] md:block"
    >
      <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-foreground/8" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-y-8 left-0 w-full rounded-full bg-gradient-to-b from-brand via-brand-glow to-accent shadow-glow"
      />
    </div>
  );
};

export default ScrollProgress;
