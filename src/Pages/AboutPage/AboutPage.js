import React from 'react'
import About from '../../Components/About/About'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function AboutPage() {
    return (
        <div style ={{overflowX:"hidden"}}>
            <Header />
            <About />
            <Footer />
        </div>
    )
}

export default AboutPage
