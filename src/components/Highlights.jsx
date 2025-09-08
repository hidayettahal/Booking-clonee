import React, { useRef, useState } from "react";
import "./Highlights.css";

function Highlights() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    {
      id: 1,
      name: "Monaco",
      reasons: ["historical place", "casino", "nightlife"],
      imageClass: "show-4",
    },
    {
      id: 2,
      name: "San Antonio Bay",
      reasons: ["sunsets", "beaches", "nightlife"],
      imageClass: "show-2",
    },
    {
      id: 3,
      name: "Ibiza Town",
      reasons: ["sunsets", "beaches", "nightlife"],
      imageClass: "show-3",
    },
    {
      id: 4,
      name: "Paris",
      reasons: ["museums", "sightseeing", "culture"],
      imageClass: "show",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSelectCity = (city, index) => {
    setSelectedCity(city);

    const item = sliderRef.current.children[index * 2];
    if (item) {
      item.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  return (
    <section className="Highlights">
      <div
        className="Highlights-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cities.map((city, index) => (
          <React.Fragment key={city.id}>
            <div
              className={`Highlights-item ${
                selectedCity?.id === city.id ? "active" : ""
              }`}
              onClick={() => handleSelectCity(city, index)}
            >
              <div className={city.imageClass}>
                <div className="content">
                  <h4 className="title">{city.name}</h4>
                  <div className="tag">
                    <h5 className="tag-title">Top reasons to visit:</h5>
                    <div className="tag-list">
                      {city.reasons.map((reason, i) => (
                        <span key={i} className="tag-item">
                          {reason}
                          {i < city.reasons.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {selectedCity?.id === city.id && (
              <div className="Highlights-details">
                <h3>Still planning a trip to {selectedCity.name}?</h3>
                <p>
                  <b>23 Oct - 24 Oct</b> / 1 room, 2 adults
                </p>
                <button className="Highlights-btn">View properties</button>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
