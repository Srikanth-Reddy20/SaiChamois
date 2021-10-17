import React from 'react';
import './About.css';
import rightimg from '../../assets/images/contact-menu.jpeg'
import leftimg from '../../assets/images/naked-deer.webp'
import chamoislabel from '../../assets/images/Cha2.svg'
import leatherlabel from '../../assets/images/Lea2.svg'
import sideimg1 from '../../assets/images/saichamois-goldrated.jpeg'
import sideimg2 from '../../assets/images/saichamois-logo.png'

function About() {
    return (
        <>
            <div className="about-slide">
                <h1 className="about-title"><span className="title-span">Welcome to</span><br />
                Sai <br/> Chamois<span className="title-span">INC.</span></h1>
            </div>
            <div className="about-greysection">
                <div class="content-div">
                <div className="image-section1">
                    <p className="para1"><span className="percent">100%</span> New Zealand Origin Bovine and Ovine 
                    Skins Tannned with <span className="bold">Marine Fish Oils </span>
                    in Traditional Processing Methods.</p>
                    <div class="rightimage-div">
                        <img src={rightimg} className="rgt-img" />
                    </div>
                </div>
                <p className="para2"> We are a family-owned company established in the year 2000, Primarily 
                processing Natural Chamois Leathers from 100 % New Zealand origin Bovine and Ovine Skins Tanned 
                with Marine Fish oils in Traditional Processing methods, which helps our Leathers and processing 
                system to meet sustainability.</p>

                <p className="para3"> Our Sheep chamois Leathers are 100% Biodegradable, Antimicrobial, with Natural
                 Golden color. They are extremely Soft, Luxurious with Drying, and polishing properties for
                  Automobiles, jewelry, watches, and any screen surface. it has unique Water absorption properties 
                  of 375 % and above its weight of water and conforms to BS standards.</p>

                <div className="image-section2">
                <div class="leftimage-div">
                    <img src={leftimg} className="lft-img" />
                </div>
                <p className="para4"> SAI offers New Zealand Sheep, Goat, Deer, Hides chamois skins,
                 and finished Leathers for Gloves, Bags, and Shoes, with Non-Toxic / Anti Cytotoxicity 
                 properties. We also process Health care Leathers for Orthopedics and Other Medical uses
                  and General Health Care as per Test standards: ISO 10993-5-2009 (E) Direct Method.</p>
                </div>

                <p className="para4"> We process specialty Leathers for Antivirus 
                Chamois Towels, Glove’s product confirming to TEST STANDARD: ISO 21702:2019*  
                </p>

                <p className="para4"> SAI’S Care for Environment: Sai Chamois deeply cares about our planet.
                 All our chamois leathers and Finished Leathers are Biodegradable and Renewable.</p>

                <p className="para4"> 
All are input skins and Hides are processed from New Zealand origin animals.
The Sheep, Deer, Goat, and Hides skins are the by-product of the Farming 
and Meat Industry of New Zealand which has a high reputation for Animal welfare,
 highest level of ethical standards.
</p>

                <div className="column-div">
                <p className="column1"> <span className="column-heading">Certification:</span><br/> All our 
                Inputs are monitored with compliance and our Sai Chamois processing plant continues to work in 
                recycling and follows safe equipment and sustainable processing. 
Audited by Leather Working Group (LWG) as a GOLD-rated member.
</p>

                <p className="column2"> <span className="column-heading">Traceability:</span><br/>Skins and Hides are Bi 
                products of New Zealand Farming and Meat Industry wherein Highest level of ethical and animal welfare system 
                is practiced, Our business presence of more than a decade and with a trusted relationship with well-established
                ew Zealand Meat companies committed to Animal welfare 
                and sustainable process systems, helps us able to offer Traceability for our leathers</p>
                <div className="sideimage-div">
                    <img src={sideimg1} className="sideimage1" />
                    <img src={sideimg2} className="sideimage2" />
                    <img src={sideimg1} className="sideimage1" />
                </div>
                </div>

                </div>
            </div>
            <div className="about-images-div">
                    <img src={chamoislabel} className="round-image1" />
                    <img src={leatherlabel} className="round-image2" />
                </div>
        </>
    )
}

export default About
