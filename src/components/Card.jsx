import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-2 border-b-2 border-cyan-400 pb-2">
        {title}
      </h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default Card;
