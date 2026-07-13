import type { ReactNode } from "react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}