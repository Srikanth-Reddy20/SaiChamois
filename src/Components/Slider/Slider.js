import React from 'react'
import './Slider.css';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Chaimage from '../../assets/images/Cha2.svg';
import Leaimage from '../../assets/images/Lea2.svg';
import { Link } from "react-router-dom";

function Slider() {
    return (
        <>
          <Container className="slider-container p-0" fluid>
            <div className="snackbar">
              Click on any Section to Proceed
            </div>
            <div className="d-md-flex" >
              <Col className="bg1 slider-row d-flex justify-content-center 
              align-content-center align-items-center">
                <Link className="home-section" to="/Chamois">
                  <div>
                      <img src={Chaimage} alt="upper-image" className="slide-icon1" />
                  </div>
                </Link>
              </Col>
              <Col className="bg2 slider-row d-flex justify-content-center 
              align-content-center align-items-center">
                <Link to="/Leather" className="home-section">
                  <div>
                      <img src={Leaimage} alt="upper-image" className="slide-icon2" />
                  </div> 
                </Link>
              </Col>
            </div>
          </Container>
        </>
    )
}

export default Slider
