import React from "react";
import { Slide } from "../slide/Slide";
import { latest } from "../../data/data";

export const Latest = () => {
  return (
    <section className="container">
      <div className="header_section">
        <h2>Latest Movies</h2>
        <button>View All</button>
      </div>
      <Slide  data={latest}/>
    </section>
  );
};
