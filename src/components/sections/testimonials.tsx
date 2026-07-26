import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { testimonials } from "@/content/testimonials";

/** Рендерится только когда появятся реальные отзывы — см. content/testimonials.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-y border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          index="06"
          label="Отзывы"
          title="Что говорят те, с кем я уже работал."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <RevealItem
              key={item.name}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7"
            >
              <p className="text-pretty text-lg leading-relaxed text-foreground">
                «{item.quote}»
              </p>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {item.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.role}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
