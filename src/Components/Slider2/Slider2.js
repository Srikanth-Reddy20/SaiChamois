import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Slider2.css";
import upperimage from "../../assets/images/logo-trans.png";

function Slider2() {
  return (
    <>
      <Container className="slider2-container p-0" fluid>
        <div className="d-md-flex">
          <Col className="slider2-image">
            <div className="bx">
              <div className="bx1">
                EXQUISITE NATURAL NEWZEALAND FINISHED LEATHERS WITH PREMIUM INTERNATIONAL QUALITY
                <div className="triangle-bottomright"></div>
              </div>
              <div className="bx2">
                <img
                  src={upperimage}
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
  );
}

export default Slider2;
