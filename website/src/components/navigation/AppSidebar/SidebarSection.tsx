import type { ReactNode } from "react";

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
  collapsed?: boolean;
}

export default function SidebarSection({
  title,
  children,
  collapsed = false,
}: SidebarSectionProps) {
  return (
    <section className="mb-8">
      {!collapsed && (
        <h2
          className="
            mb-3
            px-3
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-slate-400
            transition-all
            duration-300
          "
        >
          {title}
        </h2>
      )}

      <div className="space-y-1">
        {children}
      </div>
    </section>
  );
}