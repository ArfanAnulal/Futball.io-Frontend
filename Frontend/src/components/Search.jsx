import React, { forwardRef } from 'react'
import "../css/Search.css"
import { Search as SearchIcon} from 'lucide-react'
const Search = () => {
  return (
    <div className='search'>
    <SearchIcon color='#2563EB'/>
      <input type="text" placeholder="Get Started..." />
    </div>
  )
}

export default Search

