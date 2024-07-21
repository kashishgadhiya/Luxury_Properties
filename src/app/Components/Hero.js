
"use client"
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <img src='/h_1.jpg' alt="heroimg" className='object-cover w-full h-full' role='presentation' />,
    <img src='/h_2.jpg' alt="heroimg" className='object-cover w-full h-full' role='presentation' />,
    <img src='/h_3.jpg' alt="heroimg" className='object-cover w-full h-full' role='presentation' />,
    <img src='/h_4.jpg' alt="heroimg" className='object-cover w-full h-full' role='presentation' />,
    <img src='/h_6.jpg' alt="heroimg" className='object-cover w-full h-full' role='presentation' />,
];

const Hero = () => {
  return (
    <>
      <section className='mx-auto my-16 px-4'>
        <div className='flex flex-col md:flex-row gap-8 '>
          
          <div className='flex-1 md:mr-8'>
            <h1 className='text-xl md:text-4xl font-medium mb-4'>
              Find Real Estate & Get <br /> Your Dream Place
            </h1>
            <p className='text-md font-semibold mb-4'>
              Luxury Properties brings you the pinnacle of real estate excellence. Browse through our selection of homes and stunning estates, each designed to offer the ultimate in comfort and style. Experience a seamless journey to your dream property with our expert guidance.
            </p>
          </div>

          <div className='flex-1 max-w-2xl'>
            <AliceCarousel
              items={items}
              disableButtonsControls
              autoPlay
              autoPlayInterval={1000}
              infinite
              className='h-64 rounded-xl' 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
