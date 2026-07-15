import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "group",

          "rounded-[20px]",

          "border",

          "border-slate-200/80",

          "bg-white",

          "shadow-[0_1px_2px_rgba(15,23,42,0.03)]",

          "transition-all",

          "duration-200",

          "hover:-translate-y-0.5",

          "hover:border-slate-300",

          "hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "space-y-3 p-8",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        [
          "text-xl",

          "font-semibold",

          "tracking-tight",

          "text-slate-950",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        [
          "text-[15px]",

          "leading-7",

          "text-slate-600",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-8 pb-8",
        className
      )}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "flex",

          "items-center",

          "justify-end",

          "border-t",

          "border-slate-100",

          "px-8",

          "py-6",
        ],
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};