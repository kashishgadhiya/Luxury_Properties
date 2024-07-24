"use client"
import React from 'react';
import { MdOutlinePets, MdMiscellaneousServices } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaVectorSquare } from 'react-icons/fa';
import { MdOutlineBedroomChild, MdOutlineBathroom } from 'react-icons/md';
import { BiSolidSchool } from 'react-icons/bi';
import { TbBusStop } from 'react-icons/tb';
import { IoMdRestaurant } from 'react-icons/io';

const Firstpart = ({ item }) => {
  const { petPolicy, propertyFees, size, bedrooms, bathrooms, school, bus, restaurant } = item;

  return (
    <div className='bg-slate-100 lg:w-1/2 p-5 rounded-lg w-full'>
      <p className='font-semibold my-4 text-xl'>General</p>
      <div className='bg-white rounded-xl px-3 py-4 my-3'>
        <div className='flex items-start gap-2 my-1'>
          <MdMiscellaneousServices className='mt-1' />
          <div className='flex flex-col'>
            <p className='font-semibold'>Utilities</p>
            <p>{school}</p>
          </div>
        </div>
        <div className='flex items-start gap-2 my-2'>
          <MdOutlinePets className='mt-1' />
          <div>
            <p className='font-semibold'>Pet Policy</p>
            <p>{petPolicy}</p>
          </div>
        </div>
        <div className='flex items-start gap-2 my-2'>
          <GiTakeMyMoney className='mt-1' />
          <div>
            <p className='font-semibold'>Property Fees</p>
            <p>{propertyFees}</p>
          </div>
        </div>
      </div>

      <p className='font-semibold mt-5 text-md'>Room Sizes</p>
      <div className='bg-white rounded-xl px-3 my-2 py-2'>
        <div className='flex items-center justify-between font-medium my-2 flex-col-reverse gap-5 lg:flex-row lg:gap-0'>
          <div className='flex items-center'>
            <FaVectorSquare className='mx-1' /> {size}
          </div>
          <div className='flex items-center'>
            <MdOutlineBedroomChild className='mx-1' /> {bedrooms} Bed
          </div>
          <div className='flex items-center'>
            <MdOutlineBathroom className='mx-1' /> {bathrooms} bathroom
          </div>
        </div>
      </div>

      <p className='font-semibold mt-5'>Nearby Places</p>
      <div className='bg-white rounded-xl px-3 my-2 py-2 flex-wrap'>
        <div className='flex items-center justify-between font-medium mt-1 lg:flex-row flex-col gap-5 lg:gap-0'>
          <div className='flex items-start gap-2'>
            <BiSolidSchool className='mt-1' />
            <div className='flex flex-col'>
              School
              <div>{school}</div>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <TbBusStop className='mt-1' />
            <div className='flex flex-col'>
              Bus Stop
              <div>{bus}</div>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <IoMdRestaurant className='mt-1' />
            <div className='flex flex-col'>
              Restaurant
              <div>{restaurant}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpart;

