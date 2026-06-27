import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ currentStep, totalSteps, autoSaveStatus }) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full flex flex-col gap-2.5 pb-6 border-b border-border/60">
      <div className="flex items-center justify-between text-xs font-medium tracking-wide">
        <span className="text-text-secondary">
          Paso <strong className="text-foreground font-semibold">{currentStep}</strong> de {totalSteps}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-text-muted">{percentage}% completado</span>
          <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full text-[11px] border border-emerald-200/50">
            {autoSaveStatus}
          </span>
        </div>
      </div>
      <div className="h-1.5 w-full bg-muted/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
