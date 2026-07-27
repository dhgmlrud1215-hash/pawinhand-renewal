import { Link, useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  BookHeart,
  CircleHelp,
  ClipboardPenLine,
  FilePenLine,
  HouseHeart,
  Mail,
  Megaphone,
  MessageSquareText,
  PawPrint,
  UserRound,
} from "lucide-react";
import {
  myMenus,
  myQuickMenus,
  serviceMenus,
  snsMenus,
} from "../../data/memberData";
import {
  clearMemberSession,
  getMemberProfileImage,
  getStoredMember,
} from "../../utils/memberStorage";

const iconComponents = {
  membership: BadgeCheck,
  adoption: ClipboardPenLine,
  message: Mail,
  login: UserRound,
  profile: UserRound,
  pets: PawPrint,
  shelters: HouseHeart,
  stories: BookHeart,
  posts: FilePenLine,
  notice: Megaphone,
  help: CircleHelp,
  sms: MessageSquareText,
};

function MenuIcon({ item }) {
  if (item.iconKey) {
    const Icon = iconComponents[item.iconKey];

    return (
      <Icon
        className="mypage-vector-icon"
        strokeWidth={1.9}
        aria-hidden="true"
      />
    );
  }

  return <img className="mypage-brand-icon" src={item.icon} alt="" />;
}

function MenuSection({ title, items, external = false }) {
  return (
    <section
      className={`mypage-menu-section${external ? " mypage-sns-section" : ""}`}
    >
      <h2>{title}</h2>

      <div className="mypage-menu-list">
        {items.map((item) => {
          const content = (
            <>
              <MenuIcon item={item} />
              <span>{item.title}</span>
              <strong aria-hidden="true">›</strong>
            </>
          );

          if (item.onClick) {
            return (
              <button
                className="mypage-menu-row"
                type="button"
                onClick={item.onClick}
                key={item.id}
              >
                {content}
              </button>
            );
          }

          if (external) {
            return (
              <a
                className="mypage-menu-row"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                {content}
              </a>
            );
          }

          return (
            <Link className="mypage-menu-row" to={item.path} key={item.id}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function MyPage() {
  const navigate = useNavigate();
  const member = getStoredMember();

  const handleLogout = () => {
    clearMemberSession();
    alert("로그아웃되었습니다.");
    navigate("/");
  };

  const memberMenus = member
    ? [
        {
          id: "profile",
          title: "프로필",
          iconKey: "profile",
          path: "/mypage/profile",
        },
        {
          id: "favorite-animals",
          title: "관심 유기동물",
          iconKey: "pets",
          path: "/mypage/favorites",
        },
        {
          id: "favorite-shelters",
          title: "관심 보호소",
          iconKey: "shelters",
          path: "/mypage/favorite-shelters",
        },
        {
          id: "favorite-stories",
          title: "관심 스토리",
          iconKey: "stories",
          path: "/mypage/favorite-stories",
        },
        {
          id: "my-posts",
          title: "내가 쓴 글",
          iconKey: "posts",
          path: "/mypage/posts",
        },
      ]
    : myMenus;

  return (
    <main className="mypage-page">
      <section className="mypage-main">
        {member ? (
          <div className="mypage-member-heading">
            <div className="mypage-member-avatar">
              <img
                src={getMemberProfileImage(member)}
                alt={`${member.nickname || member.name} 프로필`}
              />
            </div>
            <div>
              <h1>{member.nickname || member.name}님, 반가워요.</h1>
              <p>{member.email}</p>
            </div>
            <button
              className="mypage-logout-button"
              type="button"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <h1>
            <Link to="/login">로그인</Link> 해주세요.
          </h1>
        )}

        <div className="mypage-quick-list">
          {myQuickMenus.map((menu) => (
            <Link className="mypage-quick-item" to={menu.path} key={menu.id}>
              <MenuIcon item={menu} />
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>

        <MenuSection title="마이메뉴" items={memberMenus} />
      </section>

      <div className="mypage-divider" />

      <MenuSection title="정보" items={serviceMenus} />

      <div className="mypage-divider" />

      <MenuSection title="SNS" items={snsMenus} external />
    </main>
  );
}

export default MyPage;
