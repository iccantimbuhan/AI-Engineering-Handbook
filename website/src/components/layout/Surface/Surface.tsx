import type { ReactNode } from "react";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
}

export default function Surface({
  children,
  className = "",
}: SurfaceProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}