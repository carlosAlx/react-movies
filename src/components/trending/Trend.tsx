import { trending } from "../../data/data";
import { SlideCard } from "../home/SlideCard";
import "./trend.css";

export const Trend = () => {
  return (
    <section className="trend_section">
      <SlideCard data={trending} />
    </section>
  );
};
