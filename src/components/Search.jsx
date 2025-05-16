import "../css/Search.css";
import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const setStorage = (e) => {
    e.preventDefault(); // prevent page reload
    localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <div className="search-wrapper">
      <div className="search">
        <SearchIcon color="#2563EB" className="search-icon" />
        <form className="search-form" onSubmit={setStorage}>
          <input
            type="text"
            placeholder="Search season"
            value={searchTerm}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)} // delay blur to allow click
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      
      {isFocused && searchTerm === "" && (
        <div className="search-helper">
          Enter a year like <strong>2022</strong> to view the 2022–23 season
        </div>
      )}
    </div>
  );
};

export default Search;
