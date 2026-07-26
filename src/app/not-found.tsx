import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="bg-grain flex flex-1 items-center py-32">
      <Container className="flex flex-col items-start gap-6">
        <span className="font-mono text-sm text-accent">404</span>
        <h1 className="max-w-2xl text-balance font-display text-[clamp(2rem,4vw+1rem,3.6rem)] leading-[1.05] font-medium tracking-[-0.02em] text-foreground">
          Такой страницы не существует — но продакшен от этого не сломался.
        </h1>
        <p className="max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
          Возможно, ссылка устарела или содержит опечатку.
        </p>
        <Link
          href="/"
          className="group mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          На главную
        </Link>
      </Container>
    </section>
  );
}
