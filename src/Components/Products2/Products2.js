import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "./Products2.css";

function Products2() {
    return (
        <>
           <div>
            <div className="products-head">
                OUR PRODUCTS
            </div>
        </div>
      <div className="data-slide2" id="products">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <Carousel className="products-slide2">
          <Carousel.Item>
            <h3 className="products-heading2">Anti-Virus Hand Towel</h3>
            <p className="products-content2">
              Dry your hand off in the durable 430gsm softness of the 100% sheep
              chaimois, A superb everyday towel with good quality and anti-viral properties.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="products-heading2">Anti-Virus Gloves</h3>
            <p className="products-content2">
              Our anti-virus gloves made with chamois provide a safe and secure way to protect your hands with quality ingredients.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="products-heading2">Healthcare Footwear</h3>
            <p className="products-content2">
              We provide footwear for healthcare industry with sterile properties and comfortable fit.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
        </>
    )
}

export default Products2
