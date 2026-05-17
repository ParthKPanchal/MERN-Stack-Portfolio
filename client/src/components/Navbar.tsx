import { useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Admin",
      path: "/admin",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-500"
        >
          Parth.dev
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition hover:text-red-500 ${
                location.pathname === link.path
                  ? "text-red-500"
                  : "text-white"
              }`}
            >

              {link.name}

              {/* ACTIVE LINE */}
              {location.pathname ===
                link.path && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}

            </Link>
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-3xl"
        >
          {menuOpen ? (
            <HiX />
          ) : (
            <HiMenu />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-lg">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className={`transition ${
                location.pathname ===
                link.path
                  ? "text-red-500"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;