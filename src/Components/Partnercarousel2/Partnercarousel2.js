import React from 'react'
import './Partnercarousel2.css';
import Partnerslider2 from '../Partnerslider2';
import partnerback from '../../assets/images/chamois-ourpartners.jpeg';
import nzlLogo from '../../assets/images/nzl-logo.webp';

function Partnercarousel2() {
    const LARGE_IMAGES = [
           {
             id: 1,
             src: nzlLogo,
             alt: "Placeholder image",
             name : "NZ Luxury Group",
             tel:"+64 3 6690140",
             email: "info@nzluxurygroup.com",
             address: "82 Perry Street, Papanui, Christchurch 8053, New Zealand"
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
   

export default Partnercarousel2
