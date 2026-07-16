import { Link } from "react-router-dom";

function HamburgerMenu({ isOpen, onClose }) {
  const menuItems = [
    {
      title: "입양하기",
      path: "/animals",
    },
    {
      title: "보호소 찾기",
      path: "/shelters",
    },
    {
      title: "입양 캠페인",
      path: "/campaign",
    },
    {
      title: "포인기부",
      path: "/donation",
    },
    {
      title: "봉사활동",
      path: "/volunteer",
    },
    {
      title: "실종 · 제보",
      path: "/lost",
    },
    {
      title: "포인핸드 스토리",
      path: "/story",
    },
    {
      title: "스토어",
      path: "/store",
    },
  ];

  return (
    <div
      className={`hamburger-menu ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
    >
      {/* 배경 클릭 영역 */}
      <button
        type="button"
        className="hamburger-overlay"
        aria-label="메뉴 닫기"
        onClick={onClose}
      />

      {/* 햄버거 메뉴 본체 */}
      <aside className="hamburger-drawer">
        <div className="hamburger-header">
          <strong>전체 메뉴</strong>

          <button
            type="button"
            className="hamburger-close"
            aria-label="메뉴 닫기"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="hamburger-login">
          <div className="hamburger-profile">
            <span className="profile-icon">P</span>

            <div>
              <strong>로그인해 주세요</strong>
              <p>더 많은 포인핸드 서비스를 이용해 보세요.</p>
            </div>
          </div>

          <div className="hamburger-login-buttons">
            <Link to="/login" onClick={onClose}>
              로그인
            </Link>

            <Link to="/join" onClick={onClose}>
              회원가입
            </Link>
          </div>
        </div>

        <nav className="hamburger-nav">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              className="hamburger-menu-item"
              key={item.title}
              onClick={onClose}
            >
              <span>{item.title}</span>
              <span className="menu-arrow">›</span>
            </Link>
          ))}
        </nav>

        <div className="hamburger-sub-menu">
          <Link to="/notice" onClick={onClose}>
            공지사항
          </Link>

          <Link to="/faq" onClick={onClose}>
            자주 묻는 질문
          </Link>

          <Link to="/settings" onClick={onClose}>
            설정
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default HamburgerMenu;