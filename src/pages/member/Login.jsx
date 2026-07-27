import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginMember } from "../../api/memberApi";
import { useAuth } from "../../context/authContext";

function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userId.trim() || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const data = await loginMember(userId, password);

      alert(data.message);

      if (data.success) {
        signIn(data.member);
        navigate("/mypage");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <main className="member-page">
      <section className="member-container">
        <h1>로그인</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">아이디</label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
              placeholder="아이디를 입력해주세요."
            />
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>

          <button type="submit">로그인</button>
        </form>

        <Link to="/join">회원가입</Link>
      </section>
    </main>
  );
}

export default Login;
