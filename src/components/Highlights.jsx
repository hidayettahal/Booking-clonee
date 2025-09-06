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
    const walk = (x - startX) * 2;
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
          <div className="Highlights-item">
            <div className="show">
              <div className="content">
                <h4 className="title">Paris</h4>
                <div className="tag">
                  <h5 className="tag-title">Top reasons to visit:</h5>
                  <div className="tag-list">
                    <a href="" className="tag-list">
                      museums
                    </a>
                    <a href="" className="tag-list">
                      sigtseeing,
                    </a>
                    <a href="" className="tag-list">
                      culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Highlights-item-extra"></div>
          </div>
          <div className="Highlights-item">
            <div className="show">
              <div className="content">
                <h4 className="title">Paris</h4>
                <div className="tag">
                  <h5 className="tag-title">Top reasons to visit:</h5>
                  <div className="tag-list">
                    <a href="" className="tag-list">
                      museums
                    </a>
                    <a href="" className="tag-list">
                      sigtseeing,
                    </a>
                    <a href="" className="tag-list">
                      culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Highlights-item-extra"></div>
          </div>
          <div className="Highlights-item">
            <div className="show">
              <div className="content">
                <h4 className="title">Paris</h4>
                <div className="tag">
                  <h5 className="tag-title">Top reasons to visit:</h5>
                  <div className="tag-list">
                    <a href="" className="tag-list">
                      museums
                    </a>
                    <a href="" className="tag-list">
                      sigtseeing,
                    </a>
                    <a href="" className="tag-list">
                      culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Highlights-item-extra"></div>
          </div>
          <div className="Highlights-item">
            <div className="show">
              <div className="content">
                <h4 className="title">Paris</h4>
                <div className="tag">
                  <h5 className="tag-title">Top reasons to visit:</h5>
                  <div className="tag-list">
                    <a href="" className="tag-list">
                      museums
                    </a>
                    <a href="" className="tag-list">
                      sigtseeing,
                    </a>
                    <a href="" className="tag-list">
                      culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Highlights-item-extra"></div>
          </div>
          <div className="Highlights-item">
            <div className="show">
              <div className="content">
                <h4 className="title">Paris</h4>
                <div className="tag">
                  <h5 className="tag-title">Top reasons to visit:</h5>
                  <div className="tag-list">
                    <a href="" className="tag-list">
                      museums
                    </a>
                    <a href="" className="tag-list">
                      sigtseeing,
                    </a>
                    <a href="" className="tag-list">
                      culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Highlights-item-extra"></div>
          </div>
          <div className="Highlights-item">
            <div className="show">
              <div className="content">
                <h4 className="title">Paris</h4>
                <div className="tag">
                  <h5 className="tag-title">Top reasons to visit:</h5>
                  <div className="tag-list">
                    <a href="" className="tag-list">
                      museums
                    </a>
                    <a href="" className="tag-list">
                      sigtseeing,
                    </a>
                    <a href="" className="tag-list">
                      culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Highlights-item-extra"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
