import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase tracking-[4px] text-red-500 mb-4">
                About Me
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building Scalable Web Applications &
                <span className="text-red-500"> Digital Solutions</span>
              </h1>

              <p className="text-gray-400 mt-8 text-lg leading-relaxed">
                I'm <span className="text-white font-semibold">Parth Panchal</span>,
                a Software Developer with 1+ year of professional experience
                building responsive websites, business applications and
                full-stack web solutions.
              </p>

              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                I have worked on healthcare, e-commerce, IT services and
                business projects using React.js, Node.js, Express.js,
                MongoDB, PHP and MySQL.
              </p>

              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                My goal is to build modern, scalable digital products that
                solve real business problems while delivering exceptional
                user experiences and high performance.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/projects"
                  className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-semibold"
                >
                  View Projects
                </Link>

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
              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">
                <h2 className="text-5xl font-bold text-red-500">1+</h2>
                <p className="text-gray-400 mt-4">
                  Years Experience
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">
                <h2 className="text-5xl font-bold text-red-500">7+</h2>
                <p className="text-gray-400 mt-4">
                  Live Projects Delivered
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">
                <h2 className="text-5xl font-bold text-red-500">10+</h2>
                <p className="text-gray-400 mt-4">
                  Technologies Used
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-red-500/30 transition">
                <h2 className="text-3xl font-bold text-red-500">
                  Full Stack
                </h2>
                <p className="text-gray-400 mt-4">
                  Development Focus
                </p>
              </div>
            </motion.div>
          </div>

          {/* WHAT I DO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <p className="uppercase tracking-[4px] text-red-500 mb-4">
                What I Do
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Expertise & Services
              </h2>

              <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                Building modern web applications with a strong focus on
                performance, scalability and user experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* FRONTEND */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition">
                <h3 className="text-2xl font-bold text-red-500 mb-4">
                  Frontend Development
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Creating responsive and interactive user interfaces
                  using React.js, TypeScript, Tailwind CSS and modern
                  frontend technologies.
                </p>
              </div>

              {/* BACKEND */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition">
                <h3 className="text-2xl font-bold text-red-500 mb-4">
                  Backend Development
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Building scalable APIs, server-side applications and
                  business logic using Node.js, Express.js and PHP.
                </p>
              </div>

              {/* DATABASE */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition">
                <h3 className="text-2xl font-bold text-red-500 mb-4">
                  Database Management
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Designing and managing databases using MongoDB and
                  MySQL while ensuring efficient data handling and
                  application performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;