import Image from "next/image";
import type { ProjectImage } from "@/types/content";

/**
 * Пара портретных скриншотов мобильного экрана, отцентрованных рядом с
 * одинаковыми отступами — используется вместо одного узкого скриншота,
 * который иначе выглядит потерянным в альбомной рамке карточки/обложки.
 */
export function PhonePair({
  images,
  priority,
}: {
  images: [ProjectImage, ProjectImage];
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-6 p-8 md:gap-10 md:p-14">
      {images.map((image) => (
        <div key={image.src} className="relative aspect-[9/19.5] h-full max-w-[42%]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 22vw, 40vw"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      ))}
    </div>
  );
}
