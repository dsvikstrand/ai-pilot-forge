import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { OrganizationSchema } from "@/components/StructuredData";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useScrollToTop();
  
  return (
    <div className="flex min-h-screen flex-col">
      <OrganizationSchema />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
