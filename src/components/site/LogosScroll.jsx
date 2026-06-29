import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "./SectionHeader";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const companies = [
  {
    name: "Mercado Libre",
    logo: "/logos/mercadolibre.svg",
    bg: "#FFE600",
    text: "#1a1a1a",
  },
  {
    name: "Globant",
    logo: "/logos/globant.svg",
    bg: "#B4D233",
    text: "#1a1a1a",
  },
  {
    name: "Despegar",
    logo: "/logos/despegar.svg",
    bg: "#00AEEF",
    text: "#fff",
  },
  {
    name: "Naranja X",
    logo: "/logos/naranjax.svg",
    bg: "#FF6B00",
    text: "#fff",
  },
  { name: "OLX", logo: "/logos/olx.svg", bg: "#00A650", text: "#fff" },
  {
    name: "Personal",
    logo: "/logos/personal.svg",
    bg: "#7B2D8B",
    text: "#fff",
  },
  {
    name: "Santander",
    logo: "/logos/santander.svg",
    bg: "#EC0000",
    text: "#fff",
  },
  { name: "Claro", logo: "/logos/claro.svg", bg: "#DA291C", text: "#fff" },
];

// Mitad superior (curvan por arriba), mitad inferior (curvan por abajo)
const topIndexes = [0, 1, 2, 3];
const bottomIndexes = [4, 5, 6, 7];

function Tooltip({ name }) {
  return (
    <div
      className="
      absolute -top-10 left-1/2 -translate-x-1/2
      px-3 py-1.5
      bg-white text-gray-900
      text-xs font-semibold tracking-wide whitespace-nowrap
      rounded-lg shadow-xl
      opacity-0 scale-95 pointer-events-none
      transition-all duration-200 ease-out
      group-hover:opacity-100 group-hover:scale-100
      z-50
    "
    >
      {name}
      <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white" />
    </div>
  );
}

function CompanyCard({ company, index }) {
  // Determina si va arriba o abajo según su índice
  const lane = topIndexes.includes(index) ? "top" : "bottom";

  return (
    <div
      className={`museum-box museum-box--${lane} group relative shrink-0 mx-5 cursor-pointer`}
      style={{ zIndex: 10 + index }}
    >
      <Tooltip name={company.name} />
      <div
        className="
          relative w-24 h-32
          rounded-2xl
          border-2 border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          flex flex-col items-center justify-center
          overflow-hidden
          transition-shadow duration-300
          group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]
          group-hover:border-white/50
        "
        style={{ backgroundColor: company.bg }}
      >
        <img
          src={company.logo}
          alt={company.name}
          draggable={false}
          className="w-12 h-12 object-contain select-none"
          style={{
            filter:
              company.text === "#fff" ? "brightness(0) invert(1)" : "none",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10 rounded-t-2xl pointer-events-none" />
      </div>
    </div>
  );
}

const LogosScroll = () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(
    () => {
      // ── 1. TRACK HORIZONTAL PRINCIPAL ──────────────────────────────
      const mainTrack = gsap.to(scrollRef.current, {
        x: "-350vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=5000",
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      // ── 2. CARDS SUPERIORES: curvan hacia arriba ────────────────────
      gsap.utils.toArray(".museum-box--top").forEach((box, i) => {
        gsap.to(box, {
          // Cada una se eleva un poco más que la anterior
          y: -(200 + i * 35),
          rotation: gsap.utils.random(-20, 20),
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: box,
            containerAnimation: mainTrack,
            start: "left 90%",
            end: "right 10%",
            scrub: 1.2,
          },
        });
      });

      // ── 3. CARDS INFERIORES: curvan hacia abajo ─────────────────────
      gsap.utils.toArray(".museum-box--bottom").forEach((box, i) => {
        gsap.to(box, {
          y: 200 + i * 35,
          rotation: gsap.utils.random(-20, 20),
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: box,
            containerAnimation: mainTrack,
            start: "left 90%",
            end: "right 10%",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: triggerRef },
  );

  return (
    <div
      ref={triggerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#F9F1EB" }}
    >
      {/* TEXTO — siempre visible desde el inicio, z-0 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none gap-6">
        <SectionHeader
          title={
            <>
              Más que{" "}
              <span className="font-display italic text-brand-gradient">
                marketing.
              </span>
            </>
          }
        />
        {/* El botón necesita pointer-events-auto para ser clickeable */}
        <div className="pointer-events-auto">
          <Link
            to="/#casos"
            className="group
              relative
              inline-flex
              items-center
              gap-2
              overflow-hidden
              rounded-full
              bg-primary
              px-4
              py-2
              text-sm
              font-medium
              text-primary-foreground
              transition-all
              duration-300
              hover:-translate-y-0.5
              cursor-pointer
            "
          >
            <span
              className="
              absolute inset-0 -z-10
              translate-y-full bg-primary-600
              transition-transform duration-300 ease-out
              group-hover:translate-y-0
            "
            />
            Conocer más
            <span
              aria-hidden
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            >
              <ArrowDown size={16} />
            </span>
          </Link>
        </div>
      </div>

      {/* TRACK — cards encima del texto */}
      <div
        ref={scrollRef}
        className="relative z-10 flex h-full items-center pointer-events-none"
        style={{ width: "450vw", paddingLeft: "100vw" }}
      >
        {companies.map((company, index) => (
          <div key={company.name} className="pointer-events-auto">
            <CompanyCard company={company} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosScroll;
