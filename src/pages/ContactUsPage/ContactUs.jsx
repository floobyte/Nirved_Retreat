import React from "react";
import "./ContactUs.css";

import Slideshow from "../../components/Slideshow/Slideshow";

const ContactUs = () => {
  return (
    <>
      <Slideshow />
      <section className="contact-info">
        <div className="left">
          <ul>
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <span>YOU CAN FIND US:</span>
            </li>
            <li>Anywhere, Omkareshwar, Near Petrol Pump MP, 450554</li>
          </ul>
          <ul>
            <li>
              <span>RECEPTION DESK CONTACT:</span>
            </li>
            <li>+910000000000</li>
            <li>+910000000000</li>
          </ul>
          <ul>
            <li>
              <span>RESERVATIONS:</span>
            </li>
            <li>reservations@nirvedresorts.com</li>
          </ul>
          <ul>
            <li>
              <span>BANQUET & CONFERENCES:</span>
            </li>
            <li>+910000000000</li>
            <li>+910000000000</li>
          </ul>
        </div>
        <div className="right">
          <form
            action="https://formsubmit.co/reservations@vanasthaliresorts.com"
            method="POST"
          >
            <div>
              <label htmlFor="name">Your Name:</label>
              <br />
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <br />
              <input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea id="message" name="message" required />
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </section>
      <section className="map">
        <div className="map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3796.6214043694417!2d73.74938667517692!3d17.90314798307465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU0JzExLjMiTiA3M8KwNDUnMDcuMSJF!5e0!3m2!1sen!2sin!4v1709660969677!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
