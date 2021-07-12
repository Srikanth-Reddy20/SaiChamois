import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import back from "./Design.jpg";
// import $ from 'js/jquery.hislide.js';
import "./Products.css";

function Products() {
  return (
    <>
          <div className="products-marquee">
            <marquee className="products-head">
                &bull; PRODUCTS &bull; PRODUCTS &bull; PRODUCTS 
                &bull; PRODUCTS
                &bull; PRODUCTS &bull; PRODUCTS &bull; PRODUCTS &bull; PRODUCTS
                &bull; PRODUCTS &bull; PRODUCTS
            </marquee>
        </div>
      <div className="data-slide" id="products">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <Carousel className="products-slide1">
          <Carousel.Item>
            <h3 className="products-heading1">Deer Wallets</h3>
            <p className="products-content1">
              Dry your hand off in the durable 430gsm softness of the 100% sheep
              chaimois, A superb everyday towel good quality at great value.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="products-heading1">Deer Wallets</h3>
            <p className="products-content1">
              Dry your hand off in the durable 430gsm softness of the 100% sheep
              chaimois, A superb everyday towel good quality at great value.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="products-heading1">Deer Wallets</h3>
            <p className="products-content1">
              Dry your hand off in the durable 430gsm softness of the 100% sheep
              chaimois, A superb everyday towel good quality at great value.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Products;
