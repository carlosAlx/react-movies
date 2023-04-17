import React, { useState } from "react";
import { mediaDetailsType } from "../../data/type";
import { AiFillStar } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import "./home.css";
import { Link } from "react-router-dom";

export const Card = ({ data }: { data: mediaDetailsType }) => {
  const [imgPlay, setImgPlay] = useState<string>("./images/play.png");
  return (
    <div className="box">
      <div className="cover_image">
        <img src={data.cover} alt="" />
      </div>
      <div className="content flex">
        <h1>{data.name}</h1>
        <div className="details">
          <div className="rating">
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
            <span>Starring: </span>
            {data.starring}
          </h4>
          <h4>
            <span>Genres: </span>
            {data.genres}
          </h4>
          <h4>
            <span>Tags: </span>
            {data.tags}
          </h4>
        </div>
        <button className="btn">
          <i className="icon">
            <BsPlayCircle className="" />
          </i>
          PLAY NOW
        </button>
      </div>
      <div className="play_button">
        <Link to={`/watch/"${data.id}`}>
          <button
            onMouseMove={() => setImgPlay("./images/play.png")}
            onMouseOut={() => setImgPlay("./images/play-button.png")}
          >
            <img src={imgPlay} alt="" />
            WATCH TRAILER
          </button>
        </Link>
      </div>
    </div>
  );
};
