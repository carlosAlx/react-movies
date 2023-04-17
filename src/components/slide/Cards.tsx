import { mediaCardType } from "../../data/type";
import "./card.css";

export const Cards = ({ data }: { data: mediaCardType }) => {
  return (
    <div className="box_card">
      <div className="img">
        <img src={data.cover} alt="" />
      </div>
      <div className="details_content">
        <h3>{data.name}</h3>
        <p>{data.time}</p>
        <button className="btn">Play Now</button>
      </div>
    </div>
  );
};
