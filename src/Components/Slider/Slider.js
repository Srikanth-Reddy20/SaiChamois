import React from 'react'
import './Slider.css';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Chaimage from './Cha2.svg';
import Leaimage from './Lea2.svg';
import { Link } from "react-router-dom";

function Slider() {
    return (
        <>
          <Container className="slider-container p-0" fluid>
            <div className="d-md-flex" >
              <Col className="bg1 slider-row d-flex justify-content-center 
              align-content-center align-items-center">
                <div>
                  <Link to="/Chamois">
                    <img src={Chaimage} alt="upper-image" className="slide-icon1" />
                    </Link>
                </div>
                    
              </Col>
              <Col className="bg2 slider-row d-flex justify-content-center 
              align-content-center align-items-center">
              <div>
              <Link to="/Leather">
                  <img src={Leaimage} alt="upper-image" className="slide-icon2" />
                  </Link>
              </div> 
              </Col>
            </div>
          </Container>
        </>
    )
}

export default Slider
