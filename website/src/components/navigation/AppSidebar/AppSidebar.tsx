import { useSidebar } from "@/app/providers/useSidebar";
import { LAYOUT } from "@/config/layout";

import SidebarBrand from "./SidebarBrand";
import SidebarFooter from "./SidebarFooter";
import SidebarNavigation from "./SidebarNavigation";

export default function AppSidebar() {
  const { collapsed } = useSidebar();

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        flex
        h-screen
        flex-col
        border-r
        border-slate-200/70
        bg-white
        transition-[width]
        duration-300
        ease-in-out
      "
      style={{
        width: collapsed
          ? LAYOUT.SIDEBAR_COLLAPSED_WIDTH
          : LAYOUT.SIDEBAR_WIDTH,
      }}
    >
      <SidebarBrand />

      <SidebarNavigation />

      <SidebarFooter />
    </aside>
  );
}