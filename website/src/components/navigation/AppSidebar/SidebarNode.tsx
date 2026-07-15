import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarNodeProps {
  title: string;
  href?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  collapsed?: boolean;
}

export default function SidebarNode({
  title,
  href,
  icon: Icon,
  children,
  defaultExpanded = false,
  collapsed = false,
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
              rounded-2xl
              px-3
              py-2
              text-left
              transition-all
              duration-200
              hover:bg-slate-100
            "
          >
            <span
              className={`
                overflow-hidden
                whitespace-nowrap
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-slate-400
                transition-all
                duration-300
                ${
                  collapsed
                    ? "w-0 opacity-0"
                    : "w-auto opacity-100"
                }
              `}
            >
              {title}
            </span>

            {!collapsed && (
              <ChevronRight
                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                  expanded ? "rotate-90" : ""
                }`}
              />
            )}
          </button>

          {!collapsed && (
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
          )}
        </>
      ) : (
        <Link
          to={href ?? "#"}
          className={`
            group
            relative
            flex
            items-center
            ${
              collapsed
                ? "justify-center px-0"
                : "gap-3 px-3"
            }
            rounded-2xl
            py-2.5
            text-sm
            transition-all
            duration-200
            ${
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }
          `}
        >
          {isActive && !collapsed && (
            <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600" />
          )}

          {Icon ? (
            <Icon
              className={`h-5 w-5 shrink-0 transition-colors ${
                isActive
                  ? "text-indigo-600"
                  : "text-slate-500 group-hover:text-slate-900"
              }`}
            />
          ) : (
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${
                isActive
                  ? "bg-indigo-600"
                  : "bg-slate-300 group-hover:bg-slate-400"
              }`}
            />
          )}

          <span
            className={`
              overflow-hidden
              whitespace-nowrap
              transition-all
              duration-300
              ${
                collapsed
                  ? "w-0 opacity-0"
                  : "w-auto opacity-100"
              }
            `}
          >
            {title}
          </span>
        </Link>
      )}
    </div>
  );
}