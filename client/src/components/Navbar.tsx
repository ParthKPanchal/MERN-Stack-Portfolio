import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div>
          <Link to="/" className="text-2xl md:text-3xl font-bold text-red-500">
            Parth<span className="text-white">.</span>Dev
          </Link>

          <p className="hidden lg:block text-xs text-gray-400">
            Software Developer
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-white/5 text-red-500"
                  : "text-white hover:text-red-500 hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* RESUME BUTTON */}
          <a
            href="/resume/Parth-Panchal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-5 py-2 rounded-xl font-medium"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all ${
                  location.pathname === link.path
                    ? "bg-white/5 text-red-500"
                    : "text-white hover:text-red-500 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* RESUME BUTTON */}
            <a
              href="/resume/Parth-Panchal-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-red-500 hover:bg-red-600 transition text-center py-3 rounded-xl font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
