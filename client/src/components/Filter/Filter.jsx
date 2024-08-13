import React from 'react';
import './filter.scss';

const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search results fro <b>Ibiza</b></h1>
      <div className="top">
        <div className="item">
          <label for="city">Location</label>
          <input type="text" id="city" name="city" placeholder='City Location...'/>         
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label for="type">Type</label>
          <select name='type' id='type'>
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>      
        </div>
        <div className="item">
          <label for="property">Property</label>
          <select name='property' id='property'>
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>         
        </div>
        <div className="item">
          <label for="minPrice">Min Price</label>
          <input type="number" id="minPrice" name="minPrice" placeholder='any'/>         
        </div>
        <div className="item">
          <label for="maxPrice">Max Price</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder='any'/>         
        </div>
        <div className="item">
          <label for="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder='any'/>         
        </div>
        <button>
          <img src="./search.png" alt=""/>
        </button>
      </div>
    </div>
  )
}

export default Filter;