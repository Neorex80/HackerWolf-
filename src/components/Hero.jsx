import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Welcome to HACKERWOLF
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Dive deep into hacking and cybersecurity with tutorials, challenges, and more.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-green-400 text-black font-bold rounded-full hover:bg-green-500 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;


