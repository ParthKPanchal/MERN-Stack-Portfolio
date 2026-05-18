import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";

import MainLayout from "../layouts/MainLayout";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchMessages();
    fetchVisitors();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/messages`
      );

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVisitors = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/visitors`
      );

      setVisitors(response.data);
    } catch (error) {
      console.log(error);
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
          className="max-w-7xl mx-auto"
        >

          {/* HEADING */}
          <div className="mb-14">

            <p className="uppercase tracking-[4px] text-red-500 mb-4">
              Dashboard
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              Admin Dashboard
            </h1>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">

            {/* VISITORS */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-red-500/30 hover:shadow-[0_20px_60px_rgba(239,68,68,0.12)] transition duration-300"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-400">
                    Total Visitors
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold text-red-500 mt-4">
                    {visitors.length}
                  </h2>
                </div>

                <div className="text-5xl text-red-500">
                  <FiUsers />
                </div>

              </div>
            </motion.div>

            {/* MESSAGES */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-red-500/30 hover:shadow-[0_20px_60px_rgba(239,68,68,0.12)] transition duration-300"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-400">
                    Total Messages
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold text-red-500 mt-4">
                    {messages.length}
                  </h2>
                </div>

                <div className="text-5xl text-red-500">
                  <FiMessageSquare />
                </div>

              </div>
            </motion.div>

          </div>

          {/* MESSAGE SECTION */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-lg">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

              <h2 className="text-2xl md:text-3xl font-bold">
                Client Messages
              </h2>

              <div className="text-gray-400 text-sm">
                {messages.length} Messages
              </div>

            </div>

            {/* EMPTY STATE */}
            {messages.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                No Messages Yet
              </div>
            ) : (
              <div className="space-y-6">

                {messages.map((message: any, index) => (
                  <motion.div
                    key={message._id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="border border-white/10 rounded-2xl p-6 bg-black/20 hover:border-red-500/20 transition duration-300"
                  >

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                      <div>
                        <h3 className="text-xl font-semibold">
                          {message.name}
                        </h3>

                        <p className="text-red-400 text-sm mt-1">
                          {message.email}
                        </p>
                      </div>

                      <div className="text-gray-500 text-sm">
                        {new Date(
                          message.createdAt
                        ).toLocaleDateString()}
                      </div>

                    </div>

                    <p className="text-gray-300 mt-5 leading-relaxed">
                      {message.message}
                    </p>

                  </motion.div>
                ))}

              </div>
            )}

          </div>

        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Admin;