import React from "react";
import "./Searchbox.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaCheck } from "react-icons/fa";
function SearchBox() {
  return (
    <div className="Searchbox">
      <form className="Search-form" action="">
        <div className="Search-form-item">
          <div className="form-item">
            <FaMapMarkerAlt className="search-icon" />
            <input className="text" type="text" placeholder="Adana, Turkiye" />
          </div>
          <small className="form-description">
            Destination, property name or address
          </small>
        </div>

        <div className="Search-form-item">
          <div className="form-item">
            <FaCalendarAlt className="search-icon" />
            <input
              className="text"
              type="date"
              placeholder="Check in - Check out"
            />
          </div>
          <small className="form-description">When?</small>
        </div>

        <div className="Search-form-item">
          <div className="form-item">
            <FaUser className="search-icon" />
            <select>
              <option value="">Guest</option>
            </select>
          </div>
        </div>
        <div className="for-work">
          <label className="form-checkbox">
            Are you travelling for work?
            <div className="checkbox">
              <input type="checkbox" />
              <FaCheck className="icon" />
            </div>
          </label>
        </div>
        <div className="Search-form-item">
          <button className="button" type="button">
            Let's get started
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
