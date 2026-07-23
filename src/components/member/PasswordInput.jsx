import { useState } from "react";
import MemberInput from "./MemberInput";

function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  autoComplete = "current-password",
}) {
  const [visible, setVisible] = useState(false);

  return (
    <MemberInput
      label={label}
      name={name}
      type={visible ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      autoComplete={autoComplete}
    >
      <button
        type="button"
        className="password-toggle"
        onClick={() => setVisible((prev) => !prev)}
      >
        {visible ? "숨기기" : "보기"}
      </button>
    </MemberInput>
  );
}

export default PasswordInput;