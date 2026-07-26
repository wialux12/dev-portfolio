import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { Container } from "@/components/layout/container";
import { navLinks, siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-16 py-20 md:py-28">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Есть проект?
          </span>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="group flex w-fit items-center gap-3 font-display text-[clamp(1.9rem,5vw,4.2rem)] leading-[1.02] font-medium tracking-[-0.02em] text-foreground transition-colors hover:text-accent"
          >
            {siteConfig.email}
            <ArrowUpRight className="size-[0.6em] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 border-t border-border pt-12 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <span className="font-display text-sm font-medium text-foreground">
              {siteConfig.name}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.role}
              <br />
              {siteConfig.location}
            </p>
          </div>

          <FooterColumn
            title="Навигация"
            links={navLinks.map((l) => ({ label: l.label, href: l.href }))}
          />

          <FooterColumn
            title="Проекты"
            links={projects.map((p) => ({
              label: p.title,
              href: `/work/${p.slug}`,
            }))}
          />

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground">Контакты</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Почта
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.name}. Все права защищены.
          </span>
          <span className="font-mono">
            Next.js · React · TypeScript · Tailwind CSS
          </span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-foreground">{title}</span>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
