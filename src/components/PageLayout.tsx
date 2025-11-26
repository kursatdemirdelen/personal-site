import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <Header />
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
