import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-400">HACKERWOLF</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-green-400">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-green-400">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-white hover:text-green-400">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
