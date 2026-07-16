import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <button type="button">
            <img src="/icons/location.svg" alt="지점" />
          </button>

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