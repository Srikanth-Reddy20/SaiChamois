import React from 'react'
import Products from '../../Components/Products/Products'
import Header2 from '../../Components/Header2/Header2'
import Slider2 from '../../Components/Slider2/Slider2'
import Natural from '../../Components/Natural/Natural'
import Leathertypes from '../../Components/Leathertypes/Leathertypes'
import Footer from '../../Components/Footer/Footer'
import Stepper from '../../Components/Stepper/Stepper'
import Carousel from '../../Components/Carousel/Carousel'

function ChamoisPage() {
    return (
        <>
            <Header2 />
            <Slider2 />
            <Natural />
            <Stepper />
            <Leathertypes />
            <Carousel />
            <Products />
            <Footer />
        </>
    )
}

export default ChamoisPage
