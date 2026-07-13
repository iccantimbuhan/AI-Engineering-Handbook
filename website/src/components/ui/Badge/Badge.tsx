import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(

  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",

  {

    variants: {

      variant: {

        primary:

          "bg-indigo-600 text-white",

        secondary:

          "bg-slate-100 text-slate-900",

        success:

          "bg-emerald-100 text-emerald-700",

        warning:

          "bg-amber-100 text-amber-700",

        destructive:

          "bg-rose-100 text-rose-700",

        outline:

          "border border-slate-300 bg-white text-slate-700",

      },

    },

    defaultVariants: {

      variant: "primary",

    },

  }

);

export interface BadgeProps

  extends React.HTMLAttributes<HTMLDivElement>,

    VariantProps<typeof badgeVariants> {}

export default function Badge({

  className,

  variant,

  ...props

}: BadgeProps) {

  return (

    <div

      className={cn(

        badgeVariants({ variant }),

        className

      )}

      {...props}

    />

  );

}