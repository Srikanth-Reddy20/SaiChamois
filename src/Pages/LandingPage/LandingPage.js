import React from 'react'
import Natural from '../../Components/Natural/Natural'
import Slider from '../../Components/Slider/Slider'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './LandingPage.css';
import Landingsection1 from '../../Components/Landing/Landingsection1'
import Landingsection2 from '../../Components/Landing/Landingsection2'

function LandingPage() {
    return (
        <div>
          <Header />
        <div style ={{scrollSnapType: "y mandatory", height:"90vh", overflow:"auto"}}>
          <Landingsection1 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
          <Landingsection2 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
        </div>
            
            
        </div>
    )
}

export default LandingPage
