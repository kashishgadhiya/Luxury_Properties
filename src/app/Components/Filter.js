"use client"
import React, { useState } from 'react'
import { IoFilter } from "react-icons/io5";
import SearchFilter from './SearchFilter';

const Filter = () => {
  const [Search , setSearch] = useState(false)
  return (
    <div className='max-w-7xl mx-auto my-5'>
   
    <SearchFilter/>
  
    
      
    </div>
  )
}

export default Filter
