import { PanelLeft } from "lucide-react";

import { useSidebar } from "@/app/providers/useSidebar";

export default function HeaderSidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        text-slate-600
        transition-all
        duration-200
        hover:bg-slate-100
        hover:text-slate-900
      "
    >
      <PanelLeft className="h-5 w-5" />
    </button>
  );
}