function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="active">
        <img className="nav-icon" src="/icons/home.svg" alt="" />
        <span>홈</span>
      </button>

      <button>
        <img className="nav-icon" src="/icons/shelter.svg" alt="" />
        <span>보호소</span>
      </button>

      <button>
        <img className="nav-icon" src="/icons/lost.svg" alt="" />
        <span>실종/제보</span>
      </button>

      <button>
        <img className="nav-icon" src="/icons/story.svg" alt="" />
        <span>커뮤니티</span>
      </button>

      <button>
        <img className="nav-icon" src="/icons/my.svg" alt="" />
        <span>마이</span>
      </button>
    </nav>
  );
}

export default BottomNav;