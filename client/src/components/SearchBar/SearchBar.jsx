import React, { useState } from 'react';
import "./searchBar.scss";


const types = ["buy", "rent"];


const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location:  "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value) => {
    // update "type" by selected button (buy or rent)
    setQuery((prev) => ({...prev, type: value}));
  };

  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => ( 
        <button 
          key={type}     
          onClick={() => switchType(type)}
          className={query.type === type ? "active" : ""}
        >{type}</button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder='City Location...?' value=""/>
        <input type="number" name="minPrice" min={0} max={10000000} placeholder='Min Price?' value=""/>
        <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Max Price?' value=""/>
        <button>
          <img src="./search.png" alt="search-icon"/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar;