

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imgUrl }) => {
  return (
    <div className="flex flex-wrap justify-center items-center p-10">
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2">
        <Image src={imgUrl} width={400} height={200} alt="banner" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 p-2">
        <p className="text-gray-500 text-sm font-medium">{purpose}</p>
        <h1 className="text-xl font-bold mt-1 mb-1">{title1}<br />{title2}</h1>
        <p className="text-gray-700 text-sm font-medium ">{desc1}<br />{desc2}</p>
        <Link href={linkName} className="inline-block px-2 py-1 mt-1  font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
            {buttonText}
         
        </Link>
      </div>
    </div>
  )
}

export default Banner
