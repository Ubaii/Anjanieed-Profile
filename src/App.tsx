
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function ComingSoon({ title }: { title: string }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 text-center">
      <div>
        <p className="text-xs tracking-[0.25em] text-[#bd8760]">
          ANJANI EED
        </p>
        <h1 className="mt-4 font-serif text-4xl text-[#493326]">
          {title}
        </h1>
        <p className="mt-3 text-sm text-[#89796c]">
          This page is coming soon.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/menu"
          element={
            <MainLayout>
              <ComingSoon title="Our Menu" />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <ComingSoon title="About Anjani" />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ComingSoon title="Contact Us" />
            </MainLayout>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
