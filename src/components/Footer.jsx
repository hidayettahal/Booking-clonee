import React from "react";
import "./Footer.css";
import appleSvg from "../assets/images/apple.svg";
import googleSvg from "../assets/images/google.svg";
function Footer() {
  return (
    <section className="Footer">
      <div className="container-Footer-navigation">
        <a className="Footer-navigation-item" href="#">
          Your account
        </a>
        <a className="Footer-navigation-item" href="#">
          Make changes to your booking online
        </a>
        <a className="Footer-navigation-item" href="#">
          Customer Service help
        </a>
        <a className="Footer-navigation-item" href="#">
          Become an affiliate
        </a>
        <a className="Footer-navigation-item" href="#">
          Booking.com for Business
        </a>
        <a className="Footer-navigation-item" href="#">
          List your property
        </a>
      </div>
      <div className="container-hr">
        <hr />
      </div>
      <div className="container-bottom">
        <div className="bottom-left">
          <a className="bottom-left-items" href="#">
            Countries
          </a>
          <a className="bottom-left-items" href="#">
            Regions
          </a>
          <a className="bottom-left-items" href="#">
            Cities
          </a>
          <a className="bottom-left-items" href="#">
            Districts
          </a>
          <a className="bottom-left-items" href="#">
            Airports
          </a>
          <a className="bottom-left-items" href="#">
            Holiday rentals
          </a>
          <a className="bottom-left-items" href="#">
            Apartments
          </a>
          <a className="bottom-left-items" href="#">
            Resorts
          </a>
          <a className="bottom-left-items" href="#">
            Villas
          </a>
          <a className="bottom-left-items" href="#">
            Hostrels
          </a>
          <a className="bottom-left-items" href="#">
            All property types
          </a>
          <a className="bottom-left-items" href="#">
            All themes
          </a>
          <a className="bottom-left-items" href="#">
            All destinations
          </a>
          <a className="bottom-left-items" href="#">
            Reviews
          </a>
          <a className="bottom-left-items" href="#">
            Travel articles
          </a>
          <a className="bottom-left-items" href="#">
            Car hire
          </a>
          <a className="bottom-left-items" href="#">
            Flight finder
          </a>
          <a className="bottom-left-items" href="#">
            Seek&Go
          </a>
          <a className="bottom-left-items" href="#">
            For Travel Agents
          </a>
          <a className="bottom-left-items" href="#">
            About Booking.com
          </a>
          <a className="bottom-left-items" href="#">
            Press centre
          </a>
          <a className="bottom-left-items" href="#">
            Terms & Conditions
          </a>
          <a className="bottom-left-items" href="#">
            Privacy & Cookies
          </a>
          <a className="bottom-left-items" href="#">
            Contant Us
          </a>
        </div>
        <div className="bottom-right">
          <div className="Showcase-store">
            <a href="" className="Showcase-store-link apple">
              <img src={appleSvg} alt="" />
            </a>
            <a href="" className="Showcase-store-link google">
              <img src={googleSvg} alt="" />
            </a>
          </div>
          <div className="container-hr">
            <hr />
          </div>
          <div className="bottom-right-info">
            <p>
              Booking.com B.V. is based in Amsterdam in the Netherlands, and is
              supported internationally by
              <a href="#"> 204 offices in 70 countries</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-copyright">
        <p>Copyright 1996-2024 Booking.com .All righys reserved</p>
      </div>
    </section>
  );
}

export default Footer;
