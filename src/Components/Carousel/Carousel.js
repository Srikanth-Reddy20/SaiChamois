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
          head: "head1",
          content: "New Zealand has a rich history of sheep farming, but few people realize we have also been farming goats for generations",
        },
        {
          id: 2,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
          head: "head2",
          content: "New Zealand has a rich history of sheep farming, but few people realize we have also been farming goats for generations",
        
        },
        {
          id: 3,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
          head: "head3",
          content: "New Zealand has a rich history of sheep farming, but few people realize we have also been farming goats for generations",
        
        },
        {
          id: 4,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
          head: "head4",
          content: "New Zealand has a rich history of sheep farming, but few people realize we have also been farming goats for generations",
        
        },
        {
          id: 5,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
          head: "head5",
          content: "New Zealand has a rich history of sheep farming, but few people realize we have also been farming goats for generations",
        
        },
        {
          id: 6,
          src: "/assets/images/Leather-1.jpg",
          alt: "Placeholder image",
          head: "head6",
          content: "New Zealand has a rich history of sheep farming, but few people realize we have also been farming goats for generations",
        
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
