import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const message =
    "Hi Augusta, I’m impressed with your background and would love to discuss a professional opportunity with you.";
  const encodedMessage = encodeURIComponent(message);

  const MotionCard = ({ children, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-800 border-l-4 border-green-500 rounded-lg shadow-md p-6 mb-6"
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          Contact Me
        </h2>

        {/* Email Card */}
        <MotionCard delay={0.1}>
          <div className="flex items-center gap-4 text-white">
            <FaEnvelope className="text-green-500 text-xl" />
            <span>akuaugustauchechi@gmail.com</span>
          </div>
        </MotionCard>

        {/* Phone Card */}
        <MotionCard delay={0.2}>
          <div className="flex items-center gap-4 text-white">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <span>08038792128</span>
          </div>
        </MotionCard>

        {/* Address + Map */}
        <MotionCard delay={0.3}>
          <div className="flex items-center gap-4 text-white mb-4">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <span>
              
            </span>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=1+Diamond+Crescent,+Okigwe+Road,+Owerri,+Imo+State,+Nigeria&output=embed"
            className="w-full h-64 rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MotionCard>

        {/* Social Media Links with Embedded Messages */}
        <MotionCard delay={0.4}>
          <div className="flex flex-col items-center">
            <p className="text-white mb-4 text-center">
              Connect with me on social media. I’d love to hear from you!
            </p>
            <div className="flex gap-6 text-white text-2xl">
              <a
                href={`https://api.whatsapp.com/send?phone=2348038792128&text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://facebook.com&quote=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://linkedin.com/in/uchechi-augusta-aku&summary=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </MotionCard>

        {/* CV Download Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/Uchechi_Augusta_CV.pdf"
            download
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-100 transition duration-300"
          >
            Download My CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
