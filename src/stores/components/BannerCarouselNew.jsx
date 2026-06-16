import { useEffect, useState } from "react";
import { bannerData } from "../data/banners";

const BannerCarouselNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerData.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
  };

  const goToNext = () => {
    setActiveIndex(
      (prev) => (prev + 1) % bannerData.length
    );
  };

  return (
    <div className="carousel">
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          className={`carousel-slide ${
            index === activeIndex ? "active" : ""
          }`}
        >
          <img src={banner.image} alt={banner.title} />
        </div>
      ))}

      <button
        className="carousel-control prev"
        onClick={goToPrevious}
      >
        ◀
      </button>

      <button
        className="carousel-control next"
        onClick={goToNext}
      >
        ▶
      </button>
    </div>
  );
};

export default BannerCarouselNew;