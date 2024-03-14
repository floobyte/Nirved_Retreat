import React from "react";
import "./Dining.css";
import Slideshow from "../../components/Slideshow/Slideshow";
import { dinings } from "../../data";
import Card from "../../components/CardComponent/Card";

const Dining = () => {
  return (
    <>
      <Slideshow />
      <section className="description-section">
        <div className="description">
          <div className="overlay">
            <div className="design"></div>
            <div className="img-div">
              <img src="desc.jpg" alt="" />
            </div>
          </div>
          <div className="text">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              provident quibusdam vero saepe accusantium mollitia natus
              necessitatibus, quam, cum aliquid at quaerat praesentium culpa
              velit iste dignissimos et labore. Voluptatum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Fuga provident quibusdam
              vero saepe accusantium mollitia natus necessitatibus, quam, cum
              aliquid at quaerat praesentium culpa velit iste dignissimos et
              labore. Voluptatum.
            </p>
          </div>
        </div>
      </section>
      <Card
        title={"Our Restaurants & Cafes"}
        items={dinings}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsa explicabo, iure fugit at ipsum! Impedit"
        }
      />
    </>
  );
};

export default Dining;
