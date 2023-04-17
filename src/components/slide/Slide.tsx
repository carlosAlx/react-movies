import React from "react";
import { upcome } from "../../data/data";
import Slider, { Settings } from "react-slick";
import { Cards } from "./Cards";
import { mediaCardType } from "../../data/type";
import { NextArrow, PrevArrow } from "./CustomArrow";

export const Slide = ({data}:{data:mediaCardType[]}) => {
    const settings:Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <Cards key={item.id} data={item} />
      ))}
    </Slider>
  );
};
