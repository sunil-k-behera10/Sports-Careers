import React from 'react'
import '../App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'



function Expert() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-[1342px] h-[600px] border border-black ml-1 '>
      <Slider {...settings}>
      <div className="container">
          <div className="image w-[1342px] ">
            <img className="hello" src={img1} alt="" height="200px" width="1342px" />
          </div>
            <div className="second">
             <img className="image1" src={img1} alt="" height="100px" width="900px" />
            </div>
        </div>

        <div className="container">
          <div className="image w-[1342px]">
            <img className="hello" src={img2} alt="" height="200px" width="1342px" />
          </div>
            <div className="second">
             <img className="image1" src={img2} alt="" height="100px" width="900px" />
            </div>
            
        </div>

        


    </Slider>
    </div>
  )
}

export default Expert