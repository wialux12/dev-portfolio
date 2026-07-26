import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectFeature } from "@/components/sections/project-feature";
import { projects } from "@/content/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container className="flex flex-col gap-20 md:gap-28">
        <SectionHeading
          index="04"
          label="Избранные проекты"
          title="Три продукта, три разных набора ограничений."
          description="Личный проект без бюджета, международный форум на 400+ участников и B2B-платформа с юридическими рамками — ниже разобран каждый."
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, index) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
