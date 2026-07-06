function Header() {
  return (
   <header className="header">
    <h1 className="logo">
        <img src="/images/logo.png" alt="포인핸드" />
    </h1>

    <div className="header-icons">
        <button type="button">
        <img src="/icons/location.svg" alt="지점" />
        </button>

        <button type="button" className="alarm-btn">
        <img src="/icons/alarm.svg" alt="알림" />
        <span className="notification-dot"></span>
        </button>

        <button type="button">
        <img src="/icons/menu.svg" alt="메뉴" />
        </button>
    </div>
</header>
  );
}

export default Header;