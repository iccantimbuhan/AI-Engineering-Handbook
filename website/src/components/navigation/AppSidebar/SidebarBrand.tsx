import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";

import { useSidebar } from "@/app/providers/useSidebar";

export default function SidebarBrand() {
  const { collapsed } = useSidebar();

  return (
    <Link
      to="/"
      className="
        border-b
        border-slate-200
        transition-all
        duration-300
        hover:bg-slate-50
      "
    >
      <div
        className={`
          flex
          items-center
          px-6
          py-6
          transition-all
          duration-300

          ${
            collapsed
              ? "justify-center"
              : "gap-4"
          }
        `}
      >
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          <Cpu className="h-5 w-5 text-slate-700" />
        </div>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300

            ${
              collapsed
                ? "w-0 opacity-0"
                : "w-auto opacity-100"
            }
          `}
        >
          <h1 className="whitespace-nowrap text-base font-semibold tracking-tight text-slate-900">
            Ian Cantimbuhan
          </h1>

          <p className="whitespace-nowrap text-sm text-slate-500">
            Software Engineer • AI Automation
          </p>
        </div>
      </div>
    </Link>
  );
}