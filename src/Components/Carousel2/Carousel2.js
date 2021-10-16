import React from 'react'
import './Carousel2.css';
import ImageSlider2 from '../ImageSlider2'
import traditional from '../../assets/images/traditional-chamois.webp'
import antiviral from '../../assets/images/naked-sheep.webp'
import { Container } from 'react-bootstrap';

function Carousel2() {
    const LARGE_IMAGES = [
        {
          id: 1,
          src: "../../assets/images/traditional-chamois.webp",
          alt: "Placeholder image",
          head: "TRADITIONAL CHAMOIS",
          content: "Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand Deer and Goat for special purposes. ",
        },
        {
          id: 2,
          src: "../../assets/images/naked-sheep.webp",
          alt: "Placeholder image",
          head: "ANTI VIRAL CHAMOIS",
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
        </div>
        <div style={{paddingLeft:"2%"}}>
          <div className="image-head-div"><div className="image-heading" >ANTI-VIRAL <br/> CHAMOIS</div></div>
          <div className="slideWrapper">
            <img src={traditional} alt=""  className="carousel-img" />
          </div>
          <div className="image-content">We've achieved anti-viral properties in our traditional chamois through high tech research and development implemented in our manufacturing process</div>
        </div>
      </div> 
    )
}

export default Carousel2
