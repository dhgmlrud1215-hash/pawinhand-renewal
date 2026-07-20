import { useMemo, useState } from "react";

import LostSearch from "../components/LostSearch";
import LostFilter from "../components/LostFilter";
import LostCard from "../components/LostCard";
import LostMap from "../components/LostMap";

import { lostReports } from "../data/lostReports";

function getPrimaryRegion(fullRegion) {
  if (!fullRegion) return "";

  return fullRegion.trim().split(/\s+/)[0];
}

function LostReport() {
  const [searchText, setSearchText] = useState("");
  const [reportType, setReportType] = useState("전체");
  const [region, setRegion] = useState("전체");
  const [animal, setAnimal] = useState("전체");
  const [sortOrder, setSortOrder] = useState("최신순");
  const [viewMode, setViewMode] = useState("card");

  const regions = [
    "전체",
    ...new Set(
      lostReports
        .map((report) => report.region)
        .filter(Boolean)
        .map(getPrimaryRegion)
    ),
  ];

  const animals = [
    "전체",
    ...new Set(lostReports.map((report) => report.animal)),
  ];

  const activeRegion = regions.includes(region) ? region : "전체";
  const activeAnimal = animals.includes(animal) ? animal : "전체";

  const filteredReports = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();

    const result = lostReports.filter((report) => {
      const matchesType =
        reportType === "전체" ||
        (reportType === "보호중"
          ? report.currentStatus?.includes("보호")
          : report.reportType === reportType);

      const matchesRegion =
        activeRegion === "전체" ||
        getPrimaryRegion(report.region) === activeRegion;

      const matchesAnimal =
        activeAnimal === "전체" ||
        report.animal === activeAnimal;

      const searchableText = [
        report.breed,
        report.animal,
        report.region,
        report.location,
        report.color,
        report.feature,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        keyword === "" ||
        searchableText.includes(keyword);

      return (
        matchesType &&
        matchesRegion &&
        matchesAnimal &&
        matchesSearch
      );
    });

    return [...result].sort((a, b) => {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();

      if (sortOrder === "오래된순") {
        return firstDate - secondDate;
      }

      return secondDate - firstDate;
    });
  }, [
    searchText,
    reportType,
    activeRegion,
    activeAnimal,
    sortOrder,
  ]);

  return (
    <main className="lost-page">
      <div className="lost-page-inner">
        <div className="lost-page-title">
          <h1>실종 / 제보</h1>
          <p>
            주변의 실종 동물과 목격 제보를 확인해보세요.
          </p>
        </div>

        <LostSearch
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <LostFilter
          reportType={reportType}
          setReportType={setReportType}
          region={activeRegion}
          setRegion={setRegion}
          animal={activeAnimal}
          setAnimal={setAnimal}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewMode={viewMode}
          setViewMode={setViewMode}
          regions={regions}
          animals={animals}
        />

        <div className="lost-result-header">
          <strong>
            총 {filteredReports.length}건
          </strong>
        </div>

        {filteredReports.length === 0 ? (
          <div className="lost-empty">
            조건에 맞는 제보가 없습니다.
          </div>
        ) : viewMode === "card" ? (
          <div className="lost-list">
            {filteredReports.map((report) => (
              <LostCard
                key={report.id}
                report={report}
              />
            ))}
          </div>
        ) : (
          <LostMap reports={filteredReports} />
        )}
      </div>
    </main>
  );
}

export default LostReport;
