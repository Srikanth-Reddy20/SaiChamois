import React from 'react'
import Footer from '../Footer/Footer'
import Ourpartners from '../Ourpartners/Ourpartners'
import Partnercarousel from '../Partnercarousel/Partnercarousel'


function Leathersection6(props) {
    return (
        <div style={props.style}>
            <Ourpartners />
            <Partnercarousel />
             <Footer />
        </div>
    )
}

export default Leathersection6
