import "./Portfolio.css";

import mockup1 from "./mockups/mockup1.jpg";
import mockup2 from "./mockups/mockup2.jpg";
import mockup3 from "./mockups/mockup3.jpg";
import mockup4 from "./mockups/mockup4.jpg";
import mockup5 from "./mockups/mockup5.jpg";
import mockup6 from "./mockups/mockup6.jpg";

import { Link } from "react-router-dom";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [selectedDot, setSelectedDot] = useState(1);

  return (
    <div className="portfolio-container">
      <div className="title-portfolio">
        <h2>Check out our latest works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quaerat.
        </p>
      </div>

      <div className="projects-container">
        <div className="latest-projects">
          <ul>
            <li>
              <Link to={"https://www.richardsonsouza.com/"} target="blank">
                <div className="portfolio-card-image-container">
                  <img src={mockup1} alt="CARD IMAGE" />
                  <div className="card-body">
                    <span>
                      <p>Go to link</p>
                      <ExternalLink />
                    </span>
                  </div>
                </div>
                <div className="portoflio-card-title-container">
                  <h2>Grand Motel gets an identify brushup</h2>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"https://www.richardsonsouza.com/"} target="blank">
                <div className="portfolio-card-image-container">
                  <img src={mockup2} alt="CARD IMAGE" />
                  <div className="card-body">
                    <span>
                      <p>Go to link</p>
                      <ExternalLink />
                    </span>
                  </div>
                </div>
                <div className="portoflio-card-title-container">
                  <h2>Grand Motel gets an identify brushup</h2>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="slider-container-portoflio">
          <ul>
          <li>
              <Link to={"https://www.richardsonsouza.com/"}>
                <img src={mockup3} alt="CARD IMAGE" />
                <div className="card-body">
                  <span>
                    <p>Go to link</p>
                    <ExternalLink />
                  </span>
                </div>
              </Link>
            </li>
          <li>
              <Link to={"https://www.richardsonsouza.com/"}>
                <img src={mockup4} alt="CARD IMAGE" />
                <div className="card-body">
                  <span>
                    <p>Go to link</p>
                    <ExternalLink />
                  </span>
                </div>
              </Link>
            </li>
            
          {/* <li>
              <Link to={"https://www.richardsonsouza.com/"}>
                <img src={mockup5} alt="CARD IMAGE" />
                <div className="card-body">
                  <span>
                    <p>Go to link</p>
                    <ExternalLink />
                  </span>
                </div>
              </Link>
            </li>
          <li>
              <Link to={"https://www.richardsonsouza.com/"}>
                <img src={mockup6} alt="CARD IMAGE" />
                <div className="card-body">
                  <span>
                    <p>Go to link</p>
                    <ExternalLink />
                  </span>
                </div>
              </Link>
            </li> */}
          </ul>

          <div className="caroulsel-control-container">
            <input
              type="radio"
              className="input"
              name="option"
              id="option1"
              onClick={() => setSelectedDot(1)}
              defaultChecked={true}
            />
            <label
              htmlFor="option1"
              className={`${selectedDot === 1 ? "active" : ""}`}
            ></label>

            <input
              type="radio"
              className="input"
              name="option"
              id="option2"
              onClick={() => setSelectedDot(2)}
            />
            <label
              htmlFor="option2"
              className={`${selectedDot === 2 ? "active" : ""}`}
            ></label>

            <input
              type="radio"
              className="input"
              name="option"
              id="option3"
              onClick={() => setSelectedDot(3)}
            />
            <label
              htmlFor="option3"
              className={`${selectedDot === 3 ? "active" : ""}`}
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
