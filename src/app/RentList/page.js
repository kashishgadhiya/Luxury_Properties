
"use client"
import React, { useState } from 'react';
import SearchFilter from '../Components/SearchFilter';
import Card from '../Components/Card';
import data from '../lib/RentData';

const RentListpage = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (filters) => {
    let filtered = data;

    if (filters.searchTerm) {
      filtered = filtered.filter(item =>
        item.address.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }
    if (filters.minPrice) {
      filtered = filtered.filter(item => item.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(item => item.price <= Number(filters.maxPrice));
    }
    if (filters.sortOrder === 'ascending') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === 'descending') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredData(filtered);
  };

  return (
    <>
      <SearchFilter onSearch={handleFilterChange} />
        <h1 className='font-medium font-serif text-center text-3xl mt-10 mb-5'>Rent Properties</h1> 
      <div className='flex mx-auto p-2 h-screen gap-5  max-w-5xl'>
        <div className='flex flex-wrap gap-2 w-screen'>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <Card key={item.id} item={item} />
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RentListpage;
