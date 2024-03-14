import React from "react";
import "./Home.css";
import Slideshow from "../../components/Slideshow/Slideshow";
import { Link } from "react-router-dom";
import Card from "../../components/CardComponent/Card";
import { dinings, rooms } from "../../data";
import Facility from "../../components/FacilityComponent/Facility";

const Home = () => {
  return (
    <div>
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
            <h1>NIRVED RETREAT</h1>
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
            <Link to={"/about"}>Read More</Link>
          </div>
        </div>
      </section>

      <Card
        title={"Our Accomodations"}
        items={rooms}
        description={" fugit at ipsum! Impedit"}
      />
      <Card
        title={"Our Restaurants & Cafes"}
        items={dinings}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsa explicabo, iure fugit at ipsum! Impedit"
        }
      />
      <Facility />
    </div>
  );
};

export default Home;
