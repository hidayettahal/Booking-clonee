import React from "react";
import "./Discover.css";
import { FaChevronRight } from "react-icons/fa6";
function Discover() {
  return (
    <section>
      <div className="container">
        <h1 className="index-title">Discover</h1>
      </div>
      <div className="container-discover">
        <div className="Discover-item">
          <div className="Background-state"></div>
          <div className="Discover-item-content">
            <h2 className="Discover-item-title">United States</h2>
            <div className="Discover-item-subtitle">
              <p className="medium">
                Enjoy relaxation, shopping and restaurants during your next trip
                to USA!
              </p>
            </div>
          </div>
        </div>
        <div className="Discover-item">
          <div className="Background-italy"></div>
          <div className="Discover-item-content">
            <h2 className="Discover-item-title">Italy</h2>
            <div className="Discover-item-subtitle">
              <p className="medium">
                Enjoy food, scenery and relaxation during your next trip to
                Italy!
              </p>
            </div>
          </div>
        </div>
        <div className="Discover-item">
          <div className="Background-france"></div>
          <div className="Discover-item-content">
            <h2 className="Discover-item-title">France</h2>
            <div className="Discover-item-subtitle">
              <p className="medium">
                Put tranquility, scenery and old town on your to-do list during
                your next visit to France!
              </p>
            </div>
          </div>
        </div>
        <div className="Discover-item">
          <div className="Background-more"></div>
          <div className="Discover-item-content">
            <h2 className="Discover-item-title">More</h2>
            <div className="Discover-item-subtitle">
              <p className="medium">
                Put tranquility, scenery and old town on your to-do list during
                your next visit to France!
              </p>
            </div>
            <FaChevronRight className="icon-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
