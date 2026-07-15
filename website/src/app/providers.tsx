import { RouterProvider } from "react-router-dom";

import { SidebarProvider } from "./providers/SidebarProvider";
import router from "./routes";

function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}

export default function Providers() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}