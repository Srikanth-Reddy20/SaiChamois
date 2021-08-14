import React from 'react'
import './Partnercarousel.css';
import Partnerslider from '../Partnerslider';
import partnerback from './chamois-ourpartners.jpeg';


function Partnercarousel() {
 const LARGE_IMAGES = [
        {
          id: 1,
          src: "/assets/images/naked-deer.webp",
          alt: "Placeholder image",
          content:"Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand",
        },
        {
          id: 2,
          src: "/assets/images/merino-lamb.webp",
          alt: "Placeholder image",
          content:"Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand",
        },
        {
          id: 3,
          src: "/assets/images/naked-goat.webp",
          alt: "Placeholder image",
          content:"Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand",
        },
        {
          id: 4,
          src: "/assets/images/eco-lamb.webp",
          alt: "Placeholder image",
          content:"Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand",
          },
        {
          id: 5,
          src: "/assets/images/naked-cow.webp",
          alt: "Placeholder image",
          content:"Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand",
          },
        {
          id: 6,
          src: "/assets/images/bavarian-deer.webp",
          alt: "Placeholder image",
          content:"Traditional chamois is produced using New Zealand sheep skins, but we can also offer made from New Zealand",
        },
      ];
    return (
        <>
        <div className='partnercarousel-image2'>
          <div className="partnerback-imgdiv">
          <img src={partnerback}  className="partnerback-image" />
          </div>
      <div className="partner-section" id="leathertypes">
        <Partnerslider images={LARGE_IMAGES} />
      </div>
      </div>
        </>
    )
}

export default Partnercarousel
