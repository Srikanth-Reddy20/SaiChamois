import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Slider3.css";
import Chaimage from '../../assets/images/Cha2.svg';

function Slider3() {
    return (
        <>
            <Container className="slider2-container p-0" fluid>
        <div className="d-md-flex">
          <Col className="slider3-image">
            <div className="landing-heading">Speciality <br /><span>Chamois</span></div>
            <div className="bx">
              <div className="bx1">
                PREMIUM CHAMOIS PRODUCED AND PROCESSED FROM NEWZEALAND SKINS AND HIDES
                <img
                  src={Chaimage}
                  alt="upper-image"
                  className="slide2-icon"
                />
              </div>
            </div>
            <div className="triangle-white"></div>
          </Col>
        </div>
      </Container>
        </>
    )
}

export default Slider3
