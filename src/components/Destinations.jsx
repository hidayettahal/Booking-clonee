import React from "react";
import "./Destinations.css";
import { FaLocationDot, FaChevronRight } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
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
        <div className="Destinations-item">
          <div className="Destinations-item-img-2"></div>
          <div className="Destinations-item-content">
            <h5 className="Destination-title">Santa Eularia des Rui</h5>
            <div className="subtitle">
              <FaLocationDot className="icon-location" />
              <h6 className="subtitle">Spain</h6>
              <ImAirplane className="icon-plane" />
            </div>
            <div className="Destinations-item-content-tags">
              <a href="#">37 villas,</a>
              <a href="#">21 apartments,</a>
              <a href="#">6 guest houses,</a>
              <a href="#">5 aparthotels </a>
            </div>
            <FaChevronRight className="icon-right" />
          </div>
        </div>
        <div className="Destinations-item">
          <div className="Destinations-item-img-3"></div>
          <div className="Destinations-item-content">
            <h5 className="Destination-title">Istanbul</h5>
            <div className="subtitle">
              <FaLocationDot className="icon-location" />
              <h6 className="subtitle">Turkey</h6>
              <div className="icon-top">TOP</div>
              <ImAirplane className="icon-plane" />
            </div>
            <div className="Destinations-item-content-tags">
              <a href="#">476 apartments,</a>
              <a href="#">243 aparthotels,</a>
              <a href="#">56 bed and breakfast,</a>
              <a href="#">54 hotels</a>
            </div>
            <FaChevronRight className="icon-right" />
          </div>
        </div>
        <div className="Destinations-item">
          <div className="Destinations-item-img-4"></div>
          <div className="Destinations-item-content">
            <h5 className="Destination-title">Barcelona</h5>
            <div className="subtitle">
              <FaLocationDot className="icon-location" />
              <h6 className="subtitle">Spain</h6>
              <div className="icon-top">TOP</div>
              <ImAirplane className="icon-plane" />
            </div>
            <div className="Destinations-item-content-tags">
              <a href="#">1944 apartments,</a>
              <a href="#">259 guest houses,</a>
              <a href="#">111 hotels,</a>
              <a href="#">53 bed and breakfast</a>
            </div>
            <FaChevronRight className="icon-right" />
          </div>
        </div>
        <div className="Destinations-item">
          <div className="Destinations-item-img-5"></div>
          <div className="Destinations-item-content">
            <h5 className="Destination-title">Vienna</h5>
            <div className="subtitle">
              <FaLocationDot className="icon-location" />
              <h6 className="subtitle">Austria</h6>
              <div className="icon-top">TOP</div>
              <ImAirplane className="icon-plane" />
            </div>
            <div className="Destinations-item-content-tags">
              <a href="#">1171 apartments,</a>
              <a href="#">44 guest houses,</a>
              <a href="#">38 aparthotels,</a>
              <a href="#">34 bed and breakfast</a>
            </div>
            <FaChevronRight className="icon-right" />
          </div>
        </div>
        <div className="Destinations-item">
          <button className="Destination-item-button">
            Show me all destinations
            <FaChevronRight className="icon-right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
