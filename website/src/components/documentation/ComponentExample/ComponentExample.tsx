import type { ReactNode } from "react";

interface ComponentExampleProps {
  title: string;
  children: ReactNode;
}

export default function ComponentExample({
  title,
  children,
}: ComponentExampleProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      {children}
    </div>
  );
}