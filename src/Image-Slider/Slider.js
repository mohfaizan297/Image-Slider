import React, { useEffect, useState } from "react";
import "./Slider.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";

export default function Slider() {
  let [index, setIndex] = useState(0);
  const[isHover, setIsHover] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6];

  // Function to go to the previous slide
  function leftSlider() {
    setIndex((index - 1 + images.length) % images.length);
  }

  // Function to go to the next slide
  function rightSlider() {
    setIndex((index + 1) % images.length);
  }

  // Function to automatically move to the next slide
  function autoSlide(){
    if(!isHover)
        rightSlider();
  }

  // Use useEffect to start and stop the automatic slideshow
  useEffect(() => {
    const interval = setInterval(autoSlide, 3000);// Change slide every 3 seconds
    console.log(index);
    return () => {
      clearInterval(interval); // Cleanup when the component unmounts
    };
  }, [index, isHover]);

  
  return (
    <div className="slider">
      <h1>React.js Image Slider</h1>

      <div className="images" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
        <div className="center">
          <img
            style={{
              animation: "imageFade 0.5s ease-in-out",
            }}
            src={images[index]}
          />
          <div className="leftArrow">
            <BsFillArrowLeftCircleFill className="arrow" onClick={leftSlider} />
          </div>
          <div className="rightArrow">
            <BsFillArrowRightCircleFill
              className="arrow"
              onClick={rightSlider}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
