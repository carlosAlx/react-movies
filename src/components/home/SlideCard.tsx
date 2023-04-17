import React from "react";
import { mediaDetailsType } from "../../data/type";
import { Card } from "./Card";
import { homeData } from "../../data/data";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const NextArrow = () => {
  return (
    <div>
      <button>
        <i className="control_right">
          <AiOutlineArrowRight className="arrow" />
        </i>
      </button>
    </div>
  );
};

const PrevArrow = (onClick: MouseEvent) => {
  //  const { onClick } = onClick;
  return (
    <div>
      <button>
        <i className="control_left">
          <AiOutlineArrowLeft className="arrow" />
        </i>
      </button>
    </div>
  );
};

export const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    //  nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow onclick={onclick} />,
  };
  return (
    <div className="slide_container">
      <Slider {...settings}>
        {homeData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
    </div>
  );
};
