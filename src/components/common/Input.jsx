import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  onBlur,
  error,
  touched,
  helperText,
}) => {
  const hasError = touched && error;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={name} className="text-xs font-medium text-text-secondary tracking-wide uppercase flex items-center gap-1">
          {label}
          {required && <span className="text-accent">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full rounded-xl border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-text-muted/60 transition-all duration-300 outline-none ${
            hasError
              ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
              : "border-border hover:border-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
          }`}
        />
      </div>
      {helperText && !hasError && (
        <span className="text-xs text-text-muted">{helperText}</span>
      )}
      <AnimatePresence>
        {hasError && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs font-medium text-destructive mt-0.5 pl-1"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
