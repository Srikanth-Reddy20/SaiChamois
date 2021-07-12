import React from 'react'
import './Slider3.css';
import { Container, Row, Col, Button} from 'react-bootstrap';
import upperimage from './points.png';
import { Link } from "react-router-dom";

function Slider3() {
    return (
        <>
            <Container className="slider-container p-0" fluid>
            <div className="d-md-flex" >
              <Col className="bg1 slider-row d-flex justify-content-center 
              align-content-center align-items-center">
                <div>
                  <Link to="/Chamois">
                    <img src={upperimage} alt="upper-image" className="slide-icon1" />
                    </Link>
                </div>
                    
              </Col>
              <Col className="bg2 slider-row d-flex justify-content-center 
              align-content-center align-items-center">
              <div>
              <Link to="/Leather">
                  <img src={upperimage} alt="upper-image" className="slide-icon2" />
                  </Link>
              </div> 
              </Col>
            </div>
          </Container>
        </>
    )
}

export default Slider3
