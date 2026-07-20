import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const STORE_OPEN_MINUTES = 11 * 60;
const STORE_CLOSE_MINUTES = 19 * 60;

function getSeoulMinutes(date) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return hour * 60 + minute;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(() => new Date());

  const currentSeoulMinutes = getSeoulMinutes(currentTime);
  const isStoreOpen =
    currentSeoulMinutes >= STORE_OPEN_MINUTES &&
    currentSeoulMinutes < STORE_CLOSE_MINUTES;

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 60_000);

    return () => window.clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="메인으로 이동"
          >
            <img src="/images/logo.png" alt="포인핸드" />
          </Link>
        </h1>

        <div className="header-icons">
          <div className="location-wrap">
            <button
              type="button"
              className="location-btn"
              aria-label="경의숲점 정보 보기"
              onClick={() => setIsLocationOpen((prev) => !prev)}
            >
              <img src="/icons/location.svg" alt="" />
            </button>

            {isLocationOpen && (
              <div className="location-popup">
                <div className="location-popup-header">
                  <div>
                    <span className="location-popup-label">
                      포인핸드 오프라인 공간
                    </span>
                    <strong>포인핸드 경의숲점</strong>
                  </div>

                  <button
                    type="button"
                    className="location-popup-close"
                    aria-label="팝업 닫기"
                    onClick={() => setIsLocationOpen(false)}
                  >
                    ×
                  </button>
                </div>

                <div className="location-store-image">
                  <img
                    src="/images/gyeongui-store.jpeg"
                    alt="포인핸드 경의숲점"
                  />
                </div>

                <p className="location-description">
                  포인핸드의 다양한 활동과 입양 문화를 직접 만나볼 수 있는
                  오프라인 공간입니다.
                </p>

                <div className="location-details">
                  <div>
                    <span>주소</span>
                    <p>서울 마포구 광성로6길 66 1층</p>
                  </div>

                  <div>
                    <span>운영시간</span>
                    <p
                      className={`location-business-hours ${
                        isStoreOpen ? "open" : "closed"
                      }`}
                      aria-live="polite"
                    >
                      {isStoreOpen
                        ? "영업 중 · 19:00 영업 종료"
                        : "영업 종료 · 매일 11:00 영업 시작"}
                    </p>
                  </div>

                  <div>
                    <span>전화</span>
                    <p>
                      <a href="tel:050714224211">0507-1422-4211</a>
                    </p>
                  </div>

                  <div>
                    <span>이용안내</span>
                    <p>포장 · 반려동물 동반 가능 · 무선 인터넷</p>
                  </div>
                </div>

                <a
                  href="https://map.kakao.com/link/search/포인핸드 경의숲점"
                  target="_blank"
                  rel="noreferrer"
                  className="location-map-link"
                >
                  지도에서 위치 보기
                  <span>›</span>
                </a>
              </div>
            )}
          </div>

          <button type="button" className="alarm-btn">
            <img src="/icons/alarm.svg" alt="알림" />
            <span className="notification-dot"></span>
          </button>

          <button
            type="button"
            aria-label="전체 메뉴 열기"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src="/icons/menu.svg" alt="" />
          </button>
        </div>
      </header>

      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Header;
