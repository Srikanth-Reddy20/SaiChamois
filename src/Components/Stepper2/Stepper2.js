import React,{useState} from 'react'
import './Stepper2.css';
import stepperimage from './points.png';

function Stepper2() {
    return (
        <>
             <div className="timeline-back align-content-center align-items-center" id="timeline2">
                <div className="main">
                  <div className="stepper stepper1 c">
                  </div>
                  <div className="stepper stepper2 d-flex">
                       <p className="stepper-content">We source the finest skins from New Zealand, and rigourously affirm that the quality of the skins match our high expectations</p>
                      <img src="/assets/images/1.png" style={{margin:'0px 20px', height:'75px', width: "auto"}} className="stepper-img" />
                  </div>
                  <div className="stepper stepper3 d-flex" >
                      <img src="/assets/images/2.png" style={{margin:'0px 20px', height:'75px', width: "auto"}} className="stepper-img" />
                      <p className="stepper-content">We then assort the skins that pass our quality assurance, based on the requirements that we have</p>
                  </div>
                  <div className="stepper stepper4 d-flex" >
                       <p className="stepper-content">After the assorting is done, we tan the skins with traditional and well standardised process</p>
                      <img src="/assets/images/3.png" style={{margin:'0px 20px', height:'75px', width: "auto"}} className="stepper-img" />
                  </div>
                  <div className="stepper stepper5 d-flex" >
                      <img src="/assets/images/4.png" style={{margin:'0px 20px', height:'75px', width: "auto"}} className="stepper-img" />
                     <p className="stepper-content">Finally, we package the skins to meet international shipping standards and ship it to our consumers : globally acclaimed fashion brands, health care, and automotive industry alike</p>
                  </div>
                  <div className="stepper stepper6 c"></div>
                </div>
          </div>
        </>
    )
}

export default Stepper2
