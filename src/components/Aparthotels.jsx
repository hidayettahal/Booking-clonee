import React from "react";
import "./Aparthotels.css";
import { FaLocationDot, FaChevronRight } from "react-icons/fa6";
function Aparthotels() {
  return (
    <section>
      <div className="container">
        <h1 className="index-title">Aparthotels</h1>
      </div>
      <div className="container-aparthotels">
        <div className="Aparthotels-item">
          <div className="Aparthotels-item-image-galata"></div>
          <div className="Aparthotels-item-content">
            <div className="content-title">
              <h3>Mood of Galata Suites</h3>
            </div>
            <div className="content-subtitle">
              <FaLocationDot className="icon-location-aparthotels" />
              <h4 className="subtitle">Istanbul, Turkey</h4>
              <a href="#">203 reviews</a>
            </div>
            <div className="content-text">
              <p>
                Offering a terrace, Mood of Galata Suites is located in
                Istanbul, 300 metres from Galata Tower...
              </p>
            </div>
          </div>
        </div>
        <div className="Aparthotels-item">
          <div className="Aparthotels-item-image-palace"></div>
          <div className="Aparthotels-item-content">
            <div className="content-title">
              <h3>A Place Suites</h3>
            </div>
            <div className="content-subtitle">
              <FaLocationDot className="icon-location-aparthotels" />
              <h4 className="subtitle">Istanbul, Turkey</h4>
              <a href="#">442 reviews</a>
            </div>
            <div className="content-text">
              <p>
                Featuring free WiFi and air conditioning, A Place Suites is
                locates in Istanbul, Cevahir...
              </p>
            </div>
          </div>
        </div>
        <div className="Aparthotels-item">
          <div className="Aparthotels-item-image-istanbul"></div>
          <div className="Aparthotels-item-content">
            <div className="content-title">
              <h3>Witt Istanbul Suites</h3>
            </div>
            <div className="content-subtitle">
              <FaLocationDot className="icon-location-aparthotels" />
              <h4 className="subtitle">Istanbul, Turkey</h4>
              <a href="#">232 reviews</a>
            </div>
            <div className="content-text">
              <p>
                Situated in the Cihangir district, Witt Istanbul Suites offers
                luxurious rooms and a peaceful terrace...
              </p>
            </div>
          </div>
        </div>
        <div className="Aparthotels-item">
          <div className="Aparthotels-item-image-maslak"></div>
          <div className="Aparthotels-item-content">
            <div className="content-title">
              <h3>Maslak Istanbul</h3>
            </div>
            <div className="content-subtitle">
              <FaLocationDot className="icon-location-aparthotels" />
              <h4 className="subtitle">Istanbul, Turkey</h4>
              <a href="#">4.563 reviews</a>
            </div>
            <div className="content-text">
              <p>
                Featuring free WiFi and air conditioning, Somerset Maslak
                Istanbul situated in Istanbul...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-btn">
        <div className="button-hotels">
          All aparthotels
          <FaChevronRight className="icon-right-hotels" />
        </div>
      </div>
      <div className="container hr">
        <hr />
      </div>
    </section>
  );
}

export default Aparthotels;
