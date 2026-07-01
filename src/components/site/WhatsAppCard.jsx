import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "../../services/whatsAppService";

export default function WhatsAppCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.96,
        filter: "blur(6px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={() => openWhatsApp(service)}
      className="group w-full rounded-2xl border border-border bg-surface p-5 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-elevated"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon size={22} />
          </div>

          <div>
            <h4 className="font-medium text-lg">{service.title}</h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {service.subtitle}
            </p>
          </div>
        </div>

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.button>
  );
}
