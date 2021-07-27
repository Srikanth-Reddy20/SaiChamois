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
          src: "/assets/images/naked-deer.webp",
          alt: "Placeholder image",
          head: "NAKED DEER",
          content: "Farmed Deer leather is prepared with a fine grain character and luxurious silky soft feel, well suited for a full range of leather goods; garments, gloves, shoes and bags.",
        },
        {
          id: 2,
          src: "/assets/images/merino-lamb.webp",
          alt: "Placeholder image",
          head: "MERINO LAMB",
          content: "The Merino are farmed in the mountains of New Zealand, where they are best known for producing the world’s finest woollen fleece. Merino Lamb leather is crafted to showcase the material’s natural pebble character.",
        
        },
        {
          id: 3,
          src: "/assets/images/naked-goat.webp",
          alt: "Placeholder image",
          head: "NAKED GOAT",
          content: "We select the very best material from our goats for making our premium velvet goats suedes. We grade the material depending on the final use, be it soft velvet suede gloves and garments, or luxurious shoes and bags that require a little more structure.",
        
        },
        {
          id: 4,
          src: "/assets/images/slink-lamb.webp",
          alt: "Placeholder image",
          head: "SLINK LAMB",
          content: "New Zealand slink baby lamb shearling is prized by the world’s leading fashion houses and glove makers. Each piece of shearling is handcrafted by our artisans in the Deep South of New Zealand.",
        },
        {
          id: 5,
          src: "/assets/images/eco-lamb.webp",
          alt: "Placeholder image",
          head: "ECO LAMB",
          content: "Our Eco Lamb nappa is produced using a revolutionary chrome-free process, enabling a full range of colours, including white. This suede is produced with a tannage developed with a combination of natural oils and cashew extracts, ideal for next-to-skin usage",
        
        },
        {
          id: 6,
          src: "/assets/images/naked-cow.webp",
          alt: "Placeholder image",
          head: "NAKED COW",
          content: "NAKED COW ™ represents the spirit of New Zealand’s natural farms. Our farmers work hand-in-hand with nature to ensure luxurious leather, while sustaining an environmental legacy to be passed on to generations to come.",
        
        },
        {
          id: 7,
          src: "/assets/images/bavarian-deer.webp",
          alt: "Placeholder image",
          head: "BAVARIAN SUEDE",
          content: "Our fine Bavarian style saemisch suedes are produced using the old-world technique; combining natural fish oil, time and patience. Together this creates an incredibly soft suede; the genuine article that is true to tradition.",
        
        },
      ];
    return (
        <>
        
      <div className='carousel-image' id="leathertypes">
        <ImageSlider images={LARGE_IMAGES} />
        
      </div> 
  
        </>
    )
}

export default Carousel
