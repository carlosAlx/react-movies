import React from "react";
import { Slide } from "../slide/Slide";
import { upcome } from "../../data/data";

export const Upccoming = () => {
  return (
    <section className="container section">
      <div className="header_section">
        <h2>Upcomming Movies</h2> <button>View All</button>
      </div>
      <Slide data={upcome}/>
    </section>
  );
};
