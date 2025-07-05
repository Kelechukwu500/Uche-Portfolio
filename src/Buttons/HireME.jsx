import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHandshake,
  FaEnvelope,
  FaCheckCircle,
  FaChartLine,
  FaHeadset,
  FaUserCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HireME = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-800 to-black px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-12">
          Why You Should Hire Me
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Multifaceted Experience
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Over 5 years in Sales, Customer Support & Data Entry. I
                  deliver results with accuracy and client satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaHandshake className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Reliable & Professional
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  I consistently exceed expectations, communicate clearly, and
                  work collaboratively with teams and clients.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Client-Centered Solutions
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  I offer proactive support, smooth data handling, and boost
                  brand credibility—everything your business needs to grow.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaChartLine className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Driven by Growth</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  I am passionate about continuous improvement and driving
                  business growth. I take initiative and deliver measurable
                  impact.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaHeadset className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Exceptional Support
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  I ensure every customer interaction is positive and
                  productive, solving problems efficiently and empathetically.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#0f172a] text-white border-l-4 border-green-500 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaUserCheck className="text-green-500 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Trust & Accountability
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  I maintain integrity in every task, take ownership of my
                  responsibilities, and build long-term trust with clients and
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            to="/Contact"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Let's Work Together
          </Link>

          
        </div>
      </div>
    </motion.div>
  );
};

export default HireME;
