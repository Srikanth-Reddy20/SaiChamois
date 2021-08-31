import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import { FaGripLines } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/images/saichamois-logo.png";
import goldrated from "../../assets/images/saichamois-goldrated.jpeg";
import menuimg from "../../assets/images/naked-sheep.webp";
import menuimg1 from "../../assets/images/antiviral-chamois.jpeg";
import menuimg2 from "../../assets/images/traditional-chamois.jpeg";
import menuimg3 from "../../assets/images/naked-goat.webp";
import menuimg4 from "../../assets/images/bavarian-deer.webp";
import menuimg5 from "../../assets/images/saichamois-footer.jpeg";
import { Link } from "react-router-dom";

function Header() {
  const menuImage = useRef(null)
  const footerLink = () => {
    document.getElementById("contact").scrollIntoView();
  };

  const showMenuImage = (imageSrc) => {
    menuImage.current.src=imageSrc;
  }

  const [menuShow, setMenuShow] = useState(false);
  const navClass = menuShow ? "top-bar-fixed" : "top-bar";
  return (
    <>
      <Container className={navClass} fluid>
        <Row className="header-row d-flex justify-content-center 
              align-content-center align-items-center">
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
                <Link onMouseOver={e => {showMenuImage(menuimg2)}} to="/" className="home"><h4 className="subtitle1 fancy">
                  <span>HOME</span>
                </h4></Link>
                <br />
                <Link onMouseOver={e => {showMenuImage(menuimg3)}} to="/Chamois" className="chamois"><h4 className="subtitle3 fancy">
                  <span>CHAMOIS</span>
                </h4></Link>
                <br />
                <Link onMouseOver={e => {showMenuImage(menuimg4)}} to="/Leather"  className="leather"><h4 className="subtitle4 fancy">
                  <span>LEATHER</span>
                </h4></Link>
                <br />
                <Link onMouseOver={e => {showMenuImage(menuimg5)}} to="/About"  className="leather"><h4 className="subtitle4 fancy">
                  <span>ABOUT US</span>
                </h4></Link>
                <br />
                <h4 onMouseOver={e => {showMenuImage(menuimg1)}} style={{cursor:"pointer"}} onClick={footerLink} className="subtitle5 fancy contact">
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
  );
}
export default Header;
