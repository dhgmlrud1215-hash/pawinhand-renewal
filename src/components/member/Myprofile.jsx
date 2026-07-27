import { Link } from "react-router-dom";
import { getMemberProfileImage } from "../../utils/memberStorage";

function Myprofile({ member, onLogout }) {
  if (!member) {
    return (
      <h1>
        <Link to="/login">로그인</Link> 해주세요.
      </h1>
    );
  }

  const memberName = member.nickname || member.name || member.user_id;

  return (
    <div className="mypage-member-heading">
      <div className="mypage-member-avatar">
        <img
          src={getMemberProfileImage(member)}
          alt={`${memberName} 프로필`}
        />
      </div>
      <div>
        <h1>{memberName}님, 반가워요.</h1>
        <p>{member.email}</p>
      </div>
      <button
        className="mypage-logout-button"
        type="button"
        onClick={onLogout}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Myprofile;
