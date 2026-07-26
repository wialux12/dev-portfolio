import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface CaseSectionProps {
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export function CaseSection({
  index,
  title,
  children,
  className,
  wide,
}: CaseSectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {index}
            </div>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] text-foreground">
              {title}
            </h2>
          </Reveal>

          <Reveal
            delay={0.06}
            className={cn(
              "flex flex-col gap-5 text-pretty text-[1.05rem] leading-relaxed text-muted-foreground lg:col-span-8",
              wide && "lg:col-span-8"
            )}
          >
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
