import { GitBranch } from "lucide-react";

import { useSidebar } from "@/app/providers/useSidebar";

export default function SidebarFooter() {
  const { collapsed } = useSidebar();

  return (
    <footer className="mt-auto border-t border-slate-200 p-4">
      <a
        href="https://github.com/iccantimbuhan/AI-Engineering-Bootcamp"
        target="_blank"
        rel="noreferrer"
        className={`
          flex
          items-center
          rounded-2xl
          transition-all
          duration-300
          hover:bg-slate-100
          hover:text-slate-900
          ${
            collapsed
              ? "justify-center p-3"
              : "gap-3 px-3 py-2"
          }
        `}
      >
        <GitBranch className="h-5 w-5 shrink-0" />

        {!collapsed && (
          <span className="text-sm text-slate-600">
            GitHub Repository
          </span>
        )}
      </a>

      {!collapsed && (
        <div className="mt-5 border-t border-slate-200 pt-4">
          <p className="text-xs text-slate-400">
            Version 2.0
          </p>

          <p className="mt-1 text-xs text-slate-400">
            © 2026 Ian Cantimbuhan
          </p>
        </div>
      )}
    </footer>
  );
}