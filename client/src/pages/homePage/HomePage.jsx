import React from 'react';
import "./homePage.scss";
import SearchBar from '../../components/SearchBar/SearchBar';

function HomePage() {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Find Real Estate & Get Your Dream Place!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Debitis inventore minus non explicabo accusamus earum esse id 
          praesentium nostrum voluptatem ipsa error repellat fugit ratione 
          tempore quidem ab, delectus repellendus.
        </p>
        <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>3000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="show-info"/>
      </div>
    </div>
  )
}

export default HomePage

//43.10