import { useState } from 'react';

function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <div
        className="carouselTrack"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          <div className="carouselItem" key={i}>
            {item}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carouselBtn left" onClick={prev}>‹</button>
      <button className="carouselBtn right" onClick={next}>›</button>

      {/* Indicators */}
      <div className="carouselDots">
        {items.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
