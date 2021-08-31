import React from 'react';
import './About.css';
import rightimg from '../../assets/images/naked-sheep.webp'
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
                <p className="para2"> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods.</p>

                <p className="para3"> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods.New Zealand Origin Bovine and Ovine 
                Skins Tannned</p>

                <div className="image-section2">
                <div class="leftimage-div">
                    <img src={leftimg} className="lft-img" />
                </div>
                <p className="para4"> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                in Traditional Processing Methods.</p>
                </div>

                <p className="para4"> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                </p>

                <p className="para4"> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods.</p>

                <p className="para4"> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned</p>

                <div className="column-div">
                <p className="column1"> <span className="column-heading">Certification:</span><br/> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned</p>

                <p className="column2"> <span className="column-heading">Traceability:</span><br/> New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned with Marine Fish Oils
                in Traditional Processing Methods. New Zealand Origin Bovine and Ovine 
                Skins Tannned</p>
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
