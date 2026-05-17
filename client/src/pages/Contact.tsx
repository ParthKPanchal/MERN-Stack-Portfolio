import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

import MainLayout from "../layouts/MainLayout";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/messages`,
        formData,
      );

      toast.success("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-[4px] text-red-500 mb-4">
              Contact
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Let's Build Something Amazing Together
            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              Feel free to contact me for frontend, MERN stack or freelance
              opportunities. I'm always open to discussing new projects and
              ideas.
            </p>

            {/* IMAGE */}
            <div className="mt-10">
              <img
                src="/images/Contact-image.png"
                alt="Contact"
                className="w-full max-w-md rounded-3xl border border-white/10 hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 hover:border-red-500/20 transition duration-300">
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-red-500 transition"
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-red-500 transition"
                required
              />

              {/* MESSAGE */}
              <textarea
                rows={6}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-red-500 transition resize-none"
                required
              />

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full bg-red-500 hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition px-8 py-4 rounded-2xl font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {/* CONTACT INFO */}
            <div className="space-y-6 mt-10">
              {/* EMAIL */}
              <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/30 transition">
                <FiMail className="text-2xl text-red-500" />

                <div>
                  <p className="text-gray-400 text-sm">Email</p>

                  <p>panchalparth93@yahoo.in</p>
                </div>
              </div>

              {/* GITHUB */}
              <a
                href="https://github.com/ParthKPanchal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/30 hover:translate-x-1 transition"
              >
                <FiGithub className="text-2xl text-red-500" />

                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>

                  <p>github.com/ParthKPanchal</p>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/parth-panchal-305353212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/30 hover:translate-x-1 transition"
              >
                <FiLinkedin className="text-2xl text-red-500" />

                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>

                  <p>linkedin.com/in/parth-panchal</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Contact;
