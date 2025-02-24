// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-300 to-blue-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:text-gray-200 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="text-white text-lg hover:text-gray-200 transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/photos"
              className="text-white text-lg hover:text-gray-200 transition"
            >
              Photos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
