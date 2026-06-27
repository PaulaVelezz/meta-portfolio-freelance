import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";

const NavigationButtons = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  isSubmitting,
}) => {
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between pt-8 mt-10 border-t border-border/60">
      {currentStep > 1 ? (
        <motion.button
          type="button"
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onPrev}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-elevated hover:text-foreground transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </motion.button>
      ) : (
        <div />
      )}

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary-600 transition-all disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Enviando...</span>
          </>
        ) : isLastStep ? (
          <>
            <span>Enviar proyecto</span>
            <Send className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Continuar</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
