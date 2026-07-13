import type { ReactNode } from "react";

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ShowcaseSection({
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-3xl text-slate-600">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}