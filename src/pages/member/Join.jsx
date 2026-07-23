import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MemberForm from "../../components/member/MemberForm";
import MemberInput from "../../components/member/MemberInput";
import PasswordInput from "../../components/member/PasswordInput";
import AgreementList from "../../components/member/AgreementList";

import "../../css/member.css";

const initialForm = {
  userId: "",
  password: "",
  passwordConfirm: "",
  name: "",
  nickname: "",
  email: "",
  phone: "",
};

const initialAgreements = {
  terms: false,
  privacy: false,
  marketing: false,
};

function Join() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [agreements, setAgreements] = useState(initialAgreements);
  const [errors, setErrors] = useState({});
  const [idChecked, setIdChecked] = useState(false);
  const [idMessage, setIdMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "userId") {
      setIdChecked(false);
      setIdMessage("");
    }
  };

  const handleAgreementChange = (event) => {
    const { name, checked } = event.target;

    setAgreements((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleToggleAll = (event) => {
    const { checked } = event.target;

    setAgreements({
      terms: checked,
      privacy: checked,
      marketing: checked,
    });
  };

  const handleIdCheck = async () => {
    const userId = form.userId.trim();

    if (!userId) {
      setErrors((prev) => ({
        ...prev,
        userId: "아이디를 입력해주세요.",
      }));
      return;
    }

    // PHP API 연결 전 임시 처리
    setIdChecked(true);
    setIdMessage("사용 가능한 아이디입니다.");
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.userId.trim()) {
      nextErrors.userId = "아이디를 입력해주세요.";
    } else if (!idChecked) {
      nextErrors.userId = "아이디 중복 확인을 해주세요.";
    }

    if (!form.password) {
      nextErrors.password = "비밀번호를 입력해주세요.";
    } else if (form.password.length < 8) {
      nextErrors.password = "비밀번호는 8자 이상 입력해주세요.";
    }

    if (!form.passwordConfirm) {
      nextErrors.passwordConfirm = "비밀번호를 한 번 더 입력해주세요.";
    } else if (form.password !== form.passwordConfirm) {
      nextErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    if (!form.name.trim()) {
      nextErrors.name = "이름을 입력해주세요.";
    }

    if (!form.nickname.trim()) {
      nextErrors.nickname = "닉네임을 입력해주세요.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "이메일을 입력해주세요.";
    }

    if (!agreements.terms || !agreements.privacy) {
      nextErrors.agreement = "필수 약관에 동의해주세요.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    // PHP API 연결 전 확인용
    console.log({
      ...form,
      agreements,
    });

    alert("회원가입 입력 확인이 완료되었습니다.");
    navigate("/login");
  };

  return (
    <MemberForm
      title="회원가입"
      description="포인핸드 회원이 되어 다양한 서비스를 이용해보세요."
      onSubmit={handleSubmit}
      submitText="회원가입"
    >
      <MemberInput
        label="아이디"
        name="userId"
        value={form.userId}
        onChange={handleChange}
        placeholder="아이디를 입력해주세요."
        error={errors.userId}
        autoComplete="username"
      >
        <button
          type="button"
          className="member-side-button"
          onClick={handleIdCheck}
        >
          중복 확인
        </button>
      </MemberInput>

      {idMessage && <p className="member-success">{idMessage}</p>}

      <PasswordInput
        label="비밀번호"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="8자 이상 입력해주세요."
        error={errors.password}
        autoComplete="new-password"
      />

      <PasswordInput
        label="비밀번호 확인"
        name="passwordConfirm"
        value={form.passwordConfirm}
        onChange={handleChange}
        placeholder="비밀번호를 다시 입력해주세요."
        error={errors.passwordConfirm}
        autoComplete="new-password"
      />

      <MemberInput
        label="이름"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="이름을 입력해주세요."
        error={errors.name}
        autoComplete="name"
      />

      <MemberInput
        label="닉네임"
        name="nickname"
        value={form.nickname}
        onChange={handleChange}
        placeholder="닉네임을 입력해주세요."
        error={errors.nickname}
      />

      <MemberInput
        label="이메일"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="example@email.com"
        error={errors.email}
        autoComplete="email"
      />

      <MemberInput
        label="휴대폰 번호"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        placeholder="010-0000-0000"
        autoComplete="tel"
      />

      <AgreementList
        agreements={agreements}
        onChange={handleAgreementChange}
        onToggleAll={handleToggleAll}
      />

      {errors.agreement && (
        <p className="member-error">{errors.agreement}</p>
      )}

      <p className="member-link-text">
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </p>
    </MemberForm>
  );
}

export default Join;