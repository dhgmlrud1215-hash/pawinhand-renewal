import { useEffect, useState } from "react";


function Mainbanner() {
  const banners = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="main-banner">
      <div
        className="banner-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`메인배너 ${index + 1}`}
          />
        ))}
      </div>

      <div className="banner-pagination">
        {banners.map((_, index) => (
          <span
            key={index}
            className={current === index ? "active" : ""}
            aria-label={`메인배너 ${index + 1}번 보기`}
          />
        ))}
      </div>
    </section>
  );
}

export default Mainbanner;