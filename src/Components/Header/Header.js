import React,{useState} from 'react'
import {Container, Row,Col } from 'react-bootstrap';
import './Header.css';
import { FaGripLines } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import menuimg from "./Leather-2.jpg";

function Header() {
  
  const [menuShow, setMenuShow] = useState(false);
  const navClass = menuShow ? "top-bar-fixed":"top-bar";
    return (
        <>
        <Container className={navClass} fluid>
          <Row className="header-row">
            <Col className="header-col"><FcCloseUpMode  className="icon"/></Col>
            <Col className="header-col">{!menuShow ?<FaGripLines  className="icon" onClick={()=>setMenuShow(true)} />:
            <FaTimes  className="icon" onClick={()=>setMenuShow(false)}/>} </Col>
            <Col className="header-col"><FcBiomass  className="icon"/></Col>
          </Row>
        </Container>
        {
          menuShow && 
          <div className="top-bars"  onClick={()=>setMenuShow(false)}>
            <Row>
                <Col className="menu-col1 col-4">
                  <div className="menu-label">
                      <h3>HOME</h3><br />
                      <h3>ABOUT US</h3><br />
                      <h3>CHAMOIS</h3><br />
                      <h3>LEATHER</h3><br />
                      <h3>CONTACT US</h3><br />
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
        }
        </>
    )
}
export default Header

