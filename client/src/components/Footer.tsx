import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold text-red-500">
              Parth
              <span className="text-white">.</span>
              Dev
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Software Developer specializing in React.js,
              Node.js, MongoDB, PHP and MySQL.
              Building scalable web applications and
              business solutions.
            </p>

            <div className="flex items-center gap-2 mt-4 text-gray-400">
              <FiMapPin />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                to="/"
                className="hover:text-red-500 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-red-500 transition"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="hover:text-red-500 transition"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="hover:text-red-500 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:panchalparth93@yahoo.in"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition"
              >
                <FiMail />
                <span>Email</span>
              </a>

              <a
                href="https://github.com/ParthKPanchal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/parth-panchal-305353212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume/Parth-Panchal-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition"
              >
                <FiDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Parth Panchal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;