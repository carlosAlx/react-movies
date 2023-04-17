import React from "react";
import { Header } from "../../components/header/Header";
import { Home } from "../../components/home/Home";
import { Upccoming } from "../../components/upcomming/Upccoming";
import { Latest } from "../../components/Latest/Latest";
import { Recomended } from "../../components/recommended/Recomended";
import { Trend } from "../../components/trending/Trend";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Upccoming />
      <Latest />
      <Trend />
      <Recomended />
      <Footer />
    </>
  );
};
