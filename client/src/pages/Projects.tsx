import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import MainLayout from "../layouts/MainLayout";

function Projects() {
  return (
    <MainLayout>
      <section className="pt-32 px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-red-500 mb-4">
              Portfolio
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of real-world client projects, full-stack
              applications, business websites and scalable web solutions built
              using React.js, Node.js, Express.js, PHP, MySQL, MongoDB,
              WordPress and modern frontend technologies.
            </p>
          </div>

          {/* PROJECT STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition">
              <h3 className="text-3xl font-bold text-red-500">7+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Live Projects
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition">
              <h3 className="text-3xl font-bold text-red-500">3+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Industries
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition">
              <h3 className="text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition">
              <h3 className="text-3xl font-bold text-red-500">100%</h3>
              <p className="text-gray-400 text-sm mt-2">
                Responsive
              </p>
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  live={project.live}
                  github={project.github}
                  image={project.image}
                />
              </motion.div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-20 text-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Looking for a Software Developer?
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                I specialize in building responsive websites, full-stack web
                applications and business solutions using React.js, Node.js,
                PHP, MySQL and MongoDB.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a
                  href="/contact"
                  className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-semibold"
                >
                  Contact Me
                </a>

                <a
                  href="/resume/Parth-Panchal-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-8 py-4 rounded-2xl font-semibold"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}

export default Projects;