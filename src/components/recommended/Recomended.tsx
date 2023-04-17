import React from "react";
import { Slide } from "../slide/Slide";
import { recommended } from "../../data/data";

export const Recomended = () => {
  return (
    <section className="container">
      <div className="header_section">
        <h2>Recommended Movies</h2>
        <button>View All</button>
      </div>
      <Slide data={recommended}/>
    </section>
  );
};
