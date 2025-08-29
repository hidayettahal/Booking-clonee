import React from "react";
import "./Showcase.css";
import SearchBox from "./Searchbox";
function Showcase() {
  return (
    <main className="Main">
      <section className="Showcase">
        <div className="Container">
          <h1>More deals than days a year</h1>
          <h3>From cosy country homes to funky city flats</h3>
          <SearchBox />
        </div>
      </section>
    </main>
  );
}

export default Showcase;
