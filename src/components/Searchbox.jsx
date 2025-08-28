import React from "react";
import "./Searchbox.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
function SearchBox() {
  return (
    <div className="Searchbox">
      <form className="Search-form" action="">
        <div>
          <div className="form-item">
            <FaMapMarkerAlt className="search-icon" />
            <input className="text" type="text" placeholder="Adana, Turkiye" />
          </div>
          <small>Destination, property name or address</small>
        </div>

        <div>
          <div>
            <FaCalendarAlt className="search-icon" />
            <input type="date" />
          </div>
          <small>When?</small>
        </div>

        <div>
          <select>
            <option value="">123</option>
          </select>
        </div>
        <div>
          <button type="button">Let's get started</button>
        </div>
        <div className="">Are you travelling for work?</div>
      </form>
    </div>
  );
}

export default SearchBox;
