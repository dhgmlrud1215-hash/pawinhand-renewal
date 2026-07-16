import { useEffect, useState } from "react";


function Mainbanner() {
  const banners = [
    "/images/banner/banner1.png",
    "/images/banner/banner2.png",
    "/images/banner/banner3.png",
    "/images/banner/banner4.png",
  ];

  const [current, setCurrent] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(1);
  const [isSliding, setIsSliding] = useState(true);
  const displayBanners = [
    banners[banners.length - 1],
    ...banners,
    banners[0],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setDisplayIndex((prev) =>
        prev >= banners.length + 1 ? 1 : prev + 1,
      );
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  useEffect(() => {
    if (displayIndex !== banners.length + 1) return undefined;

    // 브라우저가 transitionend를 누락해도 트랙 밖으로 넘어가지 않도록 복구한다.
    const fallbackTimer = setTimeout(() => {
      setIsSliding(false);
      setDisplayIndex(1);
    }, 600);

    return () => clearTimeout(fallbackTimer);
  }, [displayIndex, banners.length]);

  const handleSlideEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (displayIndex === banners.length + 1) {
      setIsSliding(false);
      setDisplayIndex(1);
    }

    if (displayIndex === 0) {
      setIsSliding(false);
      setDisplayIndex(banners.length);
    }
  };

  const handlePagination = (index) => {
    setIsSliding(true);
    setCurrent(index);
    setDisplayIndex(index + 1);
  };

  const getRealIndex = (index) => {
    if (index === 0) return banners.length - 1;
    if (index === banners.length + 1) return 0;
    return index - 1;
  };

  return (
    <section className="main-banner">
      <div
        className="banner-track"
        style={{
          "--banner-index": displayIndex,
          transition: isSliding ? undefined : "none",
        }}
        onTransitionEnd={handleSlideEnd}
      >
        {displayBanners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            className={getRealIndex(index) === current ? "active" : ""}
            loading={index <= 2 ? "eager" : "lazy"}
            fetchPriority={index === 1 ? "high" : "auto"}
            decoding="async"
            alt={`메인배너 ${index + 1}`}
          />
        ))}
      </div>

      <div className="banner-pagination">
        {banners.map((_, index) => (
          <button 
            key={index}
            type="button"
            className={current === index ? "active" : ""}
            onClick={() => handlePagination(index)}
            aria-label={`메인배너 ${index + 1}번 보기`}
          />
        ))}
      </div>
    </section>
  );
}

export default Mainbanner;
