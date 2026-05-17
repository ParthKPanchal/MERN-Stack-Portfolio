import { motion } from "framer-motion";
import skills from "../data/skills";

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
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-red-500 mb-4">Skills</p>

          <h2 className="text-5xl font-bold">Technologies I Work With</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* FRONTEND */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-6">Frontend</h3>

            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-6">Backend</h3>

            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DATABASE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-6">Database</h3>

            <div className="flex flex-wrap gap-3">
              {skills.database.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-6">Tools</h3>

            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
