import React, { useState } from "react";
import "./OurServices.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLaptopCode,
  faCode,
  faEnvelopeOpenText,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  return (
    <section className="our-services" id="ourServices">
      <div className="section-title-container">
        <h2>Our services</h2>

      </div>
      <div className="row">
        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faLaptopCode} />
            <h2>
              WEB <br />
              <strong>Design</strong>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faCode} />
            <h2>
              WEB <br />
              <strong>Development</strong>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <h2>
              Digital <br />
              <strong>Marketing</strong>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="service-card">
          <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <h2>
              CONTENT <br />
              <strong>WRITING</strong>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
