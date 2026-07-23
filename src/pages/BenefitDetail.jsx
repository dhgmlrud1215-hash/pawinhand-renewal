import { Link, useParams } from "react-router-dom";
import { getBenefitById } from "../data/benefits";
import BenefitComments from "../components/BenefitComments";

function BenefitContent({ content }) {
  if (typeof content === "string") {
    return <p>{content}</p>;
  }

  return (
    <div className="benefit-info">
      {content.application && (
        <section className="benefit-info-section">
          <h3>{content.application.title}</h3>
          <a
            className="benefit-apply-button"
            href={content.application.url}
            target="_blank"
            rel="noreferrer"
          >
            신청하기
            <span aria-hidden="true">→</span>
          </a>
        </section>
      )}

      {content.shipping && (
        <section className="benefit-info-section">
          <h3>{content.shipping.title}</h3>
          <p>{content.shipping.description}</p>
          <a
            className="benefit-text-link"
            href={content.shipping.url}
            target="_blank"
            rel="noreferrer"
          >
            선물 배송 목록 확인하기
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      )}

      {content.announcement && (
        <section className="benefit-info-section">
          <h3>당첨자 발표</h3>
          <a
            className="benefit-announcement"
            href={content.announcement.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>{content.announcement.title}</span>
            <strong aria-hidden="true">↗</strong>
          </a>
        </section>
      )}

      {(content.notices?.length > 0 || content.contact) && (
        <section className="benefit-info-section benefit-notice">
          {content.noticeTitle && <h3>{content.noticeTitle}</h3>}

          {content.notices?.length > 0 && (
            <ul>
              {content.notices.map((notice) => (
                <li key={notice}>{notice}</li>
              ))}
            </ul>
          )}

          {content.contact && (
            <p className="benefit-contact">
              <strong>{content.contact.label}</strong>
              <a href={`tel:${content.contact.phone.replaceAll("-", "")}`}>
                {content.contact.phone}
              </a>
            </p>
          )}
        </section>
      )}
    </div>
  );
}

function BenefitDetail() {
  const { id } = useParams();
  const benefit = getBenefitById(id);

  if (!benefit) {
    return (
      <main className="benefit-detail benefit-not-found">
        <h2>혜택 정보를 찾을 수 없습니다.</h2>
        <Link to="/benefit">목록으로 돌아가기</Link>
      </main>
    );
  }

  return (
    <main className="benefit-detail">
      <header className="benefit-detail-header">
        <Link to="/benefit" aria-label="혜택 목록으로 돌아가기">
          ←
        </Link>
        <div>
          <div className="benefit-detail-title">
            <span
              className={`benefit-status ${
                benefit.status === "종료" ? "benefit-status-ended" : ""
              }`}
            >
              {benefit.status}
            </span>
            <h2>{benefit.title}</h2>
          </div>
          <p>{benefit.period}</p>
        </div>
      </header>

      <article className="benefit-detail-content">
        <img src={benefit.detailImage} alt={`${benefit.title} 상세 안내`} />
        <BenefitContent content={benefit.content} />
      </article>

      <BenefitComments benefit={benefit} />

      <Link className="benefit-list-button" to="/benefit">
        목록으로
      </Link>
    </main>
  );
}

export default BenefitDetail;
