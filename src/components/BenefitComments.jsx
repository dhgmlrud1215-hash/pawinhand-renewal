function formatCommentDate(createdAt) {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

function getSavedComments(benefitId) {
  try {
    const savedComments = window.localStorage.getItem(
      `benefit-comments-${benefitId}`,
    );
    return savedComments ? JSON.parse(savedComments) : [];
  } catch {
    return [];
  }
}

function BenefitComments({ benefit }) {
  const savedComments = getSavedComments(benefit.id);
  const comments = [...(benefit.demoComments ?? []), ...savedComments];

  return (
    <section className="benefit-comments" aria-labelledby="benefit-comments-title">
      <h3 id="benefit-comments-title">{benefit.comments}개의 댓글</h3>

      <div className="benefit-comment-list">
        {comments.map((comment) => (
          <article className="benefit-comment" key={comment.id}>
            <img
              className="benefit-comment-avatar"
              src={comment.avatar || "/images/community/default-profile.jpg"}
              alt=""
            />

            <div className="benefit-comment-body">
              <div className="benefit-comment-top">
                <strong>{comment.author}</strong>
                <time dateTime={comment.createdAt}>
                  {formatCommentDate(comment.createdAt)}
                </time>
              </div>
              <p>{comment.content}</p>
            </div>
          </article>
        ))}
      </div>

      {benefit.comments > 5 && (
        <button className="benefit-comment-more" type="button">
          앱에서 댓글 더보기
        </button>
      )}
    </section>
  );
}

export default BenefitComments;
