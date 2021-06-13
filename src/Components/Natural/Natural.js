import React from 'react'
import './Natural.css';
import { Container, Row, Col, Button} from 'react-bootstrap';

function Natural() {
    return (
        <>

        <Container className="natural-container" fluid>
      
            <div className="natural-row">
            <p className="natural-para">We combine time honoured tanning techniques with the most modern production
                processes to deliver the finest quality&nbsp; 
                <span className="back-green">Natural Chamois.</span>
            </p>
            </div>
      
        </Container>
        </>
    )
}

export default Natural
