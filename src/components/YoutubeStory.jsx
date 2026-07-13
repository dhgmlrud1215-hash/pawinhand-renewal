import { VideosList } from "../data/videos";

function Youtubestory() {
  return (
    <section className="youtube-section home-section">
      <div className="section-title">
        <h2>포인핸드 스토리</h2>

        <a
          href="https://www.youtube.com/@pawinhand_official"
          target="_blank"
          rel="noreferrer"
          className="more-btn"
        >
          전체보기
        </a>
      </div>

      <div className="youtube-list">
        {VideosList.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="youtube-card"
            key={item.id}
          >
            <div className="youtube-thumb">
              <img src={item.image} alt={item.title} />
              <span>▶</span>
            </div>

            <strong>{item.title}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Youtubestory;
