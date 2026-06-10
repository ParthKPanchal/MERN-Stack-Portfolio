import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 md:pt-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* TITLE */}
          <p className="uppercase tracking-[4px] text-red-500 mb-4 text-sm md:text-base">
            Software Developer | MERN Stack Developer
          </p>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-red-500">Parth Panchal</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-base md:text-lg mt-6 md:mt-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Software Developer with 1+ year of professional experience
            building full-stack web applications, business websites, and
            scalable digital solutions using React.js, Node.js, Express.js,
            MongoDB, PHP and MySQL.
          </p>

          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto lg:mx-0">
            Delivered 7+ live projects across Healthcare, E-Commerce,
            IT Services and Business domains.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-8 md:mt-10 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-center shadow-lg shadow-red-500/20"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl text-center"
            >
              Contact Me
            </Link>

            <a
              href="/resume/Parth-Panchal-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl text-center"
            >
              Download Resume
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-red-500">1+</h3>
              <p className="text-gray-400 text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">7+</h3>
              <p className="text-gray-400 text-sm">
                Live Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-400 text-sm">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">100%</h3>
              <p className="text-gray-400 text-sm">
                Responsive
              </p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 mt-10 justify-center lg:justify-start">
            <a
              href="https://github.com/ParthKPanchal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/parth-panchal-305353212/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* GLOW EFFECT */}
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-red-500/30 blur-[100px] rounded-full"></div>

          {/* PROFILE IMAGE */}
          <img
            src="/profile/parth.png"
            alt="Parth Panchal Software Developer"
            className="relative z-10 w-[240px] sm:w-[300px] md:w-[380px] lg:w-[460px] object-contain drop-shadow-[0_20px_60px_rgba(239,68,68,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;