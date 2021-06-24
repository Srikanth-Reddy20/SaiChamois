import React from 'react'
import Natural from '../../Components/Natural/Natural'
import Slider from '../../Components/Slider/Slider'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './LandingPage.css';
import ReactPageScroller from 'react-page-scroller';
import Landingsection1 from '../../Components/Landing/Landingsection1'
import Landingsection2 from '../../Components/Landing/Landingsection2'

function LandingPage() {
    return (
        <>
        <ReactPageScroller>
          <Landingsection1 />
          <Landingsection2 />
        </ReactPageScroller>
            
            
        </>
    )
}

export default LandingPage
