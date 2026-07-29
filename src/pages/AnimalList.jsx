import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PetFilter from "../components/PetFilter";
import animals from "../data/animals";

const initialFilters = {
  지역: "모든 지역",
  동물: "전체",
  성별: "전체",
  중성화: "전체",
};

function AnimalList() {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  const filteredAnimals = useMemo(
    () =>
      animals.filter((animal) => {
        const regionMatches =
          selectedFilters.지역 === "모든 지역" ||
          animal.region === selectedFilters.지역;
        const typeMatches =
          selectedFilters.동물 === "전체" ||
          animal.type === selectedFilters.동물;
        const genderMatches =
          selectedFilters.성별 === "전체" ||
          animal.gender === selectedFilters.성별;
        const neuteredMatches =
          selectedFilters.중성화 === "전체" ||
          animal.neutered === selectedFilters.중성화;

        return regionMatches && typeMatches && genderMatches && neuteredMatches;
      }),
    [selectedFilters]
  );

  return (
    <main className="animal-list-page">
      <div className="animal-list-header">
        <button type="button" onClick={() => window.history.back()} aria-label="뒤로가기">
          ‹
        </button>
        <h2>입양동물 전체</h2>
        <span>{filteredAnimals.length}마리</span>
      </div>

      <PetFilter
        selectedFilters={selectedFilters}
        onChange={setSelectedFilters}
      />

      <div className="animal-list-grid">
        {filteredAnimals.map((animal) => (
          <Link to={`/animal/${animal.id}`} className="animal-list-card" key={animal.id}>
            <div className="animal-list-image">
              <img src={animal.image} alt={animal.name} />
              <span className="pet-location">● {animal.region} {animal.city}</span>
            </div>
            <div className="animal-list-name">
              <strong>{animal.petName || animal.breed}</strong>
              <span aria-hidden="true">♡</span>
            </div>
            <p>{animal.gender} · {animal.birthYear}년생 · {animal.weight}</p>
          </Link>
        ))}
      </div>

      {filteredAnimals.length === 0 && (
        <p className="filter-empty">조건에 맞는 아이가 없습니다.</p>
      )}
    </main>
  );
}

export default AnimalList;
