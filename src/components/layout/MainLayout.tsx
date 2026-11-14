
import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fffdf9]">
      <Navbar />

      <main>{children}</main>

      <footer className="border-t border-[#eee8e0] bg-[#f8f3ec] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-xl font-bold text-[#493326]">anjani.</h2>
            <p className="mt-2 text-sm text-[#8c7969]">
              Made with love, baked with passion.
            </p>
          </div>

          <p className="text-sm text-[#8c7969]">
            © 2026 Anjani EED. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
