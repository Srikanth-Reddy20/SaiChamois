import React,{useState} from 'react'
import './Stepper2.css';
import stepperimage from './points.png';

function Stepper2() {
    return (
        <>
             <div className="timeline-back align-content-center align-items-center" id="timeline">
              <div className="main">
                  <div className="stepper c">
                  </div>
                  <div className="stepper d-flex">
                       <p className="stepper-content">We combine time honoured tanning techniques with the most 
                      modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" />
                  </div>
                  <div className="stepper d-flex" >
                      <img src={stepperimage} className="stepper-img" />
                      <p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                  </div>
                  <div className="stepper d-flex" >
                       <p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" />
                  </div>
                  <div className="stepper d-flex" >
                      <img src={stepperimage} className="stepper-img" />
                     <p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                  </div>
                  <div className="stepper c"></div>
                </div>
          </div>
        </>
    )
}

export default Stepper2
