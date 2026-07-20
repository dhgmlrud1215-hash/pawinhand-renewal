function LostFilter({
  reportType,
  setReportType,
  region,
  setRegion,
  animal,
  setAnimal,
  sortOrder,
  setSortOrder,
  viewMode,
  setViewMode,
  regions,
  animals,
}) {
  return (
    <>
      <div className="lost-type-tabs">
        {["전체", "실종", "목격", "보호중"].map((type) => (
          <button
            type="button"
            key={type}
            className={reportType === type ? "active" : ""}
            aria-pressed={reportType === type}
            onClick={() => setReportType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="lost-filter">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
        </select>

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {regions.map((item) => (
            <option key={item} value={item}>
              {item === "전체" ? "모든 지역" : item}
            </option>
          ))}
        </select>

        <select
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          {animals.map((item) => (
            <option key={item} value={item}>
              {item === "전체" ? "모든 동물" : item}
            </option>
          ))}
        </select>
      </div>

      <div className="lost-view-toggle">
        <button
          type="button"
          className={viewMode === "card" ? "active" : ""}
          onClick={() => setViewMode("card")}
        >
          카드 보기
        </button>

        <button
          type="button"
          className={viewMode === "map" ? "active" : ""}
          onClick={() => setViewMode("map")}
        >
          지도 보기
        </button>
      </div>
    </>
  );
}

export default LostFilter;
