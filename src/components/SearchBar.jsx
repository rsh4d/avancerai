import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ placeholder, onChange, value, onSubmit }) {
  return (
    <form 
      onSubmit={onSubmit} 
      className='h-[60%] w-[60%] border-2 justify-center items-center border-gray-300 rounded-full flex flex-row focus-within:border-[#893976] focus-within:ring-1'
    >
        <FaSearch className='bg-white text-[#c4c4c4] w-4 h-4 ml-3 font-light'/>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='h-full w-full border-none focus:outline-none text-black p-5 text-md'
      />
        
    </form>
  );
}
