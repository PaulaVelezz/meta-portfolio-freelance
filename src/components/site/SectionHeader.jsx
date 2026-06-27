import React from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={[
        isCenter ? "mx-auto text-center" : "",
        "max-w-3xl",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-primary-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-text-secondary">
            <span className="h-1 w-1 rounded-full bg-brand" />
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <h2 className="text-4xl font-semibold tracking-[-0.025em] text-gradient sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
