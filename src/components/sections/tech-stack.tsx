import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { stackGroups } from "@/content/stack";

export function TechStack() {
  return (
    <section id="stack" className="border-y border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          index="03"
          label="Стек"
          title="Инструменты, которые не меняю ради моды."
          description="Современный стек, выбранный за производительность и скорость разработки — не за хайп."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <RevealItem key={group.label} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
