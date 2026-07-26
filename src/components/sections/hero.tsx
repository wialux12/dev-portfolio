import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ScrambleReveal } from "@/components/motion/scramble-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { achievements } from "@/content/achievements";

export function Hero() {
  return (
    <section className="bg-grain relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-20%] left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[140px]"
      />

      <Container className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {siteConfig.availability} · {siteConfig.location}
          </div>
        </Reveal>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,6vw+1rem,6rem)] leading-[0.98] font-medium tracking-[-0.03em] text-balance text-foreground">
          <Reveal as="span" className="block" delay={0.05}>
            Один разработчик.
          </Reveal>
          <span className="block">
            <ScrambleReveal text="Полный цикл продукта." delayMs={350} />
          </span>
        </h1>

        <Reveal delay={0.2}>
          <p className="max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Дизайн, код, инфраструктура и деплой — от идеи до продакшена, без
            агентства между вами и результатом.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#work" />}
              nativeButton={false}
              className="h-12 gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground hover:bg-primary/90"
            >
              Смотреть проекты
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              render={<a href="#contact" />}
              nativeButton={false}
              className="h-12 gap-2 rounded-full border-border-strong px-6 text-[0.95rem] font-medium"
            >
              Написать напрямую
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <dl className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 font-mono text-sm text-muted-foreground">
            {achievements.slice(0, 3).map((item) => (
              <div key={item.label} className="flex items-baseline gap-2">
                <dt className="font-semibold text-foreground">{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
