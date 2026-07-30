import { useState } from "react";
import { useParams } from "react-router-dom";
import animals from "../data/animals";
import { shelters } from "../data/shelters";

function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find((item) => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!animal) return <p className="animal-not-found">동물 정보를 찾을 수 없습니다.</p>;

  const galleryItems = [
    ...(animal.images || []).map((src) => ({ type: "image", src })),
    ...(animal.video ? [{ type: "video", src: animal.video }] : []),
  ];
  const currentItem = galleryItems[currentIndex];
  const shelter = shelters.find((item) => item.name === animal.shelterName);

  return (
    <main className="animal-detail animal-detail-simple">
      <div className="animal-shelter-heading">
        <span className="animal-shelter-icon" aria-hidden="true">
          <img src="/icons/shelter2.png" alt="" />
        </span>
        <div className="animal-shelter-name">
          <strong>{animal.shelterName}</strong>
          {shelter?.verified && (
            <span className="animal-shelter-badge" aria-label="인증 보호소">
              ✓
            </span>
          )}
        </div>
      </div>

      <section className="animal-gallery">
        <div className="animal-gallery-main">
          {currentItem?.type === "video" ? (
            <video controls className="animal-main-img">
              <source src={currentItem.src} type="video/mp4" />
            </video>
          ) : (
            <img src={currentItem?.src || animal.image} alt={animal.name} className="animal-main-img" />
          )}

          {galleryItems.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-arrow prev"
                aria-label="이전 미디어"
                onClick={() => setCurrentIndex(currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1)}
              >‹</button>
              <button
                type="button"
                className="gallery-arrow next"
                aria-label="다음 미디어"
                onClick={() => setCurrentIndex(currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1)}
              >›</button>
              <span className="image-count">{currentIndex + 1} / {galleryItems.length}</span>
            </>
          )}
        </div>
      </section>

      <section className="animal-basic-card">
        <div className="animal-basic-title">
          <h2>{animal.petName || animal.breed}</h2>
          <span>입양가능</span>
        </div>

        <dl className="animal-basic-list">
          <div><dt>품종</dt><dd>{animal.breed}</dd></div>
          <div><dt>성별</dt><dd>{animal.gender} (중성화 {animal.neutered})</dd></div>
          <div><dt>나이</dt><dd>{animal.birthYear}년생</dd></div>
          <div><dt>체중</dt><dd>{animal.weight}</dd></div>
          <div><dt>색상</dt><dd>{animal.color}</dd></div>
          <div><dt>지역</dt><dd>{animal.region} {animal.city}</dd></div>
          <div><dt>공고번호</dt><dd className="point">{animal.noticeNumber}</dd></div>
          <div><dt>공고기간</dt><dd>{animal.noticePeriod}</dd></div>
          <div><dt>발견장소</dt><dd>{animal.foundPlace}</dd></div>
          <div><dt>특이사항</dt><dd>{animal.specialNote}</dd></div>
        </dl>

        <a className="adoption-contact-button" href={`tel:${animal.shelterTel}`}>
          입양 문의하기
        </a>
      </section>

      {animal.extraSupport?.length > 0 && (
        <section className="detail-section simple-extra-support">
          <h3>추가지원</h3>
          {animal.extraSupport.map((item) => (
            <div className="extra-support" key={item.title}>
              <img src={item.logo} alt={item.company} />
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default AnimalDetail;
