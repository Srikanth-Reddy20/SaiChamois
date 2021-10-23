import React from 'react'
import './Carousel.css';
import ImageSlider from '../ImageSlider'

import { Container } from 'react-bootstrap';


function Carousel() {
 const LARGE_IMAGES = [
        {
          id: 1,
          src: "/assets/images/naked-deer.webp",
          alt: "Placeholder image",
          head: "NAKED DEER",
          details: "SIZE: 10-12sf, COLOUR: All colours possible, THICKNESS: 0.5-1.8 mm, NAPPA & SUEDE",
          uses: "USES: Shirt, Hand-glove, Hand-bag, Shoe",
          content: "Farmed Deer leather is prepared with a fine grain character and luxurious silky soft feel, well suited for a full range of leather goods; garments, gloves, shoes and bags.",
        },
        {
          id: 2,
          src: "/assets/images/merino-lamb.webp",
          alt: "Placeholder image",
          head: "MERINO LAMB",
          details: "SIZE: 5.5-6.5sf, COLOUR: All colours possible, THICKNESS (Garment) 0.8-1.0 mm, THICKNESS (Bag): 1.2-1.4-1.6 mm, NAPPA & BUFFED NUBUCK",
          uses: "USES: Shirt, Hand-bag, Shoe",
          content: "The Merino are farmed in the mountains of New Zealand, where they are best known for producing the world’s finest woollen fleece. Merino Lamb leather is crafted to showcase the material’s natural pebble character.",
        
        },
        {
          id: 3,
          src: "/assets/images/naked-goat.webp",
          alt: "Placeholder image",
          head: "NAKED GOAT",
          details: "SIZE: 2.5-7sf dependent on selection, COLOUR: All colours possible, THICKNESS: 0.5-1.4 mm, NAPPA & SUEDE",
          uses: "USES: Shirt, Hand-glove, Hand-bag, Shoe",
          content: "We select the very best material from our goats for making our premium velvet goats suedes. We grade the material depending on the final use, be it soft velvet suede gloves and garments, or luxurious shoes and bags that require a little more structure.",
        
        },
        {
          id: 4,
          src: "/assets/images/eco-lamb.webp",
          alt: "Placeholder image",
          head: "ECO   LAMB",
          details: "SIZE: 6-7sf, COLOUR: All colours possible, THICKNESS: 0.8-1.6 mm, NAPPA (Chrome-free), SUEDE (NAKED)",
          uses: "USES: Shirt, Hand-bag, Shoe",
          content: "Our Eco Lamb nappa is produced using a revolutionary chrome-free process, enabling a full range of colours, including white. This suede is produced with a tannage developed with a combination of natural oils and cashew extracts, ideal for next-to-skin usage",
        
        },
        {
          id: 5,
          src: "/assets/images/naked-cow.webp",
          alt: "Placeholder image",
          head: "NAKED COW",
          details: "SIZE: 13-15sf sides for Lining, Garments and Gloves. SIZE: 15-18sf sides for Shoes, Bags and Belts. COLOUR: All colours possible except white, THICKNESS (Garment/Glove/Lining): 0.8-1.2 mm, THICKNESS (Shoe/Bag/Belt): 1.2 mm-4.0 mm, NAPPA, SUEDE & BUFFED NUBUCK",
          uses: "USES: Shirt, Hand-glove, Hand-bag, Shoe",
          content: "NAKED COW ™ represents the spirit of New Zealand’s natural farms. Our farmers work hand-in-hand with nature to ensure luxurious leather, while sustaining an environmental legacy to be passed on to generations to come.",
        
        },
        {
          id: 6,
          src: "/assets/images/bavarian-deer.webp",
          alt: "Placeholder image",
          head: "BAVARIAN SUEDE",
          details: "SIZE: Dependent on species, COLOUR: Gold base with coloured top dye, THICKNESS: 0.5-2.0 mm, NAPPA & SUEDE",
          uses: "USES: Shirt, Hand-glove, Hand-bag, Shoe",
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
