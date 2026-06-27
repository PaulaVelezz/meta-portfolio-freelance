import React from "react";
import Stepper from "./Stepper";

const Sidebar = ({ currentStep, onStepClick }) => {
  return (
    <aside className="lg:sticky lg:top-28 flex flex-col gap-8 w-full lg:w-80 shrink-0 self-start">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary font-heading">
          N/N Studio — Onboarding
        </span>
        <h1 className="text-3xl lg:text-4xl font-bold font-heading tracking-tight text-foreground leading-[1.15]">
          Contanos sobre tu proyecto.
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed font-body">
          Cuanto más sepamos sobre tu negocio, mejor podremos preparar una
          estrategia diseñada especialmente para vos.
        </p>
      </div>

      <div className="pt-2">
        <Stepper currentStep={currentStep} onStepClick={onStepClick} />
      </div>
    </aside>
  );
};

export default Sidebar;
