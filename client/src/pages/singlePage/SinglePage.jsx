import React from 'react'
import './singlePage.scss';
import Slider from '../../components/Slider/Slider';
import { singlePostDummyData } from '../../lib/dummyData';


const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">            
            <Slider images={singlePostDummyData.images}/>{/* img slider component whit effects */}
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{singlePostDummyData.title}</h1>
                  <div className="address">
                    <img src="./pin.png" alt="pin"/>
                    <span>{singlePostDummyData.address}</span>
                  </div>
                  <div className="price">$ {singlePostDummyData.price}</div>
                </div>
                <div className="user">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user photo"/>
                  <span>Pepi Random</span>
                </div>
              </div>
              <div className="bottom"></div>
            </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
}

export default SinglePage