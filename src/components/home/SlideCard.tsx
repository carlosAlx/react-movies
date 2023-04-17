import { MouseEventHandler } from "react";
import { Card } from "./Card";
import { homeData } from "../../data/data";
import Slider, { Settings } from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface customArrow {
  onClick?: MouseEventHandler;
}
const NextArrow = ({ onClick }: customArrow) => {
  return (
    <button  onClick={onClick}>
      <i className="control_right">
        <SlArrowRight className="arrow" />
      </i>
    </button>
  );
};

const PrevArrow = ({ onClick }: customArrow) => {
  return (
    <button onClick={onClick}>
      <i className="control_left">
        <SlArrowLeft className="arrow" />
      </i>
    </button>
  );
};

export const SlideCard = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
