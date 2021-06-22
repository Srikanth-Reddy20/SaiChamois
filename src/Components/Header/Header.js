import React,{useState} from 'react'
import {Container, Row,Col } from 'react-bootstrap';
import './Header.css';
import { FaGripLines } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

function Header() {
  
  const [menuShow, setMenuShow] = useState(false);
  console.log(menuShow)
    return (
        <>
        <Container className="top-bar">
          <Row>
            <Col className="header-col"><FcCloseUpMode  className="icon"/></Col>
            <Col className="header-col"><FaGripLines  className="icon" onClick={()=>setMenuShow(true)} /> </Col>
            <Col className="header-col"><FcBiomass  className="icon"/></Col>
          </Row>
        </Container>
        {
          menuShow && 
          <div className="top-bars"  onClick={()=>setMenuShow(false)}>
            <Row>
                <Col className="header-col"><FcCloseUpMode  className="icon"/></Col>
                <Col className="header-col"><FaTimes  className="icon"/> </Col>
                <Col className="header-col"><FcBiomass  className="icon"/></Col>
            </Row>
            <Row>
                <Col className="menu-col1 col-4"></Col>
                <Col className="menu-col2 col-8"> </Col>
            </Row>
          </div>
        }
        </>
    )
}
export default Header

