import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LOGO from "../../assets/Logo.png";

const COLUMN_COUNT = 16;

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          onComplete?.();
        },
      });

      tl.fromTo(
        ".loader-logo",
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
        },
      )

        .to(".loader-logo", {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
        })

        .to(".loader-column", {
          opacity: 0,
          scaleX: 0.85,
          transformOrigin: "left",
          stagger: 0.035,
          duration: 0.45,
        })

        .to(loaderRef.current, {
          autoAlpha: 0,
          duration: 0.25,
          pointerEvents: "none",
        });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="
      fixed
      inset-0
      z-[9999]
      overflow-hidden
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#B9BDAB]" />

      {/* Columns */}

      <div className="absolute inset-0 flex">
        {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
          <div key={i} className="loader-column flex-1 bg-[#B9BDAB]" />
        ))}
      </div>

      {/* Logo */}

      <div
        className="
        loader-logo
        absolute
        inset-0
        flex
        items-center
        justify-center
        "
      >
        <img src={LOGO} className="w-28 rounded-3xl" />
      </div>
    </div>
  );
};

export default PageLoader;
