import React from "react";
import "./Reviews.css";
function Reviews() {
  return (
    <section>
      <div className="container header">
        <h1 className="index-title">Still deciding where to stay?</h1>
        <h3 className="subtitle-reviews">
          We want to make your decision easier! With over 131,150,000 verified
          guest reviews, we can help you find the perfect place to stay.
        </h3>
      </div>
      <div className="container button-large">
        <div className="btn-active">Hotel reviews</div>
        <div className="btn-rew">B&B & inn reviews</div>
        <div className="btn-rew">Holiday rental reviews</div>
      </div>
      <div className="container Rev-item">
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Edinburgh</h4>
          <div className="Reviews-item-subtitle">
            <small>283,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Barcelona</h4>
          <div className="Reviews-item-subtitle">
            <small>1,083,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Sydney</h4>
          <div className="Reviews-item-subtitle">
            <small>293,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Venica</h4>
          <div className="Reviews-item-subtitle">
            <small>483,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Bristol</h4>
          <div className="Reviews-item-subtitle">
            <small>173,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Rome</h4>
          <div className="Reviews-item-subtitle">
            <small>443,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Manchester</h4>
          <div className="Reviews-item-subtitle">
            <small>192,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title"></h4>
          <div className="Reviews-item-subtitle">
            <small>283,435 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Munich</h4>
          <div className="Reviews-item-subtitle">
            <small>283,782 hotel reviews</small>
          </div>
        </div>
        <div className="Reviews-item">
          <h4 className="Reviews-item-title">Lyon</h4>
          <div className="Reviews-item-subtitle">
            <small>383,435 hotel reviews</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
