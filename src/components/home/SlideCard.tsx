import { MouseEventHandler } from "react";
import { Card } from "./Card";
import { homeData } from "../../data/data";
import Slider, { Settings } from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { mediaDetailsType } from "../../data/type";
import { NextArrow, PrevArrow } from "../slide/CustomArrow";



export const SlideCard = ({ data }: { data: mediaDetailsType[] }) => {
  const settings: Settings = {
    dots: false,
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
    <Slider {...settings}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Slider>
  );
};
