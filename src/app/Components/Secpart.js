
"use client"
import React from 'react';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

const Secpart = ({ item }) => {
  const { title, images, description, ownerName, ownerPhoto, address, price } = item;

  const [mainImage, ...otherImages] = images;

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className='lg:w-1/2 ml-6 w-full'>
      <div className='flex flex-col'>
        <div className='flex-shrink-0 w-[90%]'>
          <Image
            src={mainImage}
            width={800}
            height={800}
            alt="Main Image"
            className='object-cover cursor-pointer rounded-lg'
            onClick={() => openModal(mainImage)}
          />
        </div>

        <div className='flex justify-between w-[90%]'>
          {otherImages.slice(0, 3).map((image, index) => (
            <div key={index} className='flex mb-2 my-2'>
              <Image
                src={image}
                width={180}
                height={150}
                alt={`Thumbnail ${index + 1}`}
                className='cursor-pointer rounded-lg'
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
      </div>

      <h1 className='lg:text-2xl text-lg font-medium mt-4'>{title}</h1>
      <div className='flex gap-32 items-center'>
        <div>
          <div className='flex items-center gap-2 my-2'>
            <CiLocationOn className='w-5' />
            <div>{address}</div>
            
          </div>
          <div className='flex items-center my-2'>
            <span className='bg-yellow-200 my-2 p-1'>Rs.{price}</span>
          </div>
        </div>

        <div className='lg:inline hidden'>
          <Image
            src={ownerPhoto}
            width={80}
            height={80}
            className='rounded-full'
            alt="Owner Photo"
          />
          <p>{ownerName}</p>
        </div>
      </div>
      <p className='mb-7 mt-2 w-[80%] lg:w-[90%]'>{description}</p>
    


      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='relative'>
            <Image
              src={selectedImage}
              layout="intrinsic"
              width={1200}
              height={1200}
              alt="Full Screen"
              className='object-contain max-w-[90vw] max-h-[90vh]'
            />
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-white text-4xl'
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Secpart;



