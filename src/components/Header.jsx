import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-2 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="HACKERWOLF Logo" className="h-8 w-auto "  />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white  transition duration-300 relative">
                Home
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-transparent rounded-full hover:bg-cyan-400 transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white  transition duration-300 relative">
                Login
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-transparent rounded-full hover:bg-cyan-400 transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-white  transition duration-300 relative">
                Sign Up
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-transparent rounded-full hover:bg-cyan-400 transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
