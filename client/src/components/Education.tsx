import { motion } from "framer-motion";
import education from "../data/education";

const Education = () => {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-red-500 mb-4">
            Education
          </p>

          <h2 className="text-5xl font-bold">
            Academic Background
          </h2>
        </div>

        {/* CARD */}
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-red-500/30 transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>
                  <h3 className="text-3xl font-bold text-red-500">
                    {item.degree}
                  </h3>

                  <p className="text-xl mt-3">
                    {item.institute}
                  </p>
                </div>

                <div className="text-gray-400">
                  {item.duration}
                </div>
              </div>

              <p className="text-gray-400 mt-6">
                {item.score}
              </p>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Education;