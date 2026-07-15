import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarBrand() {
  return (
    <Link
      to="/"
      className="border-b border-slate-200 px-6 py-7 transition-colors hover:bg-slate-50"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Cpu className="h-5 w-5 text-slate-700" />
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold tracking-tight text-slate-900">
            Ian Cantimbuhan
          </h1>

          <p className="text-sm text-slate-500">
            Software Engineer • AI Automation
          </p>
        </div>
      </div>
    </Link>
  );
}