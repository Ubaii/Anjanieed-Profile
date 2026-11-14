
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Menu", path: "/menu" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8EDF3] bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* LOGO & BRAND */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src="/src/assets/logo/logo.png"
            alt="Anjanieed Cake Logo"
            className="h-11 w-11 object-contain"
          />

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#142D4E]">
              Anjanieed Cake
            </span>
            <span className="text-[9px] tracking-[0.22em] text-[#8495A9]">
              CAKE & BAKERY
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors
                after:absolute after:bottom-0 after:left-0 after:h-[1.5px]
                after:bg-[#142D4E] after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-[#142D4E] after:w-full"
                    : "text-[#78879A] after:w-0 hover:text-[#142D4E] hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ORDER BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/menu"
            className="flex items-center gap-2 rounded-full bg-[#142D4E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#28496F]"
          >
            <ShoppingBag size={16} />
            Order Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#142D4E] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-[#E8EDF3] bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `relative w-fit border-b-2 pb-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-[#142D4E] text-[#142D4E]"
                      : "border-transparent text-[#78879A] hover:text-[#142D4E]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#142D4E] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#28496F]"
            >
              <ShoppingBag size={16} />
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
