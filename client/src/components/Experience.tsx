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
        className="max-w-6xl mx-auto"
      >
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-red-500 mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-bold">Professional Journey</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional experience working with frontend technologies, UI/UX
            development, responsive web applications and client projects.
          </p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-8">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-red-500/30 transition duration-300"
            >
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-red-500">
                    {item.role}
                  </h3>

                  <p className="text-xl mt-2">{item.company}</p>

                  <p className="text-gray-400 text-sm mt-2">{item.location}</p>
                </div>

                <div className="text-gray-400 text-sm lg:text-base">
                  {item.duration}
                </div>
              </div>

              {/* POINTS */}
              <ul className="mt-8 space-y-4">
                {item.points.map((point, index) => (
                  <li key={index} className="flex gap-4 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
