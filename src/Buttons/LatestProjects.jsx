import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const LatestProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "CRM Data Migration",
      company: "XpressTech",
      date: "Jan 2023 - Apr 2023",
      description:
        "Led a data migration project from legacy CRM to cloud-based platform, ensuring 100% accuracy and zero downtime during transition.",
    },
    {
      title: "Customer Support Automation",
      company: "SwiftConnect",
      date: "May 2022 - Dec 2022",
      description:
        "Developed and integrated an AI-based chatbot, reducing response time by 45% and improving customer satisfaction scores.",
    },
    {
      title: "Sales Outreach Campaign",
      company: "BrightPath",
      date: "Oct 2021 - Mar 2022",
      description:
        "Executed a targeted outreach campaign that increased lead conversion by 28% and brought in 50+ new business clients.",
    },
    {
      title: "Support Knowledge Base",
      company: "CoreBridge",
      date: "Apr 2021 - Aug 2021",
      description:
        "Designed and launched a self-service help center that reduced inbound support queries by 32% within the first month.",
    },
    {
      title: "Data Entry Workflow Optimization",
      company: "Nexsys Data",
      date: "Jul 2020 - Feb 2021",
      description:
        "Optimized the company’s data entry processes by creating templates and macros, resulting in a 60% improvement in efficiency.",
    },
    {
      title: "Customer Feedback Analysis",
      company: "InnoSoft",
      date: "Mar 2020 - Jun 2020",
      description:
        "Analyzed customer feedback trends using Excel and Power BI, which contributed to strategic changes in product support features.",
    },
    {
      title: "Client Retention Strategy",
      company: "ValueEdge Ltd.",
      date: "Jul 2023 - Nov 2023",
      description:
        "Developed client retention workflows using automated feedback loops, improving return rates by 22% within 4 months.",
    },
    {
      title: "Digital Filing Transformation",
      company: "CloudKeep",
      date: "Jan 2025 - May 2025",
      description:
        "Digitized over 5,000 archived documents into a searchable database system, increasing team access speed and cutting paper usage by 70%.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-800 to-black px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-12">
          Latest Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FaBriefcase className="text-green-500" />
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-1 flex items-center gap-2">
                <FaCalendarAlt className="text-green-400" /> {project.date} @{" "}
                {project.company}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LatestProjects;
