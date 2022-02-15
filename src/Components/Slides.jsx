import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import image1 from 'Media/Agronomy.jpg'
import image2 from 'Media/Agro.jpg'






const Slides = () => {
  return (
    <Slide easing="ease">
      <div className="flex items-center text-center m-auto justify-center h-full sm:h-3/4 sm:w-1/4">
        <img src={image1} alt="" />
      </div>

      <div className="flex items-center text-center m-auto justify-center h-full sm:h-3/4 sm:w-1/4">
        <img src={image2} alt="" />
      </div>

  

           
        


    </Slide>
  );
}

export default Slides