import React from "react";
import { mediaDetailsType } from "../../data/type";
import { Card } from "./Card";
import { homeData } from "../../data/data";

export const SlideCard = () => {
  return (
    <div className="slide_container">
      {homeData.map((item) => (
        <Card key={item.id} data={item}/>
      ))}
    </div>
  );
};
