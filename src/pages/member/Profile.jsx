import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  BookHeart,
  ChevronLeft,
  ChevronRight,
  FilePenLine,
  HouseHeart,
  Mail,
  PawPrint,
  Settings,
  Share2,
  ShieldBan,
} from "lucide-react";
import {
  getMemberCoverImage,
  getMemberProfileImage,
  getStoredMember,
} from "../../utils/memberStorage";

const profileMenuGroups = [
  [
    {
      title: "입양 신청",
      icon: HouseHeart,
      path: "/mypage/adoption",
    },
    {
      title: "쪽지함",
      icon: Mail,
      path: "/mypage/messages",
    },
  ],
  [
    {
      title: "관심 유기동물",
      icon: PawPrint,
      path: "/mypage/favorites",
    },
    {
      title: "관심 보호소",
      icon: HouseHeart,
      path: "/mypage/favorite-shelters",
    },
    {
      title: "관심 스토리",
      icon: BookHeart,
      path: "/mypage/favorite-stories",
    },
    {
      title: "내가 쓴 글",
      icon: FilePenLine,
      path: "/mypage/posts",
    },
    {
      title: "차단 관리",
      icon: ShieldBan,
      path: "/mypage/blocked",
    },
  ],
];

function ProfileMenuGroup({ items }) {
  return (
    <section className="profile-menu-group">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link className="profile-menu-row" to={item.path} key={item.title}>
            <Icon strokeWidth={1.7} aria-hidden="true" />
            <span>{item.title}</span>
            <ChevronRight strokeWidth={1.7} aria-hidden="true" />
          </Link>
        );
      })}
    </section>
  );
}

function Profile() {
  const navigate = useNavigate();
  const member = getStoredMember();

  if (!member) {
    return <Navigate to="/login" replace />;
  }

  const nickname = member.nickname || member.name || member.user_id;
  const coverImage = getMemberCoverImage(member);

  return (
    <main className="profile-page">
      <header className="profile-topbar">
        <button type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
          <ChevronLeft aria-hidden="true" />
        </button>
        <h1>{nickname}</h1>
        <button type="button" aria-label="프로필 공유">
          <Share2 aria-hidden="true" />
        </button>
      </header>

      <section
        className={`profile-hero${
          coverImage ? "" : " profile-hero-empty"
        }`}
      >
        {coverImage && (
          <img
            className="profile-cover-image"
            src={coverImage}
            alt=""
          />
        )}
        <div className="profile-cover-shade" />

        <Link
          className="profile-settings-button"
          to="/mypage/edit"
          aria-label="프로필 설정"
        >
          <Settings aria-hidden="true" />
        </Link>

        <div className="profile-identity">
          <img
            className="profile-avatar-image"
            src={getMemberProfileImage(member)}
            alt={`${nickname} 프로필`}
          />
          <strong>{nickname}</strong>
          <div className="profile-follow-stats">
            <span>팔로잉 <b>0</b></span>
            <span>팔로워 <b>0</b></span>
          </div>
        </div>
      </section>

      <section className="profile-introduction">
        <h2>소개</h2>
        <p>
          {member.introduction ||
            member.bio ||
            member.self_introduction ||
            "사지말고 입양하세요."}
        </p>
      </section>

      <section className="profile-menu-title">
        <h2>마이 메뉴</h2>
      </section>

      {profileMenuGroups.map((items, index) => (
        <ProfileMenuGroup items={items} key={index} />
      ))}

      <section className="profile-recent-posts">
        <h2>
          최근 게시글 <span>0</span>
        </h2>
        <p>아직 작성한 게시글이 없습니다.</p>
      </section>
    </main>
  );
}

export default Profile;
