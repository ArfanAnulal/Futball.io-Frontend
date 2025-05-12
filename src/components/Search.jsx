import React from 'react'
import "../css/Search.css"
import { Search as SearchIcon} from 'lucide-react'
const Search = () => {
  return (
    <div className='search'>
    <SearchIcon color='#0F172A'/>
      <input type="text" placeholder="Get Started..." />
    </div>
  )
}

export default Search

