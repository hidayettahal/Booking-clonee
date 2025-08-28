import React, { useState } from "react";
import "./Header.css";
import logoImage from "/src/assets/images/site-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <img src={logoImage} alt="Booking.com" className="logo" />

          <div className="header-top-right">
            <button className="btn">Register</button>
            <button className="btn">Sign In</button>
            <button className="btn btn-primary">List your property</button>
            <div className="lang-buttons">
              <button className="btn-lang">TR</button>
              <button className="btn-lang active">EN</button>
            </div>
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? "bar active" : "bar"}></span>
            <span className={isMenuOpen ? "bar active" : "bar"}></span>
            <span className={isMenuOpen ? "bar active" : "bar"}></span>
          </button>
        </div>

        {/* --- DEĞİŞİKLİK BURADA --- */}
        {/* Artık elementi silmiyoruz, sadece 'active' sınıfını ekleyip çıkarıyoruz */}
        <div
          className={
            isMenuOpen ? "mobile-dropdown-menu active" : "mobile-dropdown-menu"
          }
        >
          <button className="btn">Register</button>
          <button className="btn">Sign In</button>
          <button className="btn btn-primary">List your property</button>
          <div className="lang-buttons">
            <button className="btn-lang">TR</button>
            <button className="btn-lang active">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
