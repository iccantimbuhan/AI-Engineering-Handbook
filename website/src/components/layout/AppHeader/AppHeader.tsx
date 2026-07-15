import {
  BookOpen,
  GitBranch,
  Moon,
  Search,
} from "lucide-react";

export default function AppHeader() {
  return (
    <header
      className="
        fixed
        top-0
        left-[300px]
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
      "
    >
      <button
        type="button"
        className="
          flex
          w-full
          max-w-xl
          items-center
          justify-between

          rounded-2xl

          border

          border-slate-200

          bg-white

          px-5

          py-3

          shadow-sm

          transition

          hover:border-slate-300
        "
      >
        <div className="flex items-center gap-3 text-slate-500">
          <Search className="h-4 w-4" />

          <span className="text-sm">
            Search projects, resources...
          </span>
        </div>

        <kbd className="rounded-md border bg-slate-50 px-2 py-1 text-xs text-slate-500">
          ⌘K
        </kbd>
      </button>

      <div className="ml-8 flex items-center gap-2">
        <button
          type="button"
          className="rounded-xl p-2 transition hover:bg-slate-100"
          aria-label="Toggle theme"
        >
          <Moon className="h-5 w-5" />
        </button>

        <a
          href="https://github.com/iccantimbuhan/AI-Engineering-Bootcamp"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl p-2 transition hover:bg-slate-100"
          aria-label="GitHub"
        >
          <GitBranch className="h-5 w-5" />
        </a>

        <button
          type="button"
          className="rounded-xl p-2 transition hover:bg-slate-100"
          aria-label="Resources"
        >
          <BookOpen className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}