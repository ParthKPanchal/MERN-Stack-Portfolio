import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <MainLayout>
      <section className="pt-32 pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[4px] text-red-500 mb-4">
              About Me
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Building Modern Digital
              Experiences with{" "}
              <span className="text-red-500">
                MERN Stack
              </span>
            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              I'm Parth Panchal, a frontend developer
              with professional experience creating
              responsive and scalable web applications
              using React, TypeScript, JavaScript,
              Tailwind CSS, PHP and MySQL.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Currently expanding into Full Stack MERN
              Development while building production-level
              applications with clean UI/UX and modern
              frontend architecture.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              I enjoy building modern interfaces,
              improving user experience and learning
              scalable technologies that help create
              impactful digital products.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/projects"
                className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="/resume/Parth-Panchal-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl"
              >
                Download Resume
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >

            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">

              <h2 className="text-5xl font-bold text-red-500">
                1+
              </h2>

              <p className="text-gray-400 mt-4">
                Years of Professional Experience
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">

              <h2 className="text-5xl font-bold text-red-500">
                7+
              </h2>

              <p className="text-gray-400 mt-4">
                Real-World Projects Completed
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">

              <h2 className="text-5xl font-bold text-red-500">
                React
              </h2>

              <p className="text-gray-400 mt-4">
                Frontend Development Expertise
              </p>

            </div>

            {/* CARD 4 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">

              <h2 className="text-5xl font-bold text-red-500">
                MERN
              </h2>

              <p className="text-gray-400 mt-4">
                Full Stack Development Journey
              </p>

            </div>

          </motion.div>

        </div>
      </section>
    </MainLayout>
  );
};

export default About;