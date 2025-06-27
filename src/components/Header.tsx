import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-serif text-gray-900">
          <Link to="/" className="hover:text-gray-800 transition-colors">
          Quiet Finds
          </Link>
          </div>
        <nav className="flex space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Stays
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
