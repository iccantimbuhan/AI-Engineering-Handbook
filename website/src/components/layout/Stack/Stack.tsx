import type { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}

const gaps = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

export default function Stack({
  children,
  className = "",
  gap = "md",
}: StackProps) {
  return (
    <div className={`flex flex-col ${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
}