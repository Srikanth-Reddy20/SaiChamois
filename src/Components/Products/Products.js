import React from 'react'
import { Container, Row, Col, Button, Carousel} from 'react-bootstrap';
import back from './Design.jpg';
// import $ from 'js/jquery.hislide.js';
import './Products.css'

function Products() {
    return (

        <>

<div className="data-slide" id="products">
            <Carousel className="products-slide">
  <Carousel.Item>


      <h3 className="products-heading">Deer Wallets</h3>
      <p className="products-content">Dry your hand off in the durable 430gsm 
          softness of the 100% sheep chaimois, A superb everyday 
          towel good quality at great value.</p>

  </Carousel.Item>
  <Carousel.Item>



    <h3 className="products-heading">Deer Wallets</h3>
      <p className="products-content">Dry your hand off in the durable 430gsm 
          softness of the 100% sheep chaimois, A superb everyday 
          towel good quality at great value.</p>

  </Carousel.Item>
  <Carousel.Item>


   
      <h3 className="products-heading">Deer Wallets</h3>
      <p className="products-content">Dry your hand off in the durable 430gsm 
          softness of the 100% sheep chaimois, A superb everyday 
          towel good quality at great value.</p>
 
  </Carousel.Item>
</Carousel>
</div>
        </>
    )
}

export default Products
