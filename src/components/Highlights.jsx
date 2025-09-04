import React, { useRef, useState } from "react";
import "./Highlights.css";

function Highlights() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    const walk = (x - startX) * 2; // hız katsayısı (2 → daha hızlı kaydırma)
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="Highlights">
      <div className="Container">
        <div
          className="Highlights-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="Highlights-item">1</div>
          <div className="Highlights-item">2</div>
          <div className="Highlights-item">3</div>
          <div className="Highlights-item">4</div>
          <div className="Highlights-item">5</div>
          <div className="Highlights-item">6</div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
