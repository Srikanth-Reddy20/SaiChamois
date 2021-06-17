import React from 'react'
import './Carousel.css';
import ImageSlider from '../ImageSlider'
import slide from './Leather-1.jpg';


function Carousel() {
 const LARGE_IMAGES = [
        {
          id: 1,
          src: {slide},
          alt: "Placeholder image",
        },
        {
          id: 2,
          src: {slide},
          alt: "Placeholder image",
        },
        {
          id: 3,
          src: {slide},
          alt: "Placeholder image",
        },
        {
          id: 4,
          src: {slide},
          alt: "Placeholder image",
        },
        {
          id: 5,
          src: {slide},
          alt: "Placeholder image",
        },
        {
          id: 6,
          src: {slide},
          alt: "Placeholder image",
        },
      ];
    return (
        <>
      <div className='carousel-image'>
        <ImageSlider images={LARGE_IMAGES} />
      </div> 
        </>
    )
}

export default Carousel
