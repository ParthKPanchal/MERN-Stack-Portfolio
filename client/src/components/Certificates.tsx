import { motion } from "framer-motion";
import certificates from "../data/certificates";

const Certificates = () => {
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
            Certifications
          </p>

          <h2 className="text-5xl font-bold">
            Courses & Certifications
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-red-500/30 hover:translate-y-[-5px] transition duration-300"
            >

              <h3 className="text-2xl font-bold text-red-500 leading-snug">
                {item.title}
              </h3>

              <p className="text-lg mt-5">
                {item.provider}
              </p>

              <p className="text-gray-400 mt-3 text-sm">
                {item.duration}
              </p>

            </div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Certificates;