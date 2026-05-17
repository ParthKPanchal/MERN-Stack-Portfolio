import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import MainLayout from "../layouts/MainLayout";

function Projects() {
  return (
    <MainLayout>
      <section className="pt-32 px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Real-world projects built using React, TypeScript, PHP, MySQL,
              WordPress, Tailwind CSS and modern frontend technologies.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  live={project.live}
                  github={project.github}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}
export default Projects;
