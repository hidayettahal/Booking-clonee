import React from "react";
import "./Showcase.css";
import SearchBox from "./Searchbox";
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
        </div>
      </section>
    </main>
  );
}

export default Showcase;
