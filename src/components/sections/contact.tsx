import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

const steps = [
  {
    title: "Пишете",
    description: "Пара строк о задаче — этого достаточно для первого ответа.",
  },
  {
    title: "Отвечаю за 24 часа",
    description: "Без автоответчиков и посредников — отвечаю сам.",
  },
  {
    title: "Считаем сроки и бюджет",
    description: "Честная оценка объёма ещё до старта работы.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-grain py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          index="07"
          label="Контакты"
          title="Обсудим ваш проект?"
          description="Пишите напрямую — без форм обратной связи и отделов продаж между нами."
        />

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<a href={`mailto:${siteConfig.email}`} />}
              nativeButton={false}
              className="h-12 gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </Button>
            <Button
              variant="outline"
              render={
                <a href={siteConfig.github} target="_blank" rel="noreferrer noopener" />
              }
              nativeButton={false}
              className="h-12 gap-2 rounded-full border-border-strong px-6 text-[0.95rem] font-medium"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-3.5" />
            </Button>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-8 border-t border-border pt-12 sm:grid-cols-3">
          {steps.map((step, index) => (
            <RevealItem key={step.title} className="flex flex-col gap-2">
              <span className="font-mono text-sm text-accent">
                0{index + 1}
              </span>
              <h3 className="font-medium text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
