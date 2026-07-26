import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/content";

export function CaseHero({ project }: { project: Project }) {
  const isContain = project.imageFit === "contain";

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Все проекты
          </Link>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              <span>{project.category}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{project.year}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-accent">{project.statusLabel}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-4xl text-balance font-display text-[clamp(2.4rem,5vw+1rem,4.6rem)] leading-[1.02] font-medium tracking-[-0.02em] text-foreground">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-[60ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-border py-6">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-1.5 text-sm font-medium text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card">
            {isContain && (
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 h-[80%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[100px]"
              />
            )}
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className={
                isContain
                  ? "object-contain object-center p-10 drop-shadow-2xl md:p-16"
                  : "object-cover object-top"
              }
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
