"use client";
import React from "react";
import Slider from "react-slick";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className="partners">
        <h2>
          Reputed <span>Partners</span>
        </h2>
        <div>
          <h2>Auto Play</h2>
          <Slider {...settings}>
            <div className="item">
              <div className="logo-container">1</div>
            </div>
            <div className="item">
              <div className="logo-container">2</div>
            </div>
            <div className="item">
              <div className="logo-container">3</div>
            </div>
            <div className="item">
              <div className="logo-container">4</div>
            </div>
            <div className="item">
              <div className="logo-container">5</div>
            </div>
            <div className="item">
              <div className="logo-container">6</div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Partners;
