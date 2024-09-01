import React, { useState } from 'react';
import "./slider.scss";

const Slider = ({images}) => {

  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if(direction === "left"){
      if(imageIndex === 0){
        setImageIndex(images.length-1); // if is 0 item from array show the last in array (start from end)
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else { //direction === "right"
      if(imageIndex === images.length-1){
        setImageIndex(0); // if is last item, back from 1 to start
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };


  return (
    <div className="slider">

      {/* image slider screen  */}
      {imageIndex !==null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" className="leftArrow" alt="<"/>
          </div>
          <div className="imgContainer">
            {/* test img for now */}
            <img src={images[imageIndex]} alt="test-image1"/>
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="./arrow.png" className="rightArrow" alt=">"/>
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)}/>
      </div>
      <div className="smallImages">
        {images.slice(1).map((images, index) => (
          <img src={images} alt="" key={index} onClick={() => setImageIndex(index+1)} />
        ))}
      </div>

    </div>  
  )
}

export default Slider;