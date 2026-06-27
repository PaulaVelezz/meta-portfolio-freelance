import React from "react";
import LOGO from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={LOGO}
            className="h-10 w-10 rounded-md bg-gradient-to-br from-brand to-accent-cyan"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} N/N. Estrategia, contenido y desarrollo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
