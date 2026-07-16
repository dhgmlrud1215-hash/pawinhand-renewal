function AnimalStats() {
  const today = new Date();
  const formattedDate = [
    String(today.getFullYear()).slice(-2),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join(".");

  const animalStats = {
    date: formattedDate,
    rescue: 213,
    adoptionRate: 24.9,
    euthanasiaRate: 11.7,
  };

  return (
    <section className="animal-stats home-section">
      <div className="animal-stats-top">
        <strong>{animalStats.date} 유기동물 통계</strong>

        <a href="/statistics">
          자세히 보기 <span>›</span>
        </a>
      </div>

      <div className="animal-stats-list">
        <div className="animal-stat-item">
          <span>구조</span>

          <strong>
            <em>{animalStats.rescue}</em>
            마리
          </strong>
        </div>

        <div className="animal-stat-item">
          <span>입양률</span>

          <strong>
            <em>{animalStats.adoptionRate}</em>
            %
          </strong>
        </div>

        <div className="animal-stat-item">
          <span>안락사율</span>

          <strong>
            <em>{animalStats.euthanasiaRate}</em>
            %
          </strong>
        </div>
      </div>
    </section>
  );
}

export default AnimalStats;
