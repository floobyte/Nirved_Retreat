import React from "react";
import "./Card.css";

const Card = ({ title, items, description }) => {
  return (
    <section className="card-section">
      <p className="section-title">{title}</p>
      <p className="description">{description}</p>
      <div className="wrapper">
        {items.map((item, index) => (
          <div key={index} className="image">
            <img src={item.imageUrl} alt={item.title} />
            <div className="content">
              <h3>{item.title}</h3>
            </div>

            {/* Add more content or customize as needed */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
