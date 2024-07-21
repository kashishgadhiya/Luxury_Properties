"use client"
import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  const handleSearch = () => {
    onSearch({ searchTerm, minPrice, maxPrice, sortOrder });
  };

  return (
    <div className='max-w-7xl mx-auto my-5'>
      <div className='bg-gray-300 flex text-lg justify-center items-center gap-3 font-semibold py-2 px-4 cursor-pointer rounded-md shadow-md hover:bg-gray-400 transition-colors' onClick={toggleFilter}>
        Search Property By Filters
        <IoFilter />
      </div>

      {isFilterOpen && (
        <div className='mt-4 p-6 border border-gray-300 rounded-md shadow-lg bg-white'>
          <button className='float-right text-gray-600 hover:text-gray-900 transition-colors' onClick={toggleFilter}>
            <MdCancel size={24} />
          </button>
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Search by City</label>
            <input
              type='text'
              value={searchTerm}
              onChange={handleSearchChange}
              className='border border-gray-300 p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter city name'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Price Range</label>
            <div className='flex gap-4'>
              <input
                type='number'
                name='minPrice'
                value={minPrice}
                onChange={handlePriceChange}
                className='border border-gray-300 p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Min Price'
              />
              <input
                type='number'
                name='maxPrice'
                value={maxPrice}
                onChange={handlePriceChange}
                className='border border-gray-300 p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Max Price'
              />
            </div>
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Sort By Price</label>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className='border border-gray-300 p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='ascending'>Price: Low to High</option>
              <option value='descending'>Price: High to Low</option>
            </select>
          </div>
          <button 
            onClick={handleSearch} 
            className='bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-colors flex items-center gap-2'
          >
            <FaSearch />
            Search
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
