import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import type { Project } from "@/types/content";

export function CaseNav({ project }: { project: Project }) {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Следующий проект
            </span>
            <Link
              href={`/work/${project.slug}`}
              className="group flex items-center gap-3 font-display text-2xl font-medium tracking-[-0.01em] text-foreground"
            >
              {project.title}
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Или обсудим ваш проект →
          </Link>
        </div>
      </Container>
    </section>
  );
}
