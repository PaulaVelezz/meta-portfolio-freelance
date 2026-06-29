import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import HeroContent from "./HeroContent";
import HeroAurora from "./HeroAurora";

const Hero = ({ animate }) => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!animate) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })

        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          "-=.25",
        )

        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
          },
          "-=.45",
        )

        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
          },
          "-=.35",
        );
    }, heroRef);

    return () => ctx.revert();
  }, [animate]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative isolate overflow-hidden pt-32 pb-28 sm:pt-32 sm:pb-28"
    >
      <HeroAurora />
      <div className="mx-auto max-w-6xl px-6">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
