import React from "react";
import { ImLifebuoy } from "react-icons/im";
import reviewsIcon from "../assets/images/reviews.svg";
import "./Card.css";
function Card() {
  return (
    <div className="container-cards">
      <div className="cards">
        <div className="cards-logo">
          <img src={reviewsIcon} alt="Reviews Icon" />
        </div>
        <div className="cards-content">
          <h5 className="item-title">
            <span>131,130,000 </span>
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
          <ImLifebuoy className="icon-help" />
        </div>
        <div className="cards-content">
          <h5 className="item-title">
            We 're here to help
            <span> 24/7</span>
          </h5>
          <p className="item-text">
            Find answers, manage your booking and more in our
            <a href="#">Help Center</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
