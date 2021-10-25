import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./ImageSlider2.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow Arrow-bg" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow Arrow-bg" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider2 = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages2 = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slidetype"}
          key={image.id}>
          <div className="image-head-div"><div className="image-heading">{image.head}</div></div>
          <div className="slideWrapper">
            {image.code ? image.code : <img src={image.src} alt={image.alt}  className="carousel-img" />}
          </div>
          <div className="image-content">{image.content}</div>
          <div className="image-details">{image.details}<br /><br />
          <span className="image-uses">{image.uses}</span></div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages2}</Slider>;
};

export default ImageSlider2;
