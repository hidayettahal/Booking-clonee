import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="nav-item active">
          <span>Accommodation</span>
        </a>
        <a href="#" className="nav-item">
          <span>Flights</span>
        </a>
        <a href="#" className="nav-item">
          <span>Rental Cars</span>
        </a>
        <a href="#" className="nav-item">
          <span>Airport Taxis</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
