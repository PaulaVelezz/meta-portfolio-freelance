import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleMore, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import WhatsAppBackdrop from "./WhatsAppBackdrop";
import WhatsAppCard from "./WhatsAppCard";
import { SERVICES } from "../../services/whatsAppService";

const FloatingMultipleWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function click(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("mousedown", click);
    return () => window.removeEventListener("mousedown", click);
  }, []);

  useEffect(() => {
    function esc(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && <WhatsAppBackdrop onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <div ref={ref} className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-20 right-0 w-[360px] rounded-3xl border border-border bg-background/80 p-5 shadow-elevated backdrop-blur-2xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">
                    ¿En qué podemos ayudarte?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Elegí un área y comenzá la conversación.
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl p-2 hover:bg-muted"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3">
                {SERVICES.map((service, index) => (
                  <WhatsAppCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#610F00] bg-[#610F00] text-white shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:border-[#22C55E]"
        >
          <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-[#16a34a] to-[#22C55E] transition-transform duration-300 group-hover:translate-y-0" />

          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="msg"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircleMore className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingMultipleWhatsApp;
