import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import heroBg from "../../assets/hero-bg.jpg";

const spring = {
  stiffness: 18,
  damping: 26,
  mass: 1.6,
};

const blobs = [
  {
    size: 520,
    color: "bg-brand/35",
    top: "12%",
    left: "45%",
    duration: 22,
    x: [-50, 30, -40],
    y: [-20, 30, -10],
  },
  {
    size: 420,
    color: "bg-accent-cyan/30",
    top: "18%",
    left: "65%",
    duration: 26,
    x: [30, -40, 20],
    y: [-30, 20, 0],
  },
  {
    size: 360,
    color: "bg-brand/25",
    top: "58%",
    left: "22%",
    duration: 24,
    x: [-20, 30, -10],
    y: [30, -20, 10],
  },
  {
    size: 300,
    color: "bg-white/20",
    top: "42%",
    left: "52%",
    duration: 18,
    x: [0, 25, 0],
    y: [0, -15, 0],
  },
  {
    size: 260,
    color: "bg-accent-cyan/20",
    top: "65%",
    left: "72%",
    duration: 20,
    x: [25, -25, 15],
    y: [-10, 25, -5],
  },
  {
    size: 220,
    color: "bg-brand/20",
    top: "28%",
    left: "28%",
    duration: 19,
    x: [-15, 15, -10],
    y: [20, -20, 15],
  },
];

const HeroAurora = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, spring);
  const smoothY = useSpring(mouseY, spring);

  useEffect(() => {
    const move = (e) => {
      const { innerWidth, innerHeight } = window;

      mouseX.set((e.clientX - innerWidth / 2) * 0.08);
      mouseY.set((e.clientY - innerHeight / 2) * 0.08);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Imagen de textura */}

      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />

      {/* Grid */}

      <div className="absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_75%)]" />

      {/* Aurora */}

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: [1, 1.08, 1],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[130px] ${blob.color}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
          }}
        />
      ))}

      {/* Mouse Glow */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          left: "50%",
          top: "38%",
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-70
          blur-[170px]
        "
      >
        <div
          className="
            h-full
            w-full
            rounded-full
            bg-[radial-gradient(circle,#C46C5A_0%,rgba(196,108,90,0.25)_35%,transparent_75%)]
          "
        />
      </motion.div>

      {/* Glow central */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[34%]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand/15
          blur-[220px]
        "
      />
    </div>
  );
};

export default HeroAurora;
