import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="member-page">
      <section className="member-container">
        <h1>로그인</h1>

        <form>
          <div>
            <label htmlFor="userId">아이디</label>
            <input
              id="userId"
              name="userId"
              type="text"
              placeholder="아이디를 입력해주세요."
            />
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              name="password"
              type="password"
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