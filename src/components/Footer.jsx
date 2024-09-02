import React from 'react';
import { FaGithubAlt, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <section className="flex justify-center items-center space-x-6 mb-8">
          <a
            href="https://twitter.com/yourhandle" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 hover:bg-blue-500 transition duration-300"
          >
            <FaTwitterSquare className="text-white text-2xl" />
          </a>

          <a
            href="https://instagram.com/yourhandle" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
          >
            <FaInstagramSquare className="text-white text-2xl" />
          </a>

          <a
            href="https://linkedin.com/in/yourhandle" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>

          <a
            href="https://github.com/yourhandle" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            <FaGithubAlt className="text-white text-2xl" />
          </a>
        </section>

        {/* Copyright Information */}
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold">HackerWolf</span>. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Designed by <a
              className="text-blue-400 hover:text-blue-300 transition duration-300"
              href="https://hackerwolf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerWolf Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
