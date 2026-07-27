import { Link, useNavigate } from "react-router-dom";
import {
  myMenus,
  myQuickMenus,
  serviceMenus,
  snsMenus,
} from "../../data/memberData";
import MyMenuList, {
  MyMenuIcon,
} from "../../components/member/MyMenuList";
import Myprofile from "../../components/member/Myprofile";
import { useAuth } from "../../context/authContext";

function MyPage() {
  const navigate = useNavigate();
  const { member, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
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
        <Myprofile member={member} onLogout={handleLogout} />

        <div className="mypage-quick-list">
          {myQuickMenus.map((menu) => (
            <Link className="mypage-quick-item" to={menu.path} key={menu.id}>
              <MyMenuIcon item={menu} />
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>

        <MyMenuList title="마이메뉴" items={memberMenus} />
      </section>

      <div className="mypage-divider" />

      <MyMenuList title="정보" items={serviceMenus} />

      <div className="mypage-divider" />

      <MyMenuList title="SNS" items={snsMenus} external />
    </main>
  );
}

export default MyPage;
