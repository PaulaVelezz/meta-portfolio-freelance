import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RefreshCw, ArrowRight } from "lucide-react";

const DraftModal = ({ isOpen, onRestore, onDiscard }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md rounded-3xl bg-surface p-7 border border-border shadow-2xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary-50 text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-foreground">
                Borrador guardado
              </h3>
              <p className="text-xs text-text-muted">N/N Studio Auto-Save</p>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed font-body">
            Encontramos un borrador guardado con la información que ingresaste previamente. ¿Querés continuar desde donde dejaste o preferís empezar de nuevo?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onDiscard}
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 rounded-full border border-border bg-background py-2.5 px-4 text-sm font-medium text-text-secondary hover:bg-muted/50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Empezar de nuevo</span>
            </button>
            <button
              type="button"
              onClick={onRestore}
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 rounded-full bg-primary py-2.5 px-4 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary-600 transition-all"
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DraftModal;
