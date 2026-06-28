import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  { id: 1, label: "01 Contacto" },
  { id: 2, label: "02 Servicios" },
  { id: 3, label: "03 Branding" },
  { id: 4, label: "04 Negocio" },
  { id: 5, label: "05 Objetivos" },
  { id: 6, label: "06 Competencia" },
  { id: 7, label: "07 Revisión" },
];

const Stepper = ({ currentStep, onStepClick }) => {
  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="relative flex flex-col gap-6 py-2">
      <div className="absolute left-[13px] top-4 bottom-4 w-[2px] bg-border/80 -z-0" />

      <motion.div
        className="absolute left-[13px] top-4 w-[2px] bg-gradient-to-b from-primary to-accent origin-top -z-0"
        animate={{ height: `${progressPercent}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ maxHeight: "calc(100% - 32px)" }}
      />

      {steps.map((step) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;
        const isPending = step.id > currentStep;

        return (
          <button
            key={step.id}
            type="button"
            onClick={() => onStepClick(step.id)}
            className="group flex items-center gap-3.5 text-left transition-all duration-300 focus:outline-none z-10"
          >
            <div className="relative flex items-center justify-center shrink-0">
              {isCompleted && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </motion.div>
              )}

              {isActive && (
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-primary/20 animate-ping"
                  />
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md ring-4 ring-primary/15">
                    <span className="text-xs font-bold font-mono">●</span>
                  </div>
                </div>
              )}

              {isPending && (
                <div className="w-7 h-7 rounded-full border-2 border-border bg-background text-text-muted flex items-center justify-center transition-colors group-hover:border-text-muted">
                  <span className="text-xs font-mono">○</span>
                </div>
              )}
            </div>

            <span
              className={`text-sm tracking-tight transition-all duration-300 ${
                isActive
                  ? "font-semibold text-primary font-heading translate-x-1"
                  : isCompleted
                    ? "font-medium text-foreground hover:text-primary"
                    : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {step.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Stepper;
