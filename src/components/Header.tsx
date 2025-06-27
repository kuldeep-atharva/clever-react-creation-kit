
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-serif text-gray-900">
          Quiet Finds
        </div>
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Stays
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
