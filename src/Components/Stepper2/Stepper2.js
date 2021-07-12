import React,{useState} from 'react'
import './Stepper2.css';
import stepperimage from './points.png';

function Stepper2() {
    return (
        <>
             <div className="timeline-back align-content-center align-items-center" id="timeline2">
              <div className="main">
                  <div className="stepper1 c">
                  </div>
                  <div className="stepper2 d-flex">
                       <p className="stepper-content">We combine time honoured tanning techniques with the most 
                      modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" />
                  </div>
                  <div className="stepper3 d-flex" >
                      <img src={stepperimage} className="stepper-img" />
                      <p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                  </div>
                  <div className="stepper4 d-flex" >
                       <p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" />
                  </div>
                  <div className="stepper5 d-flex" >
                      <img src={stepperimage} className="stepper-img" />
                     <p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                  </div>
                  <div className="stepper6 c"></div>
                </div>
          </div>
        </>
    )
}

export default Stepper2
