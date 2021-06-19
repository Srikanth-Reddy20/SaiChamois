import React,{useState} from 'react'
import './Stepper.css';
import stepperimage from './points.png';

function Stepper() {
const [showPathContent,setShowPathContent]=useState('');

    return (
        <>
          <div className="timeline-back">
              <div className="main align-content-center align-items-center">
                  <div className="stepper c">
                  </div>
                  <div className="stepper d-flex" onMouseLeave={()=>setShowPathContent('')} onClick={()=>setShowPathContent('1')} onMouseEnter={()=>setShowPathContent('1')}>
                      { showPathContent === '1' ?  <><p className="stepper-content">We combine time honoured tanning techniques with the most 
                      modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" /></> :null}
                  </div>
                  <div className="stepper d-flex" onMouseLeave={()=>setShowPathContent('')} onClick={()=>setShowPathContent('2')} onMouseEnter={()=>setShowPathContent('2')}>
                      { showPathContent === '2' ?  <><p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" /></> :null}
                  </div>
                  <div className="stepper d-flex" onMouseLeave={()=>setShowPathContent('')} onClick={()=>setShowPathContent('3')} onMouseEnter={()=>setShowPathContent('3')}>
                      { showPathContent === '3' ?  <><p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" /></> :null}
                  </div>
                  <div className="stepper d-flex" onMouseLeave={()=>setShowPathContent('')} onClick={()=>setShowPathContent('4')} onMouseEnter={()=>setShowPathContent('4')}>
                      { showPathContent === '4' ?  <><p className="stepper-content">We combine time honoured tanning techniques with the most 
                  modern production processes to deliver the finest quality Natural Chamois.</p>
                      <img src={stepperimage} className="stepper-img" /></> :null}
                  </div>
                  <div className="stepper c"></div>
                </div>
          </div>
       </>
    )
}

export default Stepper
