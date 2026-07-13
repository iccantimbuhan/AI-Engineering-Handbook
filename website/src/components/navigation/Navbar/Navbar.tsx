import Logo from "@/components/common/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            Lessons
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            Labs
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            About
          </a>
        </nav>

        <a
          href="https://github.com/iccantimbuhan/AI-Engineering-Handbook"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}