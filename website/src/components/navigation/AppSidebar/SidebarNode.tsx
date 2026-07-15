import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarNodeProps {
  title: string;
  href?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function SidebarNode({
  title,
  href,
  children,
  defaultExpanded = false,
}: SidebarNodeProps) {
  const location = useLocation();

  const [expanded, setExpanded] =
    useState(defaultExpanded);

  const hasChildren = Boolean(children);

  const isActive =
    href !== undefined &&
    location.pathname === href;

  return (
    <div className="space-y-1">
      {hasChildren ? (
        <>
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-3
              py-2
              text-left
              transition-all
              duration-200
              hover:bg-slate-100
            "
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {title}
            </span>

            <ChevronRight
              className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                expanded ? "rotate-90" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              expanded
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 border-l border-slate-200 pl-4">
              {children}
            </div>
          </div>
        </>
      ) : (
        <Link
          to={href ?? "#"}
          className={`
            group
            relative
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2.5
            text-sm
            transition-all
            duration-200

            ${
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-0.5"
            }
          `}
        >
          {isActive && (
            <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600" />
          )}

          <span
            className={`h-2 w-2 rounded-full transition-colors ${
              isActive
                ? "bg-indigo-600"
                : "bg-slate-300 group-hover:bg-slate-400"
            }`}
          />

          <span className="font-medium">
            {title}
          </span>
        </Link>
      )}
    </div>
  );
}