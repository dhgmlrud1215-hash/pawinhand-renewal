function MemberForm({
  title,
  description,
  onSubmit,
  children,
  submitText,
  disabled = false,
}) {
  return (
    <main className="member-page">
      <section className="member-container">
        <div className="member-title">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>

        <form className="member-form" onSubmit={onSubmit}>
          {children}

          <button
            type="submit"
            className="member-submit"
            disabled={disabled}
          >
            {submitText}
          </button>
        </form>
      </section>
    </main>
  );
}

export default MemberForm;