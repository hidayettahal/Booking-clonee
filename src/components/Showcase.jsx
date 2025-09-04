import React from "react";
import "./Showcase.css";
import SearchBox from "./Searchbox";
import appleSvg from "../assets/images/apple.svg";
import googleSvg from "../assets/images/google.svg";
function Showcase() {
  return (
    <main className="Main">
      <section className="Showcase">
        <div className="Container">
          <h1 className="Showcase-title">More deals than days a year</h1>
          <h3 className="Showcase-subtitle">
            From cosy country homes to funky city flats
          </h3>
          <SearchBox />
          <ul className="Showcase-shortlink">
            <a href="">Find deals</a>
            <a href="">Travel guides</a>
            <a href="">How wasa your stay?</a>
            <a href="">Holiday rentals</a>
            <a href="">for Business</a>
          </ul>
          <div className="Showcase-store">
            <a href="" className="Showcase-store-link apple">
              <img src={appleSvg} alt="" />
            </a>
            <a href="" className="Showcase-store-link google">
              <img src={googleSvg} alt="" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Showcase;
