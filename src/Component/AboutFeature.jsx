import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Added for routing

const About = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const cards = [
    "I’m Uchechi Augusta Aku, a dedicated Sales Executive, Customer Support Specialist, and Data Entry Professional with over 5 years of experience. My passion lies in delivering exceptional client experiences, driving sales, and ensuring business data is managed with precision and accuracy.",
    "My career journey has been defined by a commitment to results and excellence. Whether it’s supporting customers, managing communications, or maintaining accurate records, I bring strong attention to detail and proactive problem-solving skills to every task. I'm passionate about helping businesses grow through efficient support and effective sales strategy.",
    "I’m goal-driven, collaborative, and always eager to take on new challenges. If you're seeking someone who combines professionalism, empathy, and data accuracy, I’m here to help bring your business vision to life.",
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          About Me
        </h2>

        {/* Render animated cards */}
        {cards.map((text, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gray-800 border-l-4 border-green-500 rounded-lg shadow-md p-6 mb-6"
          >
            <p className="text-lg text-white leading-relaxed">{text}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/contact" // ✅ Updated to link to the Contact page
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Let's Connect
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
