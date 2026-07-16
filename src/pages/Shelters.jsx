import { useState } from "react";
import ShelterMap from "../components/ShelterMap";
import ShelterList from "../components/ShelterList";
import { shelters } from "../data/shelters";

function Shelters() {
  const [viewMode, setViewMode] = useState("map");
  const [selectedRegion, setSelectedRegion] = useState("전체");

  const regions = [
    "전체",
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "대전",
    "세종",
    "전북",
    "전남",
    "광주",
    "경북",
    "경남",
    "대구",
    "부산",
    "울산",
    "제주",
  ];

  const filteredShelters =
    selectedRegion === "전체"
      ? shelters
      : shelters.filter((shelter) =>
          shelter.region.startsWith(selectedRegion)
        );

  return (
    <main className="shelter-page" id="nearby-shelters">
      <div className="shelter-page-inner">
        <div className="shelter-page-head">
          <h1>내 주변 보호소 찾기</h1>

          <button
            type="button"
            className="view-change-button"
            onClick={() =>
              setViewMode((prev) =>
                prev === "map" ? "list" : "map"
              )
            }
          >
            {viewMode === "map" ? "목록보기" : "지도보기"}
          </button>
        </div>

        <div className="shelter-region-list">
          {regions.map((region) => (
            <button
              type="button"
              key={region}
              className={
                selectedRegion === region ? "active" : ""
              }
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        <p className="shelter-result">
          {selectedRegion === "전체"
            ? `전국 검색 결과 ${filteredShelters.length}개`
            : `${selectedRegion} 검색 결과 ${filteredShelters.length}개`}
        </p>

        {viewMode === "map" ? (
          <ShelterMap shelters={filteredShelters} />
        ) : (
          <ShelterList shelters={filteredShelters} />
        )}
      </div>
    </main>
  );
}

export default Shelters;
