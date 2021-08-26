import React from 'react'
import './Partnercarousel.css';
import Partnerslider from '../Partnerslider';
import partnerback from '../../assets/images/chamois-ourpartners.jpeg';
import jntBeaven from '../../assets/images/jnt-beaven.png';


function Partnercarousel() {
 const LARGE_IMAGES = [
        {
          id: 1,
          src: jntBeaven,
          alt: "Placeholder image",
          name : "J&T Beaven Ltd",
          tel:"+44(0)1225 782 245",
          email: "Andy@beaven.com",
          address: "117 The Midlands Holt, Trowbridge Wiltshire BA14 6RJ England."
        }
      ];
    return (
        <>
        <div className='partnercarousel-image2' style={{zIndex:'-1'}}>
          <div className="partnerback-imgdiv">
          <img src={partnerback}  className="partnerback-image" />
          </div>
      <div className="partner-section" id="leathertypes">
      <div style={{margin:'1%'}}>
        
        <div className="partnerslideWrapper">
          <img src={LARGE_IMAGES[0].src} alt={LARGE_IMAGES[0].alt} className="partnercarousel-img" />
          <div>
            <div className="partner-text"> Name: {LARGE_IMAGES[0].name}</div>
            <div className="partner-text"> Telephone: {LARGE_IMAGES[0].tel}</div>
            <div className="partner-text"> Email: {LARGE_IMAGES[0].email}</div>
            <div className="partner-text"> Address: {LARGE_IMAGES[0].address}</div>
          </div>
        </div>
        
      </div>

      </div>
      </div>
        </>
    )
}

export default Partnercarousel
