import React, { forwardRef } from 'react'
import "../css/Search.css"
import { Search as SearchIcon} from 'lucide-react'
import { useState } from 'react';
import { useEffect } from 'react';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const setStorage = () => {
    localStorage.setItem('searchTerm', searchTerm);
  }
  return (
    <div className='search'>
      <SearchIcon color='#2563EB' className='search-icon'/>
      <form className='search-form' onSubmit={setStorage}>
         <input type="text" placeholder="Get Started..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); console.log(e.target.value); }} />
      </form>
    </div>
  )
}
export default Search;

