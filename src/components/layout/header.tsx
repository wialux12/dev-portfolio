"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Header() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/80 bg-background/70 px-4 py-3 backdrop-blur-lg supports-backdrop-filter:bg-background/50">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-sm font-medium tracking-tight text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-[13px] font-semibold text-accent-foreground">
              КС
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-secondary" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden h-9 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:inline-flex"
              render={<a href="#contact" />}
              nativeButton={false}
            >
              Обсудить проект
            </Button>

            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full md:hidden"
                    aria-label="Открыть меню"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] px-2">
                <SheetHeader>
                  <SheetTitle>Навигация</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-2">
                  {navLinks.map((link) => (
                    <SheetClose
                      key={link.href}
                      render={<a href={link.href} />}
                      nativeButton={false}
                      className="rounded-xl px-3 py-3 text-base text-foreground hover:bg-secondary"
                    >
                      {link.label}
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto px-2 pb-4">
                  <SheetClose
                    render={<a href="#contact" />}
                    nativeButton={false}
                    className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
                  >
                    Обсудить проект
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
