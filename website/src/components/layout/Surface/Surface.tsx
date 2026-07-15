import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
}

export default function Surface({
  children,
  className,
}: SurfaceProps) {
  return (
    <section
      className={cn(
        [
          "rounded-[20px]",

          "border",

          "border-slate-200/70",

          "bg-white",

          "px-8",

          "py-8",

          "shadow-[0_1px_2px_rgba(15,23,42,0.03)]",
        ],
        className
      )}
    >
      {children}
    </section>
  );
}