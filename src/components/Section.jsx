import React from "react";
import "./Section.css";
function Section() {
  return (
    <section className="Section1">
      <div className="container">
        <div className="Section1-item active">
          <h5 className="Section1-item-title">
            New deals listed daily -
            <br />
            for every budget!
          </h5>
          <div className="Section1-item-content">
            <small>
              No booking fees / Save money!
              <a href="#">
                <br />
                We Price Match
              </a>
            </small>
          </div>
        </div>
        <div className="Section1-item">
          <h5 className="Section1-item-title">
            <span>1,490,411 </span>
            properties
            <br />
            worldwide
          </h5>
          <div className="Section1-item-content">
            <small>
              Including 829,668 holiday rentals in 121,734 destinations in 229
              countries
              <a href="#"> List your property</a>
            </small>
          </div>
        </div>
        <div className="Section1-item">
          <h5 class="Section1-item-title">
            Make changes to your booking, anytime
          </h5>
          <div class="Section1-item-content">
            <small>
              You can make changes,
              <a href="#"> send a request or cancel </a>
              in just a few clicks
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
