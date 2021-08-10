import React from 'react'
import './Partnercarousel.css';
import Partnerslider from '../Partnerslider'


function Partnercarousel() {
 const LARGE_IMAGES = [
        {
          id: 1,
          src: "/assets/images/naked-deer.webp",
          alt: "Placeholder image",
        },
        {
          id: 2,
          src: "/assets/images/merino-lamb.webp",
          alt: "Placeholder image",
        },
        {
          id: 3,
          src: "/assets/images/naked-goat.webp",
          alt: "Placeholder image",
        },
        {
          id: 4,
          src: "/assets/images/eco-lamb.webp",
          alt: "Placeholder image",
          },
        {
          id: 5,
          src: "/assets/images/naked-cow.webp",
          alt: "Placeholder image",
          },
        {
          id: 6,
          src: "/assets/images/bavarian-deer.webp",
          alt: "Placeholder image",
        },
      ];
    return (
        <>
        
      <div className='carousel-image' id="leathertypes">
        <Partnerslider images={LARGE_IMAGES} />
        
      </div> 
  
        </>
    )
}

export default Partnercarousel
