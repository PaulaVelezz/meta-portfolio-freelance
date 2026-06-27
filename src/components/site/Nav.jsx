import React, { useEffect, useState } from "react";
import LOGO from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    label: "Casos",
    href: "#casos",
  },
  {
    label: "Sectores",
    href: "#sectores",
  },
  {
    label: "Metodología",
    href: "#metodologia",
  },
  {
    label: "Equipo",
    href: "#equipo",
  },
  {
    label: "Proyectos",
    to: "/projects",
    type: "page",
  },
  {
    label: "Contacto",
    to: "/contact",
    type: "page",
  },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/80 shadow-elevated backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <img
            src={LOGO}
            alt="N/N Studio"
            className="h-10 w-10 rounded-md bg-gradient-to-br from-brand to-accent-cyan"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <li key={item.label}>
              {item.type === "page" ? (
                <Link
                  to={item.to}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    location.pathname === item.to
                      ? "text-accent"
                      : "text-text-secondary hover:bg-primary-50/50 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-text-secondary transition-colors hover:bg-primary-50/50 hover:text-accent"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-primary-600"
        >
          Agendar
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
