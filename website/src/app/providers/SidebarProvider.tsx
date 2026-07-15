import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { SidebarContext } from "./SidebarContext";

interface SidebarProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "eyan-sidebar-collapsed";

export function SidebarProvider({
  children,
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return (
      localStorage.getItem(STORAGE_KEY) === "true"
    );
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      String(collapsed)
    );
  }, [collapsed]);

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