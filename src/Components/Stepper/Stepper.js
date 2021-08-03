import React,{useState} from 'react'
import './Stepper.css';
import stepperimage from './points.png';

function Stepper() {

    return (
        <>
          <div className="timeline-back align-content-center align-items-center" id="timeline">
          <div className="main">
                  <div className="stepper stepper1 c">
                  </div>
                  <div className="stepper stepper2 d-flex">
                       <p className="stepper-content">We source the finest skins and hides from New Zealand, and rigourously affirm that the quality of the skins and hides match our high expectations</p>
                      <img src="/assets/images/1.png"  className="stepper-img" />
                  </div>
                  <div className="stepper stepper3 d-flex" >
                      <img src="/assets/images/2.png"  className="stepper-img" />
                      <p className="stepper-content">We then assort the skins and hides that pass our quality assurance, based on the requirements that we have</p>
                  </div>
                  <div className="stepper stepper4 d-flex" >
                       <p className="stepper-content">After the assorting is done, we tan the skins and hides with traditional and well standardised process</p>
                      <img src="/assets/images/3.png"  className="stepper-img" />
                  </div>
                  <div className="stepper stepper5 d-flex" >
                      <img src="/assets/images/4.png"  className="stepper-img" />
                     <p className="stepper-content">Finally, we package the skins and hides to meet international shipping standards and ship it to our consumers : globally acclaimed fashion brands, health care, and automotive industry</p>
                  </div>
                  <div className="stepper stepper6 c"></div>
                </div>
          </div>
       </>
    )
}

export default Stepper
