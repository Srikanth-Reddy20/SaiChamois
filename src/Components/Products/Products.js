import React from 'react'
import { Container, Row, Col, Button, Carousel} from 'react-bootstrap';
import back from './Design.jpg';
import './Products.css';
// import $ from 'js/jquery.hislide.js';

function Products() {
    return (
        // $('.slide').hiSlide();
        <>
        {/* <div className="body">
            <div className="slide hi-slide">
                <div className="hi-prev"></div>
                <div className="hi-next"></div>
                 <ListGroup as="ul" className="ul">
                    <ListGroup.Item as="li" active className="li">
                        <img src={back} alt="First slide"/>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="li">
                        <img src={back} alt="First slide"/>
                        </ListGroup.Item>
                    <ListGroup.Item as="li" disabled className="li">
                    <img src={back} alt="First slide"/>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="li">
                    <img src={back} alt="First slide"/>
                        </ListGroup.Item>
                    </ListGroup>
            </div>
            </div> */}
<div className="data-slide">
            <Carousel>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={back}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Deer Wallets</h3>
      <p>Dry your hand off in the durable 430gsm 
          softness of the 100% sheep chaimois, A superb everyday 
          towel good quality at great value.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={back}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Deer Wallets</h3>
      <p>Dry your hand off in the durable 430gsm 
          softness of the 100% sheep chaimois, A superb everyday 
          towel good quality at great value.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={back}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Deer Wallets</h3>
      <p>Dry your hand off in the durable 430gsm 
          softness of the 100% sheep chaimois, A superb everyday 
          towel good quality at great value.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </>
    )
}

export default Products
