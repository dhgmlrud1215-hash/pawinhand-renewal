function MemberInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  children,
}) {
  return (
    <div className="member-field">
      <label htmlFor={name}>{label}</label>

      <div className="member-input-row">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />

        {children}
      </div>

      {error && <p className="member-error">{error}</p>}
    </div>
  );
}

export default MemberInput;