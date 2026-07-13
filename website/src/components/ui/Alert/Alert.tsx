import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "rounded-2xl border p-5",
  {
    variants: {
      variant: {
        info:
          "border-blue-200 bg-blue-50 text-blue-800",

        success:
          "border-emerald-200 bg-emerald-50 text-emerald-800",

        warning:
          "border-amber-200 bg-amber-50 text-amber-800",

        destructive:
          "border-rose-200 bg-rose-50 text-rose-800",
      },
    },

    defaultVariants: {
      variant: "info",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export default function Alert({
  className,
  variant,
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(
        alertVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}