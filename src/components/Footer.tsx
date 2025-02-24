import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">My Gallery</p>
          <p className="text-sm text-gray-400">Enhancing experiences since 2025</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400 transition"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-gray-400 transition"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-gray-400 transition"><FaInstagram size={20} /></a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          &copy; {currentYear} {import.meta.env.VITE_APP_TITLE} . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
