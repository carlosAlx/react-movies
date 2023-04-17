import React, { useState } from "react";
import { homeData } from "../../data/data";
import { SlideCard } from "./SlideCard";

export const Home = () => {
  return (
    <section className="home_section">
      <SlideCard data={homeData}/>
    </section>
  );
};
