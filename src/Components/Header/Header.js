import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button} from 'react-bootstrap';
import './Header.css';
import { FaGripLines } from "react-icons/fa";
import { FcCloseUpMode, FcBiomass } from "react-icons/fc";


function header() {
    return (
        <>
<Container className="top-bar">
  <Row>
    <Col className="header-col"><FcCloseUpMode  className="icon"/></Col>
    <Col className="header-col"><FaGripLines  className="icon"/> </Col>
    <Col className="header-col"><FcBiomass  className="icon"/></Col>
  </Row>
</Container>
        </>
    )
}

export default header
