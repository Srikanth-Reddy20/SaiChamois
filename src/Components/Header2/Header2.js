import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header2.css";
import { FaGripLines } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import menuimg from "../../assets/images/naked-sheep.webp";
import { Link } from "react-router-dom";
import logo from "../../assets/images/saichamois-logo.png";
import goldrated from "../../assets/images/saichamois-goldrated.jpeg";
import menuimg1 from "../../assets/images/bavarian-deer.webp";
import menuimg2 from "../../assets/images/traditional-chamois.jpeg";
import menuimg3 from "../../assets/images/naked-goat.webp";
import menuimg4 from "../../assets/images/contact-menu.jpeg";
import menuimg5 from "../../assets/images/saichamois-footer.jpeg";

function Header2() {
  const footerLink = () => {
    document.getElementById("contact").scrollIntoView();
  };
  const timelineLink = () => {
    document.getElementById("timeline2").scrollIntoView();
  };
  const leathertypesLink = () => {
    document.getElementById("leathertypes").scrollIntoView();
  };
  const productsLink = () => {
    document.getElementById("products").scrollIntoView();
  };
  const menuImage = useRef(null)

  const showMenuImage = (imageSrc) => {
    menuImage.current.src=imageSrc;
  }

  const [menuShow, setMenuShow] = useState(false);
  const navClass = menuShow ? "top-bar-fixed" : "top-bar";
    return (
        <>
 <Container className={navClass} fluid>
        <Row className="header-row">
          <Col className="header-col">
          <img src={logo} className="icon1" />
          </Col>
          <Col className="header-col">
            {!menuShow ? (
              <FaGripLines style={{cursor:"pointer"}} className="icon" onClick={() => setMenuShow(true)} />
            ) : (
              <FaTimes style={{cursor:"pointer"}} className="icon" onClick={() => setMenuShow(false)} />
            )}{" "}
          </Col>
          <Col className="header-col">
          <img src={goldrated} className="icon" />
          </Col>
        </Row>
      </Container>
      {menuShow && (
        <div className="top-bars" onClick={() => setMenuShow(false)}>
          <div className="menu-row d-md-flex">
            <div className="menu-col1">
              <div className="menu-label">
                <Link onMouseOver={e => {showMenuImage(logo)}} to="/"><h4 className="subtitle1 fancy">
                  <span>HOME</span>
                </h4></Link>
                <br />
                <Link onMouseOver={e => {showMenuImage(menuimg4)}} to="/About"  className="leather"><h4 className="subtitle4 fancy">
                  <span>ABOUT US</span>
                </h4></Link>
                <br />
                <h4 onMouseOver={e => {showMenuImage(menuimg2)}} style={{cursor:"pointer"}} onClick={timelineLink} className="subtitle2 fancy">
                  <span>TIMELINE</span>
                </h4>
                <br />
                <h4 onMouseOver={e => {showMenuImage(menuimg)}} style={{cursor:"pointer"}} onClick={leathertypesLink} className="subtitle2 fancy">
                  <span>LEATHER TYPES</span>
                </h4>
                <br />
                <h4 onMouseOver={e => {showMenuImage(menuimg3)}} style={{cursor:"pointer"}} onClick={productsLink} className="subtitle4 fancy">
                  <span>PRODUCTS</span>
                </h4>
                
                <br />
                <h4 onMouseOver={e => {showMenuImage(menuimg5)}} style={{cursor:"pointer"}} onClick={footerLink} className="subtitle5 fancy">
                  <span>CONTACT US</span>
                </h4>
                <br />
              </div>
            </div>
            <div className="menu-col2">
              <div className="menu-imagediv">
                <div className="header-leftsquare"></div>
                <img ref={menuImage} src={menuimg} className="menu-image" />
                <div className="header-rightsquare"></div>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

export default Header2
