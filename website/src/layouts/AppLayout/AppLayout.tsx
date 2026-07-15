import type { ReactNode } from "react";

import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/navigation/AppSidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">

      <AppSidebar />

      <div className="ml-80 min-h-screen">

        <AppHeader />

        <main className="px-10 pt-24 pb-16">
          {children}
        </main>

      </div>

    </div>
  );
}