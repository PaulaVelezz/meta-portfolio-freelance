import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SelectCard = ({
  label,
  description,
  isSelected,
  onClick,
  icon: Icon,
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl p-5 border transition-all duration-300 select-none flex flex-col justify-between ${
        isSelected
          ? "border-primary bg-primary-50/40 shadow-glow shadow-primary/10 ring-1 ring-primary"
          : "border-border bg-surface hover:border-text-muted/40 hover:bg-surface-elevated/50 shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <div
              className={`p-2 rounded-xl transition-colors ${
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-text-secondary"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div>
            <h4
              className={`text-base font-semibold transition-colors ${
                isSelected ? "text-primary font-heading" : "text-foreground font-heading"
              }`}
            >
              {label}
            </h4>
            {description && (
              <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        <motion.div
          animate={{
            scale: isSelected ? 1 : 0.8,
            opacity: isSelected ? 1 : 0.4,
          }}
          className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
            isSelected
              ? "bg-primary border-primary text-primary-foreground"
              : "border-border bg-background"
          }`}
        >
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SelectCard;
