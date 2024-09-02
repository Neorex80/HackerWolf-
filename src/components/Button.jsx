import React from 'react';

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      className="px-6 py-2 bg-green-400 text-black font-bold rounded hover:bg-green-500 focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;