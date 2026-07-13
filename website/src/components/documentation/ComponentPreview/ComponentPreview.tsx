import type { ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
}

export default function ComponentPreview({
  children,
}: ComponentPreviewProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      {children}
    </div>
  );
}