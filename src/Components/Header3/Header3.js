import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header3.css";
import { FaGripLines } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import menuimg from "./Leather-2.jpg";
import { Link } from "react-router-dom";

function Header3() {
  const footerLink = () => {
    document.getElementById("contact").scrollIntoView();
  };
  const timelineLink = () => {
    document.getElementById("timeline2").scrollIntoView();
  };
  const chamoistypesLink = () => {
    document.getElementById("chamoistypes").scrollIntoView();
  };
  const productsLink = () => {
    document.getElementById("products2").scrollIntoView();
  };

  const [menuShow, setMenuShow] = useState(false);
  const navClass = menuShow ? "top-bar-fixed" : "top-bar";
    return (
        <>
 <Container className={navClass} fluid>
        <Row className="header-row">
          <Col className="header-col">
            <FcCloseUpMode className="icon" />
          </Col>
          <Col className="header-col">
            {!menuShow ? (
              <FaGripLines style={{cursor:"pointer"}} className="icon" onClick={() => setMenuShow(true)} />
            ) : (
              <FaTimes style={{cursor:"pointer"}} className="icon" onClick={() => setMenuShow(false)} />
            )}{" "}
          </Col>
          <Col className="header-col">
            <FcBiomass className="icon" />
          </Col>
        </Row>
      </Container>
      {menuShow && (
        <div className="top-bars" onClick={() => setMenuShow(false)}>
          <Row className="menu-row">
            <Col className="menu-col1 col-4">
              <div className="menu-label">
                <Link to="/"><h4 className="subtitle1 fancy">
                  <span>HOME</span>
                </h4></Link>
                <br />
                <h4 style={{cursor:"pointer"}} onClick={timelineLink} className="subtitle2 fancy">
                  <span>TIMELINE</span>
                </h4>
                <br />
                <h4 style={{cursor:"pointer"}} onClick={chamoistypesLink} className="subtitle3 fancy">
                  <span>CHAMOIS TYPES</span>
                </h4>
                <br />
                <h4 style={{cursor:"pointer"}} onClick={productsLink} className="subtitle4 fancy">
                  <span>PRODUCTS</span>
                </h4>
                <br />
                <h4 style={{cursor:"pointer"}} onClick={footerLink} className="subtitle5 fancy">
                  <span>CONTACT US</span>
                </h4>
                <br />
              </div>
            </Col>
            <Col className="menu-col2 col-8">
              <div className="menu-imagediv">
                <div className="header-leftsquare"></div>
                <img src={menuimg} className="menu-image" />
                <div className="header-rightsquare"></div>
              </div>
            </Col>
          </Row>
        </div>
      )}
        </>
    )
}

export default Header3
