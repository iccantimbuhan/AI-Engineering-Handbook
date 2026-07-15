import {
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { SidebarContext } from "./SidebarContext";

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({
  children,
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] =
    useState(false);

  const value = useMemo(
    () => ({
      collapsed,
      toggleSidebar: () =>
        setCollapsed((prev) => !prev),
      setCollapsed,
    }),
    [collapsed]
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}