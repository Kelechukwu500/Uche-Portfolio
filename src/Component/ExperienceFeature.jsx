import React from "react";
import {
  FaHeadset,
  FaKeyboard,
  FaHandshake,
  FaBuilding,
  FaBriefcase,
  FaUserCheck,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    role: "Customer Support Representative",
    company: "TechBridge Solutions",
    icon: <FaHeadset />,
    period: "Jan 2020 – Sep 2020",
    description:
      "Answered support queries via email and live chat, achieving a 95% satisfaction rating. Helped streamline the ticketing process for faster issue resolution.",
  },
  {
    role: "Data Entry Clerk",
    company: "InfoSpark Digital",
    icon: <FaKeyboard />,
    period: "Oct 2020 – Apr 2021",
    description:
      "Efficiently processed over 10,000 records with 99.9% accuracy. Played a vital role in managing a product catalog database update.",
  },
  {
    role: "Sales Executive",
    company: "PrimeValue Ventures",
    icon: <FaHandshake />,
    period: "May 2021 – Dec 2021",
    description:
      "Increased client acquisitions by 28% within 7 months through cold outreach, presentations, and relationship management strategies.",
  },
  {
    role: "Customer Service Lead",
    company: "SmartReach Telecom",
    icon: <FaBuilding />,
    period: "Jan 2022 – Dec 2022",
    description:
      "Led a team of 6 service reps, enhanced workflow, and reduced call handling time by 35%. Introduced monthly KPIs for improved performance tracking.",
  },
  {
    role: "Sales & Data Entry Coordinator",
    company: "NexaPro Ltd.",
    icon: <FaBriefcase />,
    period: "Jan 2023 – Jun 2024",
    description:
      "Managed CRM data, tracked prospects, and ensured accurate reporting for the sales pipeline. Provided technical support to the sales team.",
  },
  {
    role: "Client Relations Officer",
    company: "AlliedSoft Systems",
    icon: <FaUserCheck />,
    period: "Jul 2024 – Present",
    description:
      "Maintains active communication with clients, oversees support satisfaction surveys, and contributes to retention strategies by offering personalized support.",
  },
];

const Experience = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-green-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-green-600 text-3xl">{exp.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                    {exp.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-md">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
