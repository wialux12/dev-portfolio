import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { ProjectImage } from "@/types/content";

export function CaseGallery({ gallery }: { gallery: ProjectImage[] }) {
  if (gallery.length < 2) return null;

  return (
    <section className="py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading index="—" label="Экраны" title="Как это выглядит" />

        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {gallery.map((image) => (
            <RevealItem
              key={image.src}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
