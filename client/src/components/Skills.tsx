import { motion } from "framer-motion";
import skills from "../data/skills";

const cardClass =
  "bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/30 hover:bg-white/10 transition-all duration-300";

const badgeClass =
  "px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm hover:bg-red-500 hover:text-white transition-all duration-300";

const Skills = () => {
  return (
    <section className="py-24 px-6">
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
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Skills & Expertise
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Experienced in building responsive websites, full-stack web
            applications and scalable digital solutions using modern frontend,
            backend and database technologies.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FRONTEND */}
          <motion.div
            whileHover={{ y: -5 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Frontend Development
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Creating responsive and interactive user interfaces with modern
              frontend technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            whileHover={{ y: -5 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Backend Development
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Building scalable server-side applications, APIs and business
              logic.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* DATABASE */}
          <motion.div
            whileHover={{ y: -5 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Database Management
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Designing and managing structured and NoSQL databases for web
              applications.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.database.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            whileHover={{ y: -5 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Developer Tools
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Daily tools used for development, deployment, debugging and
              collaboration.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CMS */}
          <motion.div
            whileHover={{ y: -5 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              CMS & Platforms
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Building and managing business websites using popular CMS
              platforms.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.cms.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* LEARNING */}
          <motion.div
            whileHover={{ y: -5 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Currently Learning
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Continuously improving skills and exploring advanced full-stack
              development concepts.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.learning.map((skill) => (
                <span key={skill} className={badgeClass}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;