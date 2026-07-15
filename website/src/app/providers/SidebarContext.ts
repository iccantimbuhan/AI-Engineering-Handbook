import { createContext } from "react";

export interface SidebarContextValue {
  collapsed: boolean;
  toggleSidebar: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

export const SidebarContext =
  createContext<SidebarContextValue | null>(null);