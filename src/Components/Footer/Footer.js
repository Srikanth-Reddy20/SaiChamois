import React from 'react'
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import Footer2 from "../Footer2/Footer2"
import './Footer.css';
import '../Footer2/Footer2.css'
import { FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function footer() {

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('service_g4cxtms', 'template_9fbzfb8', e.target, 'user_ZzaKmQDl81SHC8QRn0GWf')
    .then((result) => {
        alert('Your message has been sent.');
    }, (error) => {
        alert(`Error: ${error.message}`);
    });
    e.target.reset();
  }
    return (
        <>
      {
        window.screen.width > 1000 && <div>
           <div className="footer-container" id="contact" fluid>
            <div className="d-flex justify-content-center contact-section">
            
                <div className="d-flex justify-content-end col-5 address"> 
                <div>  
                <div className="d-flex align-content-center align-items-center 
                footer-text"><FaMapMarkerAlt  className="contact-icon"/>
                  <p>2, Raghavan street,<br /> Siva shankaran Nagar,<br />
                    Nagakeni, Chrompet,<br /> chennai-600024. INDIA.
                  </p>
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text"><FaPhoneAlt  className="contact-icon"/>
                  <p><a href="tel:0091-44-22381480" className="contactno">0091-44-22381480 </a><br />
                  <a href="tel:0091-9381010953" className="contactno">0091-9381010953</a> </p>
                 
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text"><FaTelegramPlane  className="contact-icon"/>
                  <p><a href="mailto:rajha.saichamois@gmail.com" className="email">rajha.saichamois@gmail.com</a>
                  </p>
                </div>
                <div>
                  <p className="rights">&#169;2021. saichamois. All Rights Reserved
                  </p>
                 </div>
              </div>  
            </div>
                <div className="d-flex justify-content-center footer-back col-7">
                  <div className="color-layer">
                  </div>
                  <Form className="form" onSubmit={e => {sendEmail(e)}}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Full Name" className="input-field" name="name" />
                      <Form.Control type="email" placeholder="Email" className="input-field" name="email" />
                      <Form.Control type="number" placeholder="Phone" className="input-field" name="phone" />
                      <Form.Control as="textarea" rows={3} placeholder="Message" className="input-field" name="message" />
                    </Form.Group>
                    <Button variant="dark" className="form-but" type="submit" value="Send Message">Submit</Button>
                  </Form>
                </div>
            </div>
          </div>          
        </div>
      }
      {
        window.screen.width < 1000 && <Footer2 />
      }
         
        </>
    )
}

export default footer
