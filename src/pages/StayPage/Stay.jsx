import React from "react";
import "./Stay.css";
import Slideshow from "../../components/Slideshow/Slideshow";
import Card from "../../components/CardComponent/Card";
import { rooms } from "../../data";
import Facility from "../../components/FacilityComponent/Facility";

const Stay = () => {
  return (
    <>
      <Slideshow />
      <Card
        title={"Our Accomodations"}
        items={rooms}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsa explicabo, iure fugit at ipsum! Impedit"
        }
      />
      <Facility />
    </>
  );
};

export default Stay;
