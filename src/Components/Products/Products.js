import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import back from "./Design.jpg";
// import $ from 'js/jquery.hislide.js';
import "./Products.css";

function Products() {
  return (
    <>
          <div>
            <div className="products-head">
            OUR PRODUCTS
            </div>
        </div>
      <div className="data-slide" id="products">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <Carousel className="products-slide1">
        <Carousel.Item>
            <h3 className="products-heading2">Deer Wallets</h3>
            <p className="products-content2">
              Sturdy, thin and comfortable wallets made from premium deer leather
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="products-heading2">Deer Suede Shoes</h3>
            <p className="products-content2">
              Shoes made from deer suedes that match international premium standards
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="products-heading2">Leather Gloves</h3>
            <p className="products-content2">
              Leather gloves for multiple purposes with top notch durability and quality
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Products;
