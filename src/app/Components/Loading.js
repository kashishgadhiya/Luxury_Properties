
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-bounce" />
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-bounce animation-delay-200" />
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-bounce animation-delay-400" />
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-bounce animation-delay-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
