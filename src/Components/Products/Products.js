import React from 'react'
import { Container, Row, Col, Button, Carousel} from 'react-bootstrap';
import back from './Design.jpg';
import './Products.css';


function Products() {
    return (

        <>
        
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
