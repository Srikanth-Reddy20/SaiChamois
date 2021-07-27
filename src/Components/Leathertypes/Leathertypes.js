import React from 'react'
import { useState } from 'react';
import './Leathertypes.css';

function Leathertypes() {
    const [siteState, setSiteState] = useState(window.location.pathname)
    return (
        <>
        <div className="marquee-div" style={{height:'auto'}}>
            {
                siteState === "/Chamois" && <marquee className="types-head">
                    &bull; TYPES OF CHAMOIS &bull; TYPES OF CHAMOIS &bull; TYPES OF CHAMOIS 
                    &bull; TYPES OF CHAMOIS
                    &bull; TYPES OF CHAMOIS &bull; TYPES OF CHAMOIS &bull; TYPES OF CHAMOIS &bull; TYPES OF CHAMOIS
                    &bull; TYPES OF CHAMOIS &bull; TYPES OF CHAMOIS
                </marquee>
            }
            {
                siteState === "/Leather" && <marquee className="types-head">
                    &bull; TYPES OF LEATHER &bull; TYPES OF LEATHER &bull; TYPES OF LEATHER 
                    &bull; TYPES OF LEATHER
                    &bull; TYPES OF LEATHER &bull; TYPES OF LEATHER &bull; TYPES OF LEATHER &bull; TYPES OF LEATHER
                    &bull; TYPES OF LEATHER &bull; TYPES OF LEATHER
                </marquee>
            }
        </div>
        </>
    )
}

export default Leathertypes
