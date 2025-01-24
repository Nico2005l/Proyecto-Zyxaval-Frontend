import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black to-gray-600">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;