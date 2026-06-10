import { IoSearch, IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

interface TopNavProps {
  onScrollTo: (sectionId: string) => void;
  sideNav: boolean;
  setSideNav: (value: boolean) => void;
}

export default function TopNavComponent({
  onScrollTo,
  sideNav,
  setSideNav,
}: TopNavProps) {
  return (
    <div className="w-full bg-gray-100 flex flex-col flex-shrink-0 select-none">
      {/* FIXED HEADER BAR */}
      <header className="bg-slate-900 border-b border-slate-800 h-16 flex items-center justify-between px-4 sm:px-6 z-30 shadow-md fixed top-0 left-0 right-0">
        <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
          <button
            onClick={() => setSideNav(!sideNav)}
            className="text-white text-2xl focus:outline-none hover:text-fuchsia-400 transition-colors cursor-pointer"
          >
            {sideNav ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
          <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 tracking-tight cursor-pointer">
            EatAndGo
          </span>
        </div>

        <div className="flex-1 max-w-xs sm:max-w-md mx-4 sm:mx-8">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Search for food, restaurants, dishes..."
              className="w-full bg-slate-800 text-white placeholder-slate-400 text-xs sm:text-sm font-medium rounded-full pl-4 pr-10 py-2.5 outline-none border border-slate-700 focus:border-fuchsia-500 transition-all shadow-inner"
            />
            <IoSearch className="absolute right-3.5 text-slate-400 text-lg pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-white">
          <button className="relative p-2 hover:text-fuchsia-400 transition-colors focus:outline-none">
            <IoCartOutline className="text-2xl" />
            <span className="absolute top-0 right-0 bg-fuchsia-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="hidden sm:flex items-center space-x-1.5 p-2 hover:text-fuchsia-400 transition-colors text-sm font-medium focus:outline-none">
            <IoPersonOutline className="text-xl" />
            <span>Sign In</span>
          </button>
        </div>
      </header>

      {/* FIXED SIDEBAR MENU (Reordered Items) */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-slate-950 border-r border-slate-800 shadow-2xl z-20 p-4 flex flex-col uppercase transition-all duration-300 ease-in-out ${
          sideNav
            ? "w-64 opacity-100 translate-x-0"
            : "w-0 opacity-0 -translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-2 overflow-hidden">
          {/* 1st Place: Feature */}
          <button
            onClick={() => onScrollTo("feature-section")}
            className="w-full text-left text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer"
          >
            ✨ Feature
          </button>

          {/* 2nd Place: Delivery (MOVED HERE) */}
          <button
            onClick={() => onScrollTo("delivery-section")}
            className="w-full text-left text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer"
          >
            🚗 Delivery
          </button>

          {/* 3rd Place: Our Menu */}
          <button
            onClick={() => onScrollTo("menu-section")}
            className="w-full text-left text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer"
          >
            🍔 Top Picks
          </button>

          {/* 4th Place: About Us */}
          <button
            onClick={() => onScrollTo("about-section")}
            className="w-full text-left text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer"
          >
            ℹ️ Meals
          </button>

          <button
            onClick={() => onScrollTo("category-section")}
            className="w-full text-left text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer"
          >
            ℹ️ Categories
          </button>
        </div>
      </div>

      {/* MOBILE DRAW OVERLAY BACKDROP */}
      {sideNav && (
        <div
          onClick={() => setSideNav(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 md:hidden top-16"
        />
      )}
    </div>
  );
}
