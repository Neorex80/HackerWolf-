import React from 'react';
import { FaGithubAlt, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function App() {
  return (
    <footer className='bg-gray-900  bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg text-white py-6'>
      <div className='container mx-auto px-4'>
        <section className='flex justify-center items-center space-x-4 mb-6'>
          <a
            href='#!'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-[#439d40] hover:bg-[#1a66b7] transition duration-300'
          >
            <FaSquareXTwitter className='text-white text-xl' />
          </a>

          <a
            href='#!'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-[#439d40] hover:bg-[#1a66b7] transition duration-300'
          >
            <FaInstagramSquare className='text-white text-xl' />
          </a>

          <a
            href='#!'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-[#439d40] hover:bg-[#1a66b7] transition duration-300'
          >
            <FaLinkedin className='text-white text-xl' />
          </a>

          <a
            href='#!'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-[#439d40] hover:bg-[#1a66b7] transition duration-300'
          >
            <FaGithubAlt className='text-white text-xl' />
          </a>
        </section>
        <div className='text-center text-sm'>
          <p>
            © 2024 Copyright:
            <a
              className='text-blue-400 hover:text-blue-300 transition duration-300 ml-1'
              href='https://hackerwolf.com/'
            >
             hackerwolf
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
