import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { experience } from "@/content/experience";
import { achievements } from "@/content/achievements";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="06"
          label="Опыт и достижения"
          title="Небольшая, но настоящая история проектов."
          description="Без раздутого списка вакансий — только то, что реально сделано и может быть проверено."
        />

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <RevealGroup className="flex flex-col lg:col-span-7">
            {experience.map((item, index) => (
              <RevealItem key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "z-10 flex h-3 w-3 shrink-0 rounded-full",
                      item.highlight ? "bg-accent" : "bg-border-strong"
                    )}
                  />
                  {index < experience.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-1.5 pb-2">
                  <span className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                    {item.period}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup className="grid grid-cols-2 gap-4 self-start lg:col-span-5">
            {achievements.map((item) => (
              <RevealItem
                key={item.label}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-3xl font-medium tracking-[-0.02em] text-accent">
                  {item.value}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
                <span className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
