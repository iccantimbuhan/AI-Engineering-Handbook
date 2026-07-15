import { GitBranch } from "lucide-react";

export default function SidebarFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 px-6 py-5">
      <a
        href="https://github.com/iccantimbuhan/AI-Engineering-Bootcamp"
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-3
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
        <GitBranch className="h-4 w-4" />

        <span>GitHub Repository</span>
      </a>

      <div className="mt-5 border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-400">
          Version 2.0
        </p>

        <p className="mt-1 text-xs text-slate-400">
          © 2026 Ian Cantimbuhan
        </p>
      </div>
    </footer>
  );
}