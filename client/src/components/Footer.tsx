import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-red-500">
            Parth.dev
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Frontend Developer & MERN Stack Developer
          </p>
        </div>

        {/* CENTER */}
        <div className="text-gray-400 text-sm text-center">
          © 2026 Parth Panchal. All rights reserved.
        </div>

        {/* RIGHT */}
        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/ParthKPanchal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/parth-panchal-305353212/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:panchalparth93@yahoo.in"
            className="hover:text-red-500 transition"
          >
            <FiMail />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;