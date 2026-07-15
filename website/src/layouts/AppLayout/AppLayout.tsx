import type { ReactNode } from "react";

import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/navigation/AppSidebar";

import { LAYOUT } from "@/config/layout";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppSidebar />

      <div
        className="flex min-h-screen flex-col"
        style={{
          marginLeft: LAYOUT.SIDEBAR_WIDTH,
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
        >
          {children}
        </main>
      </div>
    </div>
  );
}