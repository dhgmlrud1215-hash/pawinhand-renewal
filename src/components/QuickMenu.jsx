import { Link } from "react-router-dom";

function QuickMenu() {
  const menus = [
    {
      image: "/images/quick/quick_intro.png",
      title: "포인핸드\n소개",
      path: "/intro",
    },
    {
      image: "/images/quick/quick_campaign.png",
      title: "입양\n캠페인",
      path: "/campaign",
    },
    {
      image: "/images/quick/quick_donation.png",
      title: "포인기부",
      path: "/donation",
    },
    {
      image: "/images/quick/quick_benefit.png",
      title: "지원/혜택",
      path: "/benefit",
    },
    {
      image: "/images/quick/quick_store.png",
      title: "포인핸드\n스토어",
      href: "https://smartstore.naver.com/pawinhand",
    },
    {
      image: "/images/quick/quick_sponsor.png",
      title: "포인핸드\n후원",
      path: "/sponsor",
    },
  ];

  return (
   <section className="quick-menu home-section">
    <h2>퀵메뉴</h2>

    <div className="quick-list">
    {menus.map((menu, index) => {
      const MenuItem = menu.path ? Link : menu.href ? "a" : "button";

      return (
        <MenuItem
          key={index}
          className="quick-item"
          {...(menu.path
            ? { to: menu.path }
            : menu.href
              ? { href: menu.href, target: "_blank", rel: "noreferrer" }
              : { type: "button" })}
        >
        <span className="quick-icon">
            <img src={menu.image} alt={menu.title} />
        </span>

        <span className="quick-name">
            {menu.title}
        </span>
        </MenuItem>
      );
    })}
    </div>
   </section>
  );
}

export default QuickMenu;
