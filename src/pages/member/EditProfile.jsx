import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Camera, ChevronLeft, X } from "lucide-react";
import { updateMember } from "../../api/memberApi";
import { useAuth } from "../../context/authStore";
import {
  DEFAULT_PROFILE_IMAGE,
  getMemberCoverImage,
  getMemberProfileImage,
} from "../../utils/memberStorage";

const interestOptions = [
  "입양",
  "후원",
  "임시보호",
  "구조",
  "봉사",
  "이동봉사",
];

function resizeImage(file, maxWidth, maxHeight, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error("이미지를 불러오지 못했습니다."));
    reader.onload = () => {
      const image = new Image();

      image.onerror = () => reject(new Error("사용할 수 없는 이미지입니다."));
      image.onload = () => {
        const scale = Math.min(
          maxWidth / image.width,
          maxHeight / image.height,
          1,
        );
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}

function EditProfile() {
  const navigate = useNavigate();
  const { member, saveProfile, signOut } = useAuth();
  const profileImageInput = useRef(null);
  const coverImageInput = useRef(null);
  const [form, setForm] = useState(() => ({
    nickname: member?.nickname || "",
    phone: member?.phone || "",
    region: member?.region || "모든 지역",
    interests: member?.interests || [],
    introduction:
      member?.introduction ||
      member?.bio ||
      member?.self_introduction ||
      "사지말고 입양하세요.",
    profileImage: member ? getMemberProfileImage(member) : DEFAULT_PROFILE_IMAGE,
    coverImage: member ? getMemberCoverImage(member) : "",
  }));
  const [imageError, setImageError] = useState("");

  if (!member) {
    return <Navigate to="/login" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const toggleInterest = (interest) => {
    setForm((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter((item) => item !== interest)
        : [...previous.interests, interest],
    }));
  };

  const handleImageChange = async (event, field) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("이미지 파일만 선택할 수 있습니다.");
      event.target.value = "";
      return;
    }

    try {
      setImageError("");
      const resizedImage =
        field === "profileImage"
          ? await resizeImage(file, 520, 520, 0.84)
          : await resizeImage(file, 1400, 700, 0.78);
      setForm((previous) => ({ ...previous, [field]: resizedImage }));
    } catch (error) {
      setImageError(error.message);
    } finally {
      event.target.value = "";
    }
  };

  const handleSave = async () => {
    if (!form.nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    let savedMember;

    try {
      savedMember = saveProfile({
        ...form,
        nickname: form.nickname.trim(),
        introduction: form.introduction.trim(),
      });
    } catch {
      alert("이미지 용량이 너무 큽니다. 다른 이미지를 선택해주세요.");
      return;
    }

    try {
      await updateMember({
        nickname: savedMember.nickname,
        email: savedMember.email,
        phone: savedMember.phone || "",
      });
    } catch {
      alert(
        "화면 정보는 저장했지만 서버 회원정보를 업데이트하지 못했습니다.",
      );
      navigate("/mypage/profile");
      return;
    }

    alert("프로필 정보가 수정되었습니다.");
    navigate("/mypage/profile");
  };

  const handleLogout = async () => {
    await signOut();
    alert("로그아웃되었습니다.");
    navigate("/");
  };

  return (
    <main className="profile-edit-page">
      <header className="profile-edit-topbar">
        <button type="button" onClick={() => navigate(-1)}>
          <ChevronLeft aria-hidden="true" />
          <span>{member.nickname || member.name}</span>
        </button>
        <h1>프로필</h1>
        <button type="button" onClick={handleSave}>
          저장
        </button>
      </header>

      <section
        className={`profile-edit-images${form.coverImage ? "" : " is-empty"}`}
      >
        {form.coverImage && (
          <img src={form.coverImage} alt="커버 이미지 미리보기" />
        )}
        <div className="profile-edit-image-shade" />
        {!form.coverImage && (
          <p className="profile-edit-cover-placeholder">
            커버 사진을 설정해보세요.
          </p>
        )}

        <div className="profile-edit-point">
          <span>P</span>
          <b>{member.point || 0}</b>
        </div>

        <button
          className="profile-edit-cover-button"
          type="button"
          onClick={() => coverImageInput.current?.click()}
          aria-label="커버 사진 변경"
        >
          <Camera strokeWidth={2.2} aria-hidden="true" />
        </button>

        <button
          className="profile-edit-avatar-button"
          type="button"
          onClick={() => profileImageInput.current?.click()}
          aria-label="프로필 사진 변경"
        >
          <img src={form.profileImage} alt="프로필 이미지 미리보기" />
          <span>
            <Camera strokeWidth={2.2} aria-hidden="true" />
          </span>
        </button>

        <strong className="profile-edit-email">{member.email}</strong>

        <input
          ref={coverImageInput}
          type="file"
          accept="image/*"
          onChange={(event) => handleImageChange(event, "coverImage")}
        />
        <input
          ref={profileImageInput}
          type="file"
          accept="image/*"
          onChange={(event) => handleImageChange(event, "profileImage")}
        />
      </section>

      {imageError && <p className="profile-edit-error">{imageError}</p>}

      <section className="profile-edit-form">
        <div className="profile-edit-pet-row">
          <h2>반려동물</h2>
          <button
            type="button"
            onClick={() => alert("반려동물 등록 기능을 준비 중입니다.")}
          >
            반려동물 등록
          </button>
        </div>

        <div className="profile-edit-field">
          <label htmlFor="profile-nickname">닉네임</label>
          <div className="profile-edit-input-with-button">
            <input
              id="profile-nickname"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              maxLength={20}
            />
            {form.nickname && (
              <button
                type="button"
                onClick={() =>
                  setForm((previous) => ({ ...previous, nickname: "" }))
                }
                aria-label="닉네임 지우기"
              >
                <X aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="profile-edit-field">
          <label htmlFor="profile-phone">휴대폰</label>
          <div className="profile-edit-phone-row">
            <input
              id="profile-phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="미인증"
              inputMode="tel"
            />
            <button
              type="button"
              onClick={() => alert("휴대폰 인증 기능을 준비 중입니다.")}
            >
              인증하기
            </button>
          </div>
        </div>

        <div className="profile-edit-field">
          <label htmlFor="profile-region">관심지역</label>
          <select
            id="profile-region"
            name="region"
            value={form.region}
            onChange={handleChange}
          >
            <option>모든 지역</option>
            <option>서울특별시</option>
            <option>경기도</option>
            <option>인천광역시</option>
            <option>부산광역시</option>
            <option>대구광역시</option>
            <option>대전광역시</option>
            <option>울산광역시</option>
            <option>세종특별자치시</option>
            <option>강원특별자치도</option>
            <option>충청북도</option>
            <option>충청남도</option>
            <option>전북특별자치도</option>
            <option>전남광주통합특별시</option>
            <option>경상북도</option>
            <option>경상남도</option>
            <option>제주특별자치도</option>
          </select>
        </div>

        <fieldset className="profile-edit-interests">
          <legend>관심활동</legend>
          <div>
            {interestOptions.map((interest) => (
              <label key={interest}>
                <input
                  type="checkbox"
                  checked={form.interests.includes(interest)}
                  onChange={() => toggleInterest(interest)}
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="profile-edit-field">
          <label htmlFor="profile-introduction">소개글</label>
          <textarea
            id="profile-introduction"
            name="introduction"
            value={form.introduction}
            onChange={handleChange}
            rows={7}
            maxLength={120}
            placeholder="나를 소개하는 글을 작성해주세요."
          />
        </div>

        <div className="profile-edit-account-links">
          <button
            type="button"
            onClick={() => alert("비밀번호 변경 기능을 준비 중입니다.")}
          >
            비밀번호 변경
          </button>
          <span aria-hidden="true">|</span>
          <button
            type="button"
            onClick={() => alert("회원 탈퇴 기능을 준비 중입니다.")}
          >
            회원 탈퇴
          </button>
        </div>
      </section>

      <button
        className="profile-edit-logout"
        type="button"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </main>
  );
}

export default EditProfile;
