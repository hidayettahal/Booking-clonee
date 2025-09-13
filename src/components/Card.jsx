import React from "react";
import { ImLifebuoy } from "react-icons/im";

import "./Card.css";
function Card() {
  return (
    <section>
      <div className="container-cards">
        <div className="cards">
          <div className="card-logo"></div>
          <div className="card-content">
            <h5 className="item-title">
              <span>131,130,000</span>
              reviews
            </h5>
            <p className="item-text">
              Real guest. Real stays. Real option to help you make the right
              choice
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="cards-logo">
            <p>?</p>
            <ImLifebuoy />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
