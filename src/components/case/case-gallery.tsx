import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import type { ProjectImage, ProjectImageFit } from "@/types/content";

export function CaseGallery({
  gallery,
  fit = "cover",
  note,
}: {
  gallery: ProjectImage[];
  fit?: ProjectImageFit;
  note?: string;
}) {
  if (gallery.length < 2) return null;

  const isContain = fit === "contain";

  return (
    <section className="py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          index="—"
          label="Экраны"
          title="Как это выглядит"
          description={note}
        />

        <RevealGroup
          className={cn(
            "grid grid-cols-1 gap-5 md:grid-cols-2",
            isContain && "sm:grid-cols-2 md:grid-cols-4"
          )}
        >
          {gallery.map((image) => (
            <RevealItem
              key={image.src}
              className={cn(
                "relative overflow-hidden rounded-2xl border border-border bg-card",
                isContain ? "aspect-[3/4]" : "aspect-[16/10]"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  isContain
                    ? "(min-width: 768px) 25vw, 50vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className={
                  isContain
                    ? "object-contain object-center p-5 drop-shadow-xl"
                    : "object-cover object-top"
                }
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
