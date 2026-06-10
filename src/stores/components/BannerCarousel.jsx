import { useEffect, useState } from "react";
import { bannerData } from "../data/banners";

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = bannerData.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + length) % length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % length);
  };

  return (
    <div className="carousel">
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          className={`carousel-slide ${index === activeIndex ? "active" : ""}`}
        >
          <img src={banner.image} alt={banner.title} />
          <div className="carousel-text">
            {/* <h2>{banner.title}</h2> */}
            {/* <p>{banner.subtitle}</p>
            <small>{banner.description}</small> */}
            {/* <button>{banner.ctaText}</button> */}
          </div>
        </div>
      ))}

      <button className="carousel-control prev" onClick={goToPrevious}>
        ◀
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        ▶
      </button>
    </div>
  );
};

export default BannerCarousel;
