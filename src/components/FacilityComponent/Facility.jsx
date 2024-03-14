import React from "react";
import "./Facility.css";
import { FaParking, FaWifi } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";

const Facility = () => {
  return (
    <div className="facility-div">
      <p className="section-title">Facilities We Offer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        dignissimos numquam, nemo voluptates inventore, praesentium{" "}
      </p>
      <div className="facilities">
        <div>
          <FaWifi size={60} color="black" />
          <p>Free Wifi Access</p>
        </div>
        <div>
          <IoFastFood size={60} color="black" />
          <p>Best Restaurants & Cafe</p>
        </div>
        <div>
          <TbAirConditioning size={60} color="black" />
          <p>Air Conditioning</p>
        </div>
        <div>
          <FaParking size={60} color="black" />
          <p>Valet Parking Facility</p>
        </div>
      </div>
    </div>
  );
};

export default Facility;
