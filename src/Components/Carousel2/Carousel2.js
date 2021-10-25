import React from 'react'
import './Carousel2.css';
import ImageSlider2 from '../ImageSlider2'
import traditional from '../../assets/images/traditional-chamois.webp'
import antiviral from '../../assets/images/traditional-chamois.webp'
import { Container } from 'react-bootstrap';

function Carousel2() {
    const LARGE_IMAGES = [
        {
          id: 1,
          src: "../../assets/images/traditional-chamois.webp",
          alt: "Placeholder image",
          head: "TRADITIONAL CHAMOIS",
          details: "SIZE: Dependent on species, COLOUR:  Natural Gold, THICKNESS: 0.5-1.8 mm, SUEDE, CAN BE CUT & RETAIL PACKAGED",
          uses: "USES: Shirt, Hand-glove, Hand-bag, Shoe",
          content: "Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand Deer and Goat for special purposes. ",
        },
        {
          id: 2,
          src: "../../assets/images/naked-sheep.webp",
          alt: "Placeholder image",
          head: "ANTI VIRAL CHAMOIS",
          details: "SIZE: 10-12sf, COLOUR: All colours possible, THICKNESS: 0.5-1.8 mm, NAPPA & SUEDE",
          uses: "USES: Shirt, Hand-glove, Hand-bag, Shoe",
          content: "We've achieved anti-viral properties in our traditional chamois through high tech research and development implemented in our manufacturing process",
        }
      ];
    return (
      <div className='carousel-image' id="chamoistypes" style={{display:"flex", alignItems:'center', justifyContent:"space-evenly", padding:"0px 1%"}}>
        <div style={{paddingRight:"2%"}}>
          <div className="image-head-div"><div className="image-heading" >TRADITIONAL CHAMOIS</div></div>
          <div className="slideWrapper">
            <img src={antiviral} alt=""  className="carousel-img" />
          </div>
          <div className="image-content">Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand Deer and Goat for special purposes.</div>
          <div className="image-details">SIZE: Dependent on species, COLOUR:  Natural Gold, THICKNESS: 0.5-1.8 mm, SUEDE, CAN BE CUT and RETAIL PACKAGED<br /><br />
          <span className="image-uses">USES: Shirt, Hand-glove, Hand-bag, Shoe</span></div>
        </div>
        <div style={{paddingLeft:"2%"}}>
          <div className="image-head-div"><div className="image-heading" >ANTI-VIRAL <br/> CHAMOIS</div></div>
          <div className="slideWrapper">
            <img src={traditional} alt=""  className="carousel-img" />
          </div>
          <div className="image-content">We've achieved anti-viral properties in our traditional chamois through high tech research and development implemented in our manufacturing process</div>
          <div className="image-details">SIZE: Dependent on species, COLOUR:  Natural Gold, THICKNESS: 0.5-1.8 mm, SUEDE, CAN BE CUT and RETAIL PACKAGED<br /><br />
          <span className="image-uses">USES: Shirt, Hand-glove, Hand-bag, Shoe</span></div>
        </div>
      </div> 
    )
}

export default Carousel2
