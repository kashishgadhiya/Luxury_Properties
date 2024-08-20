

import React from 'react'
import Link from 'next/link'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className='flex flex-col gap-2 bg-white shadow-md rounded-lg overflow-hidden mx-auto w-full sm:w-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl my-4 hover:border-blue-300'>
      <Link href={`/${item.id}`}>
  
    
        <img 
          src={item.img} 
          alt={`Image of ${item.title}`} 
          width={320} 
          height={180} 
          className='object-cover w-full h-40'
        />
      </Link>
      <div className='p-4 flex-1'>
        <p className='font-semibold text-lg'>{item.title}</p>
        <div className='flex items-center my-2 text-gray-700'>
          <CiLocationOn className='text-xl' />
          <span className='ml-1'>{item.address}</span>
        </div>
        <span className='block p-2 rounded-lg mb-2 font-medium'>
          Rs. {item.price}
        </span>
        <div className='flex gap-2 flex-wrap'>
          <div className='inline-flex items-center gap-2 bg-gray-200 p-2 rounded-lg'>
            <MdOutlineBedroomParent className='text-xl' />
            <span>{item.bedrooms} bedrooms</span>
          </div>
          <div className='inline-flex items-center gap-2 bg-gray-200 p-2 rounded-lg'>
            <MdOutlineBathroom className='text-xl' />
            <span>{item.bathrooms} bathrooms</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;

