import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <section id="process" className="border-y border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          index="05"
          label="Процесс"
          title="Пять шагов от брифа до сопровождения."
          description="Один и тот же порядок для лендинга на один вечер и для B2B-платформы с интеграциями — разница только в масштабе каждого шага."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <RevealItem key={step.index} className="flex flex-col gap-4">
              <span className="font-mono text-sm text-accent">
                {step.index}
              </span>
              <h3 className="font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                {step.title}
              </h3>
              <p className="text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
