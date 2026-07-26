import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/content/site";

const facts = [
  { label: "Роль", value: "Full-stack разработчик" },
  { label: "Локация", value: siteConfig.location },
  {
    label: "Фокус",
    value: "Next.js/React продукты, Telegram Mini Apps, B2B-платформы",
  },
  { label: "Статус", value: siteConfig.availability },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            index="01"
            label="Обо мне"
            title="Дизайн и код — в одной голове, а не в двух."
          />

          <div className="mt-8 flex flex-col gap-5">
            <Reveal delay={0.05}>
              <p className="max-w-[58ch] text-pretty text-lg leading-relaxed text-muted-foreground">
                Я работаю на стыке дизайна и разработки — сам выбираю
                шрифтовую пару и токены, сам вёрстаю компонент, сам настраиваю
                сервер под HTTPS. Это не универсальность ради галочки: когда
                дизайн и код делает один человек, между макетом и продакшеном
                не теряется ни один пиксель отступа.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[58ch] text-pretty text-lg leading-relaxed text-muted-foreground">
                За последний год — от личного лендинга с фирменной
                canvas-анимацией до Telegram-приложения на 400+ участников
                форума и B2B-платформы с импортом из 1С. Разный масштаб, один
                принцип: доводить до конца самому, без передачи на подрядчика
                на середине пути.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-2">
          <Reveal delay={0.15}>
            <TerminalCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          whoami.sh
        </span>
      </div>
      <div className="flex flex-col gap-4 p-6 font-mono text-[0.85rem] leading-relaxed">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <span className="text-muted-foreground">
              <span className="text-accent">$</span> {fact.label.toLowerCase()}
            </span>
            <span className="pl-4 text-foreground">{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
