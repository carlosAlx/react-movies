import React from "react";
import { mediaDetailsType } from "../../data/type";
import { AiFillStar } from "react-icons/ai";

export const Card = ({ data }: { data: mediaDetailsType }) => {
  return (
    <div className="box">
      <div className="cover_image">
        <img src={data.cover} alt="" />
      </div>
      <div className="content flex">
        <h1>{data.cover}</h1>
        <div className="rating flex">
          <i>
            <AiFillStar />
          </i>
          <i>
            <AiFillStar />
          </i>
          <i>
            <AiFillStar />
          </i>
          <i>
            <AiFillStar />
          </i>
          <i>
            <AiFillStar />
          </i>
        </div>
        <label>{data.rating}</label>
        <span>GP</span>
        <label>{data.time}</label>
      </div>
      <p>{data.desc}</p>
      <div className="cast">
        <h4>
          <span>Starring</span>
          {data.starring}
        </h4>
        <h4>
          <span>Genres</span>
          {data.genres}
        </h4>
        <h4>
          <span>Tags</span>
          {data.tags}
        </h4>
      </div>
      <button className="btn">PLAY NOW</button>
    </div>
  );
};
