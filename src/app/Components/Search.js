"use client"
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const types = ["buy", "rent"];

const Search = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    });

    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }));
    };

    return (
        <div className='mx-auto my-10 max-w-5xl'>
            <div className='mb-4'>
                {types.map((type) => (
                    <button
                        key={type}
                        className={`py-2 px-5 rounded-sm ${query.type === type ? 'bg-black text-white' : 'bg-white text-black'} border ${query.type === type ? 'border-black' : 'border-transparent'} hover:bg-gray-200`} 
                        style={{borderTopLeftRadius:"2px"}}
                        onClick={() => switchType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form className='flex py-5  px-5 rounded-full'>
                <input
                    type="text"
                    name="location"
                    placeholder="City Location"
                    className='outline-none flex-1 px-3 py-5 '
                />
              
                <div className='bg-yellow-500 p-2 flex items-center  '>
                    <FaSearch className='w-6 h-5' />
                </div>
            </form>
        </div>
    );
};

export default Search;
