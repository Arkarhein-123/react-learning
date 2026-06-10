import { useState, useEffect } from "react";
import TopNavComponent from "./TopNavComponent";
import FeatureComponent from "./FeatureComponent";
import DeliveryComponent from "./DeliveryComponent";
import TopPickComponent from "./TopPickComponent.tsx";
import MealComponent from "./MealComponent.tsx";
import CategoryComponent from "./CategoryComponent.tsx";
import FooterComponent from "./FooterComponent.tsx";

export default function Home() {
  const [sideNav, setSideNav] = useState(true);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element !== null) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      {/* Global Navbar Header Shell */}
      <TopNavComponent
        onScrollTo={handleScrollToSection}
        sideNav={sideNav}
        setSideNav={setSideNav}
      />

      {/* Main Layout Container */}
      <main
        className={`flex-1 mt-16 p-4 sm:p-6 lg:p-8 space-y-16 w-full max-w-full mx-auto transition-all duration-300 ease-in-out overflow-x-hidden ${
          sideNav ? "md:pl-64" : "md:pl-0"
        }`}
      >
        {/* ─── 1. FEATURE & FOOD SECTION ─── */}
        <section id="feature-section" className="scroll-mt-20 pt-2 w-full">
          <FeatureComponent />
        </section>

        <hr className="border-slate-200" />

        {/* ─── 2. DELIVERY SECTION ─── */}
        <section id="delivery-section" className="scroll-mt-24 w-full">
          <DeliveryComponent />
        </section>

        <hr className="border-slate-200" />

        {/* ─── 3. OUR MENU SECTION ─── */}
        <section id="menu-section" className="scroll-mt-24 w-full">
          <TopPickComponent />
        </section>

        <hr className="border-slate-200" />

        {/* ─── 4. ABOUT US SECTION ─── */}
        <section id="about-section" className="scroll-mt-24 pb-12 w-full">
          <MealComponent />
        </section>

        {/* ─── 4. Category SECTION ─── */}
        <section id="category-section" className="scroll-mt-24 pb-12 w-full">
          <CategoryComponent />
        </section>

        {/* ─── 4. Category SECTION ─── */}
        <section id="footer-section" className="scroll-mt-24 pb-12 w-full">
          <FooterComponent />
        </section>
      </main>
    </div>
  );
}
