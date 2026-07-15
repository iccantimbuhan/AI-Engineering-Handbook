import {
  FileText,
  GitBranch,
  Moon,
  Search,
} from "lucide-react";

import { useSidebar } from "@/app/providers/useSidebar";
import { LAYOUT } from "@/config/layout";

import HeaderSidebarToggle from "./HeaderSidebarToggle";

export default function AppHeader() {
  const { collapsed } = useSidebar();

  return (
    <header
      className="
        fixed
        top-0
        right-0
        z-30
        flex
        h-[72px]
        items-center
        justify-between
        border-b
        border-slate-200/70
        bg-white/80
        px-8
        backdrop-blur-xl
        transition-[left]
        duration-300
        ease-in-out
      "
      style={{
        left: collapsed
          ? LAYOUT.SIDEBAR_COLLAPSED_WIDTH
          : LAYOUT.SIDEBAR_WIDTH,
      }}
    >
      <div className="flex items-center gap-4">
        <HeaderSidebarToggle />

        <button
          type="button"
          className="
            flex
            w-full
            max-w-md
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            shadow-sm
            transition-all
            duration-200
            hover:border-slate-300
          "
        >
          <div className="flex items-center gap-3 text-slate-500">
            <Search className="h-4 w-4" />

            <span className="text-sm">
              Search...
            </span>
          </div>

          <kbd className="rounded-md border bg-slate-50 px-2 py-1 text-xs text-slate-500">
            ⌘K
          </kbd>
        </button>
      </div>

      <div className="ml-8 flex items-center gap-2">
        <a
          href="#"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            px-3
            py-2
            text-sm
            text-slate-600
            transition-all
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <FileText className="h-4 w-4" />
          Resume
        </a>

        <a
          href="https://github.com/iccantimbuhan/AI-Engineering-Bootcamp"
          target="_blank"
          rel="noreferrer"
          className="
            rounded-xl
            p-2
            text-slate-600
            transition-all
            hover:bg-slate-100
            hover:text-slate-900
          "
          aria-label="GitHub"
        >
          <GitBranch className="h-5 w-5" />
        </a>

        <button
          type="button"
          className="
            rounded-xl
            p-2
            text-slate-600
            transition-all
            hover:bg-slate-100
            hover:text-slate-900
          "
          aria-label="Toggle Theme"
        >
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}