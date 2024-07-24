import React from 'react';

const CardLoading = () => {
  return (
    <div className='flex flex-col gap-2 bg-white shadow-md rounded-lg overflow-hidden mx-auto w-full sm:w-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl my-4 animate-pulse'>
      <div className='w-full h-40 bg-gray-200'></div>
      <div className='p-4 flex-1'>
        <div className='w-3/4 h-6 bg-gray-200 mb-2'></div>
        <div className='flex items-center my-2 text-gray-700'>
          <div className='w-6 h-6 bg-gray-200 rounded-full'></div>
          <div className='ml-2 w-1/2 h-4 bg-gray-200'></div>
        </div>
        <div className='w-1/3 h-6 bg-gray-200 rounded-lg mb-2'></div>
        <div className='flex gap-2 flex-wrap'>
          <div className='inline-flex items-center gap-2 bg-gray-200 p-2 rounded-lg'>
            <div className='w-6 h-6 bg-gray-200'></div>
            <div className='w-2/3 h-4 bg-gray-200'></div>
          </div>
          <div className='inline-flex items-center gap-2 bg-gray-200 p-2 rounded-lg'>
            <div className='w-6 h-6 bg-gray-200'></div>
            <div className='w-2/3 h-4 bg-gray-200'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
