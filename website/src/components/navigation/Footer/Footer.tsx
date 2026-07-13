import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <p className="text-sm text-slate-500">
          © 2026 AI Engineering Handbook. Built with React + Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}