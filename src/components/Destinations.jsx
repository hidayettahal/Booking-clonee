import React from "react";
import "./Destinations.css";
import { FaLocationDot, FaChevronRight } from "react-icons/fa6";
function Destinations() {
  return (
    <section className="Destinations">
      <div className="container-title">
        <h1 className="index-title">More destinations</h1>
      </div>
      <div className="container-destinations">
        <div className="Destinations-item">
          <div className="Destinations-item-img"></div>
          <div className="Destinations-item-content">
            <h5 className="Destination-title">Playa d'en Bossa</h5>
            <div className="subtitle">
              <FaLocationDot className="icon-location" />
              <h6 className="subtitle">Spain</h6>
              <div className="icon-top">TOP</div>
            </div>
            <div className="Destinations-item-content-tags">
              <a href="#">24 apartments,</a>
              <a href="#">10 aparthotels,</a>
              <a href="#">2 villas</a>
            </div>
            <FaChevronRight className="icon-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
