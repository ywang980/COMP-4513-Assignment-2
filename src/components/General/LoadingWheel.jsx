import React from 'react';

/**
 * LoadingWheel is a component that displays a loading wheel and a message.
 *
 * @param {string} message The message to be displayed above the loading wheel.
 */
const LoadingWheel = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-lg font-bold mb-4">{message}</p>
      <div className="animate-spin rounded-full w-32 h-32
      border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
};

export default LoadingWheel;