import React from 'react'
import './singlePage.scss';
import Slider from '../../components/Slider/Slider';
import { singlePostDummyData } from '../../lib/dummyData';
import Map from '../../components/Map/Map';


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
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user Avatar"/>
                  <span>Pepi Random</span>
                </div>
              </div>
              <div className="bottom">
                {singlePostDummyData.description}
              </div>
            </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt=""/>
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt=""/>
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="./fee.png" alt=""/>
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className='title'>Room Size</p>
          <div className="listHorizontal">
            <div className="size">
              <img src="./size.png" alt=""/>
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="./bed.png" alt=""/>
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="./bath.png" alt=""/>
              <span>1 bathroom</span>
            </div>
          </div>

          <p className='title'>Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt=""/>
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./bus.png" alt=""/>
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./restaurant.png" alt=""/>
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[singlePostDummyData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt=""/>
              Send a Message
            </button>
            <button>
              <img src="./save.png" alt=""/>
              Save the Place
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SinglePage