import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import './Header2.css';
import { FaEquals } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";

function Header2() {
    return (
        <>
<Container className="top-bar">
  <Row>
    <Col className="header-col"><FcCloseUpMode  className="icon"/></Col>
    <Col className="header-col"><FaEquals  className="icon"/> </Col>
  </Row>
</Container>
        </>
    )
}

export default Header2
