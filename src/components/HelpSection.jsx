import { Link } from "react-router-dom";
import animals from "../data/animals";

function HelpSection() {
  const recommendedAnimals = animals.slice(0, 7);

  return (
    <section className="help-section home-section">
      <div className="section-title">
        <h2>새로운 가족을 기다리는 아이들</h2>
        <Link to="/animals" className="more-btn">전체보기</Link>
      </div>

      <div className="pet-list pet-list-recommended">
        {recommendedAnimals.map((animal) => (
          <Link
            to={`/animal/${animal.id}`}
            className="pet-card"
            key={animal.id}
          >
            <div className="pet-card-image">
              <img src={animal.image} alt={animal.name} />
              <span className="recommend-badge">추천</span>
              <span className="pet-location">● {animal.city}</span>
            </div>
            <strong>{animal.petName || animal.breed}</strong>
            <p>{animal.gender} · {animal.birthYear}년생 · {animal.weight}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HelpSection;
