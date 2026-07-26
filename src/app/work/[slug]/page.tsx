import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseHero } from "@/components/case/case-hero";
import { CaseSection } from "@/components/case/case-section";
import { CaseChallenges } from "@/components/case/case-challenges";
import { CaseGallery } from "@/components/case/case-gallery";
import { CaseNav } from "@/components/case/case-nav";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Проект не найден" };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [{ url: project.cover.src }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <CaseHero project={project} />

      <CaseSection index="01" title="Проблема">
        <p>{project.problem}</p>
      </CaseSection>

      <CaseSection index="02" title="Задача">
        <p>{project.task}</p>
      </CaseSection>

      <CaseSection index="03" title="Решение">
        {project.solution.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </CaseSection>

      <CaseSection index="04" title="Мой вклад">
        <p>{project.contribution}</p>
      </CaseSection>

      <CaseSection index="05" title="Архитектура">
        <ul className="flex flex-col gap-3.5">
          {project.architecture.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseChallenges challenges={project.challenges} metrics={project.metrics} />

      <CaseSection index="06" title="Результат">
        <p>{project.result}</p>
      </CaseSection>

      <CaseGallery gallery={project.gallery} />

      <CaseNav project={nextProject} />
    </>
  );
}
