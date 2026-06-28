import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const SuccessScreen = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="mb-6 mt-12 inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 shadow-elevated"
      >
        <CheckCircle2 className="w-12 h-12 stroke-[2]" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-4"
      >
        ¡Formulario enviado!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-base sm:text-lg text-text-secondary leading-relaxed font-body mb-10 max-w-xl"
      >
        Gracias por tomarte el tiempo de compartir tu proyecto con nosotros.
        Ahora tenemos un entendimiento mucho más claro de tu negocio. Estaremos
        revisando tu proyecto y te contactaremos pronto.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-glow hover:bg-primary-600 hover:scale-[1.02] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default SuccessScreen;
