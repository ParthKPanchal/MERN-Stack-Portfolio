import { motion } from "framer-motion";
import experiences from "../data/experience";

const Experience = () => {
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
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Experience delivering full-stack applications, responsive websites,
            business solutions and client projects using modern web
            technologies.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-red-500">1+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-red-500">7+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Live Projects
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-red-500">3+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Companies
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Technologies
              </p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-8">
          {experiences.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-red-500/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* TOP SECTION */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-red-500">
                    {item.role}
                  </h3>

                  <p className="text-xl font-medium mt-2">
                    {item.company}
                  </p>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.location}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400 border border-red-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:text-right">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* RESPONSIBILITIES */}
              <div className="mt-8">
                <ul className="space-y-4">
                  {item.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-gray-300 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;