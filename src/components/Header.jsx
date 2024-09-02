import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Ensure you have a logo in this path

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="HACKERWOLF Logo" className="h-10 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white text-lg font-semibold transition duration-300 relative hover:text-cyan-400">
                Home
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-cyan-400 rounded-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/tutorials" className="text-white text-lg font-semibold transition duration-300 relative hover:text-cyan-400">
                Tutorials
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-cyan-400 rounded-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-white text-lg font-semibold transition duration-300 relative hover:text-cyan-400">
                Resources
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-cyan-400 rounded-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white text-lg font-semibold transition duration-300 relative hover:text-cyan-400">
                Blog
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-cyan-400 rounded-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/learning-paths" className="text-white text-lg font-semibold transition duration-300 relative hover:text-cyan-400">
                Learning Paths
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-cyan-400 rounded-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
