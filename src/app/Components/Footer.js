// components/Footer.js

import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'

const Footer = () => { 
  return (
    <footer className='w-full   py-4 flex flex-col items-center border-t-2'>
      <div className='flex space-x-4 mb-2'>
        <Link  href='/'
        
        
          
          className='p-2 rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-colors'
        >
          <FaFacebook size={24} />
      
        </Link>
        <Link
           href='/'
        
          className='p-2 rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-colors'
        >
          <RiInstagramFill size={24} />
        </Link>
        <Link
          href='/'
          className='p-2 rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-colors'
        >
          <FaTwitter size={24} />
        </Link>
        <Link
          href='/'
          className='p-2 rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-colors'
        >
          <FaYoutube size={24} />
        </Link>
      </div>
      <p className='text-center text-sm'>
        Made with 💖 by Kashish Gadhiya
      </p>
    </footer>
  )
}

export default Footer

