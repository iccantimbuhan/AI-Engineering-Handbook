import type { ReactNode } from "react";

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
}

export default function SidebarSection({
  title,
  children,
}: SidebarSectionProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </h2>

      <div className="space-y-1">
        {children}
      </div>
    </section>
  );
}