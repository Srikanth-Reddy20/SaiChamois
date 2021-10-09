import React from 'react';
import { useState } from 'react';
import './Process.css';

function Process() {
    const [siteState1, setSiteState] = useState(window.location.pathname)
    return (
        <>
            <div className="marquee-div" style={{height:'auto'}}>
            {
                siteState1 === "/Chamois" && <marquee className="types-head">
                    &bull; PROCESS &bull; PROCESS &bull; PROCESS 
                    &bull; PROCESS
                    &bull; PROCESS &bull; PROCESS &bull; PROCESS &bull; PROCESS
                    &bull; PROCESS &bull; PROCESS
                </marquee>
            }
            {
                siteState1 === "/Leather" && <marquee className="types-head">
                    &bull; PROCESS &bull; PROCESS &bull; PROCESS 
                    &bull; PROCESS
                    &bull; PROCESS &bull; PROCESS &bull; PROCESS &bull; PROCESS
                    &bull; PROCESS &bull; PROCESS
                </marquee>
            }
        </div>
        </>
    )
}

export default Process
