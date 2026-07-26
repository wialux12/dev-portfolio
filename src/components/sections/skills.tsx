import type { LucideIcon } from "lucide-react";
import { Compass, Database, Layers, PenTool, Server, Workflow } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { skills } from "@/content/skills";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  PenTool,
  Workflow,
  Server,
  Database,
  Compass,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="02"
          label="Компетенции"
          title="Не только код — весь путь продукта."
          description="Шесть областей, в которых я закрываю продукт без передачи задачи на сторону."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <RevealItem
                key={skill.title}
                className={cn(
                  "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-border bg-card p-7",
                  skill.size === "lg" && "sm:col-span-2"
                )}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
