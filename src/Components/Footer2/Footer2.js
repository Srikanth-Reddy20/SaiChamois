import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import './Footer2.css';
import { FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer2() {
    return (
        <>
            <Container className="f2-container" fluid>
            <div className="f2-div" >
         
              <div className="d-flex justify-content-center footer2-back col-12">
                <div className="contact-vertical-text">CONTACT</div>
                <div className="mobilecolor-layer">
                  <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Full Name" className="input-field"/>
                      <Form.Control type="email" placeholder="Email" className="input-field"/>
                      <Form.Control type="number" placeholder="Phone" className="input-field"/>
                      <Form.Control as="textarea" rows={3} placeholder="Message" className="input-field"/>
                    </Form.Group>
                    <Button variant="dark" className="form-but">Submit</Button>
                  </Form>
                  </div>
                </div>
            
              <div className="col-12 address2">
              <div className="d-flex align-content-center align-items-center 
                footer-text2"><FaMapMarkerAlt  className="contact-icon"/>
                  <p>2, Raghavan street,<br /> Siva shankaran Nagar,<br />
                    Nagakeni, Chrompet,<br /> chennai-600024. INDIA.
                  </p>
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text2"><FaPhoneAlt  className="contact-icon"/>
                   <p><a href="tel:0091-44-22381480" className="contactno">0091-44-22381480 </a><br />
                  <a href="tel:0091-9381010953" className="contactno">0091-9381010953</a> </p>
                 
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text2"><FaTelegramPlane  className="contact-icon"/>
                   <p><a href="mailto:rajha.saichamois@gmail.com" className="email">rajha.saichamois@gmail.com</a>
                  </p>
                </div>
                <div className="copyright-text">
                  <p>&#169;2021. saichamois. All Rights Reserved
                  </p>
                 </div>
                    
              </div>
            </div>
          </Container>
        </>
    )
}

export default Footer2
