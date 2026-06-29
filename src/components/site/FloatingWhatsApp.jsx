import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5491111111111"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        fixed
        bottom-8
        right-8
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        overflow-hidden
        rounded-2xl

        border
         border-[#610F00]

        bg-[#610F00]
        text-white
       
        backdrop-blur-xl

        shadow-elevated

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#22C55E]
      "
    >
      {/* Background Animation */}
      <span
        className="
          absolute
          inset-0
          -z-10
          translate-y-full

          bg-gradient-to-t
          from-[#16a34a]
          to-[#22C55E]

          transition-transform
          duration-300
          ease-out

          group-hover:translate-y-0
        "
      />

      <MessageCircleMore
        className="
          h-6
          w-6
           text-white

          transition-all
          duration-300

          group-hover:-rotate-6
          group-hover:scale-110
          group-hover:text-white
        "
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;
