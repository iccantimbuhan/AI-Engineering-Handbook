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
    <div className="min-h-screen bg-slate-100">
      <AppSidebar />

      <div
        className="flex min-h-screen flex-col"
        style={{
          marginLeft: LAYOUT.SIDEBAR_WIDTH,
        }}
      >
        <AppHeader />

        <main className="pt-[72px] p-8">
          <div
            className="
              mx-auto
              min-h-[calc(100vh-104px)]
              max-w-7xl
              rounded-3xl
              border
              border-slate-200/70
              bg-white
              shadow-sm
            "
          >
            <div className="p-10">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}