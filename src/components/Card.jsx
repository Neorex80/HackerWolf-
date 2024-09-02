import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-sm shadow-blue-500">
      <h3 className="text-xl font-bold text-green-400">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default Card;