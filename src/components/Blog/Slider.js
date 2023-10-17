import React from "react";
import Slider from "react-slick";

const ProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="item">
            <div className="card"></div>
          </div>
          <div className="item">
            <div className="card"></div>
          </div>
          <div className="item">
            <div className="card"></div>
          </div>
          <div className="item">
            <div className="card"></div>
          </div>
          <div className="item">
            <div className="card"></div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ProjectSlider;
