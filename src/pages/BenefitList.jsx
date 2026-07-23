import { Link } from "react-router-dom";
import { benefits } from "../data/benefits";

function BenefitList() {
  return (
    <main className="benefit-page">
      <div className="benefit-page-heading">
        <span>PAWINHAND BENEFIT</span>
        <h2>지원/혜택</h2>
        <p>포인핸드가 준비한 입양 가족을 위한 혜택을 확인해 보세요.</p>
      </div>

      <div className="benefit-list">
        {benefits.map((benefit) => (
          <Link
            className="benefit-card"
            to={`/benefit/${benefit.id}`}
            key={benefit.id}
          >
            <img src={benefit.thumbnail} alt="" />

            <div className="benefit-card-info">
              <h3>
                <span
                  className={`benefit-status ${
                    benefit.status === "종료" ? "benefit-status-ended" : ""
                  }`}
                >
                  {benefit.status}
                </span>
                {benefit.title}
              </h3>
              <p>{benefit.period}</p>
              <div className="benefit-card-meta" aria-label="게시글 반응">
                <span>좋아요 {benefit.likes}</span>
                <span>공유 {benefit.shares}</span>
                <span>댓글 {benefit.comments}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BenefitList;
