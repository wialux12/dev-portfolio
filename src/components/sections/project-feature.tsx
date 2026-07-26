"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectFeature({
  project,
  reversed,
}: {
  project: Project;
  reversed?: boolean;
}) {
  const frameRef = useRef<HTMLAnchorElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !frameRef.current || !imgWrapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
      <div
        className={cn(
          "lg:col-span-7",
          reversed && "lg:order-2"
        )}
      >
        <Reveal>
          <Link
            href={`/work/${project.slug}`}
            ref={frameRef}
            className="group relative block aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div ref={imgWrapRef} className="absolute inset-0">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="scale-110 object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
              <ArrowUpRight className="size-5" />
            </span>
          </Link>
        </Reveal>
      </div>

      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              <span>{project.category}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{project.year}</span>
            </div>

            <h3 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground">
              <Link href={`/work/${project.slug}`} className="hover:text-accent">
                {project.title}
              </Link>
            </h3>

            <p className="text-pretty leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>

            <Link
              href={`/work/${project.slug}`}
              className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
            >
              Смотреть кейс
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
