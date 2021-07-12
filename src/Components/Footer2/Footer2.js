import React from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import './Footer2.css';
import { FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer2() {
    return (
        <>
            <Container className="" fluid>
            <div className="" >
              <Col className="">
              <div className="d-flex justify-content-center footer2-back col-7">
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
              </Col>
              <Col className="">
              <div className="d-flex align-content-center align-items-center 
                footer-text"><FaMapMarkerAlt  className="contact-icon"/>
                  <p>2, Raghavan street,<br /> Siva shankaran Nagar,<br />
                    Nagakeni, Chrompet,<br /> chennai-600024. INDIA.
                  </p>
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text"><FaPhoneAlt  className="contact-icon"/>
                  <p>0091-44-22381480 <br />
                 0091-9381010953 </p>
                 
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text"><FaTelegramPlane  className="contact-icon"/>
                  <p>rajha.saichamois@gmail.com
                  </p>
                </div>
                <div>
                  <p>&#169;2021. saichamois. All Rights Reserved
                  </p>
                 </div>
                    
              </Col>
            </div>
          </Container>
        </>
    )
}

export default Footer2