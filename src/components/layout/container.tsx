import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,4rem)]",
        className
      )}
    >
      {children}
    </div>
  );
}
