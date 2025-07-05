import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-black text-white py-10 mt-20">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-green-500">
            Uchechi Augusta Aku
          </h2>
          <p className="text-gray-400 mt-2">
            Sales Executive | Customer Support | Data Entry Specialist
          </p>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved. Created by Kaycee
            Tech.
          </p>
        </div>

        {/* Right - Social Links with Message */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/uchechi-augusta-aku/?messageToken=Hi%20Augusta%2C%20I’m%20impressed%20with%20your%20background%20and%20would%20love%20to%20discuss%20a%20professional%20opportunity%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=2348038792128&text=Hi%20Augusta%2C%20I’m%20impressed%20with%20your%20background%20and%20would%20love%20to%20discuss%20a%20professional%20opportunity%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Back to Top */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-sm text-green-400 hover:underline transition duration-300"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
