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

  emailjs.sendForm('gmail', 'template_9fbzfb8', e.target, 'user_ZzaKmQDl81SHC8QRn0GWf')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
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
                  <p><Link to="tel:0091-44-22381480" className="contactno">0091-44-22381480 </Link><br />
                  <Link to="tel:0091-9381010953" className="contactno">0091-9381010953</Link> </p>
                 
                </div>
                <div className="d-flex align-content-center align-items-center 
                footer-text"><FaTelegramPlane  className="contact-icon"/>
                  <p><Link to="mailto:rajha.saichamois@gmail.com" className="email">rajha.saichamois@gmail.com</Link>
                  </p>
                </div>
                <div>
                  <p className="rights">&#169;2021. saichamois. All Rights Reserved
                  </p>
                 </div>
              </div>  
            </div>
                  <div className="d-flex justify-content-center footer-back col-7">
                  <Form className="form" onSubmit={sendEmail}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Full Name" className="input-field" name="name" />
                      <Form.Control type="email" placeholder="Email" className="input-field" name="email" />
                      <Form.Control type="number" placeholder="Phone" className="input-field" name="mobile" />
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
