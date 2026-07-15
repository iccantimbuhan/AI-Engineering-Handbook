import type { ReactNode } from "react";

import { useSidebar } from "@/app/providers/useSidebar";
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/navigation/AppSidebar";
import { LAYOUT } from "@/config/layout";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-slate-50">
      <AppSidebar />

      <div
        className="
          flex
          min-h-screen
          flex-col
          transition-[margin]
          duration-300
          ease-in-out
        "
        style={{
          marginLeft: collapsed
            ? LAYOUT.SIDEBAR_COLLAPSED_WIDTH
            : LAYOUT.SIDEBAR_WIDTH,
        }}
      >
        <AppHeader />

        <main
          className="
            flex-1
            overflow-y-auto
            px-10
            py-8
          "
          style={{
            paddingTop:
              LAYOUT.HEADER_HEIGHT + 32,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}