import { Link } from "react-router-dom";
import {
  myMenus,
  myQuickMenus,
  serviceMenus,
  snsMenus,
} from "../../data/memberData";

function MenuIcon({ item }) {
  if (item.icon) {
    return <img src={item.icon} alt="" />;
  }

  return (
    <span className="mypage-menu-symbol" aria-hidden="true">
      {item.symbol}
    </span>
  );
}

function MenuSection({ title, items, external = false }) {
  return (
    <section className="mypage-menu-section">
      <h2>{title}</h2>

      <div className="mypage-menu-list">
        {items.map((item) =>
          external ? (
            <a
              className="mypage-menu-row"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.id}
            >
              <MenuIcon item={item} />
              <span>{item.title}</span>
              <strong aria-hidden="true">›</strong>
            </a>
          ) : (
            <Link className="mypage-menu-row" to={item.path} key={item.id}>
              <MenuIcon item={item} />
              <span>{item.title}</span>
              <strong aria-hidden="true">›</strong>
            </Link>
          ),
        )}
      </div>
    </section>
  );
}

function MyPage() {
  return (
    <main className="mypage-page">
      <section className="mypage-main">
        <h1>
          <Link to="/login">로그인</Link>을 해주세요.
        </h1>

        <div className="mypage-quick-list">
          {myQuickMenus.map((menu) => (
            <Link className="mypage-quick-item" to={menu.path} key={menu.id}>
              <img src={menu.icon} alt="" />
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>

        <MenuSection title="마이메뉴" items={myMenus} />
      </section>

      <div className="mypage-divider" />

      <MenuSection title="정보" items={serviceMenus} />

      <div className="mypage-divider" />

      <MenuSection title="SNS" items={snsMenus} external />
    </main>
  );
}

export default MyPage;
