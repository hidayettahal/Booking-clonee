import React from "react";
import { IoMail } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import "./Subscribe.css";
function Subscribe() {
  return (
    <section className="Subscribe">
      <div className="container-header">
        <h1 className="title-subscribe">Save time, save money!</h1>
        <h4 className="subtitle-subscribe">
          Sign up and we'll send the best deals to you
        </h4>
      </div>
      <div className="container-subscribe">
        <form className="Subscribe-form" action="">
          <div className="Subscribe-form-item">
            <div className="form-item">
              <IoMail className="icon-mail" />
              <input
                className="text-subscribe"
                type="email"
                placeholder="Your e-mail"
              />
            </div>
            <div className="form-item">
              <button className="button-subscribe" type="button">
                Subscribe
              </button>
            </div>
          </div>
          <div className="Subscribe-form-item">
            <label className="form-chechkbox">
              <div className="checkbox">
                <input type="checkbox" />
                <FaCheck className="icon" />
              </div>
              Send me a link to get the FREE Booking.com app!
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
