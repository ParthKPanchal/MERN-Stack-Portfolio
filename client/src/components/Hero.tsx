import { motion } from "framer-motion";

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
          <p className="uppercase tracking-[4px] text-red-500 mb-4 text-sm md:text-base">
            Frontend Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-red-500">Parth Panchal</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg mt-6 md:mt-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Frontend Developer building scalable and responsive web applications
            using React, TypeScript, Tailwind CSS and MERN Stack.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-8 md:mt-10 justify-center lg:justify-start">
            <a
              href="/projects"
              className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-semibold text-center"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-center"
            >
              Contact Me
            </a>

            <a
              href="/resume/Parth-Panchal-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-8 py-4 rounded-2xl text-center"
            >
              Download CV
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-6 mt-8 md:mt-10 justify-center lg:justify-start">
            <a
              href="https://github.com/ParthKPanchal"
              target="_blank"
              className="text-gray-400 hover:text-red-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/parth-panchal-305353212/"
              target="_blank"
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
          {/* GLOW */}
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-red-500/30 blur-[100px] rounded-full"></div>

          {/* IMAGE */}
          <img
            src="/profile/parth.png"
            alt="Parth"
            className="relative z-10 w-[240px] sm:w-[300px] md:w-[380px] lg:w-[460px] object-contain drop-shadow-[0_20px_60px_rgba(239,68,68,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
