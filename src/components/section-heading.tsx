import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{index}</span>
          <span className="text-muted-foreground/50">/</span>
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-balance font-display text-[clamp(1.9rem,3.4vw+1rem,3.4rem)] leading-[1.05] font-medium tracking-[-0.02em] text-foreground">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-[54ch] text-pretty text-[1.05rem] leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
