import { Container } from "@/components/layout/container";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { ProjectChallenge, ProjectMetric } from "@/types/content";

export function CaseChallenges({
  challenges,
  metrics,
}: {
  challenges: ProjectChallenge[];
  metrics: ProjectMetric[];
}) {
  return (
    <section className="border-y border-border bg-card/40 py-16 md:py-20">
      <Container className="flex flex-col gap-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Сложности
            </div>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] text-foreground">
              Что было непросто
            </h2>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <RevealItem
                key={challenge.title}
                className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-medium text-foreground">
                  {challenge.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {challenge.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {metrics.length > 0 && (
          <RevealGroup className="grid grid-cols-1 gap-4 border-t border-border pt-10 sm:grid-cols-3">
            {metrics.map((metric) => (
              <RevealItem key={metric.label} className="flex flex-col gap-1">
                <span className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground">
                  {metric.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {metric.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </Container>
    </section>
  );
}
