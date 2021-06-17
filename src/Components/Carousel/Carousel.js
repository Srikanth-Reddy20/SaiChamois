import React from 'react'
import './Carousel.css';
import ImageSlider from '../ImageSlider'
import slide from './Leather-1.jpg';
import deer from './Deer.jpeg'
import { Container } from 'react-bootstrap';


function Carousel() {
 const LARGE_IMAGES = [
        {
          id: 1,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
        },
        {
          id: 2,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
        },
        {
          id: 3,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
        },
        {
          id: 4,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
        },
        {
          id: 5,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
        },
        {
          id: 6,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
        },
      ];
    return (
        <>
        <Container className="deer-text">   </Container>
      <div className='carousel-image'>
        <ImageSlider images={LARGE_IMAGES} />
        
      </div> 
  
        </>
    )
}

export default Carousel
