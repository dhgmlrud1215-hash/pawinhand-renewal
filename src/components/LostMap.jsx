import { useEffect, useRef, useState } from "react";

function LostMap({ reports }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const reportBoundsRef = useRef(null);
  const appKey = import.meta.env.VITE_KAKAO_MAP_KEY;
  const [mapStatus, setMapStatus] = useState(
    appKey ? "loading" : "error"
  );
  const [mapError, setMapError] = useState(
    appKey ? "" : "카카오맵 JavaScript 키가 설정되지 않았습니다."
  );
  const [mapLevel, setMapLevel] = useState(null);
  const [isZooming, setIsZooming] = useState(false);

  const showAllReportLocations = () => {
    if (mapInstanceRef.current && reportBoundsRef.current) {
      mapInstanceRef.current.setBounds(reportBoundsRef.current);
    }
  };

  useEffect(() => {
    if (!appKey) return;

    const mapContainer = mapRef.current;
    const markers = [];
    const infoWindows = [];
    let map = null;
    let wheelDelta = 0;
    let wheelTimerId = null;
    let zoomFeedbackTimerId = null;
    let handleWheel = null;
    let handleZoomChanged = null;

    const createMap = () => {
      if (!window.kakao?.maps || !mapContainer) {
        setMapStatus("error");
        setMapError("카카오맵 SDK를 불러오지 못했습니다.");
        return;
      }

      map = new window.kakao.maps.Map(mapContainer, {
        center: new window.kakao.maps.LatLng(36.5, 127.8),
        level: 13,
        scrollwheel: false,
        tileAnimation: true,
        keyboardShortcuts: true,
      });
      mapInstanceRef.current = map;

      handleZoomChanged = () => {
        setMapLevel(map.getLevel());
        setIsZooming(true);

        window.clearTimeout(zoomFeedbackTimerId);
        zoomFeedbackTimerId = window.setTimeout(() => {
          setIsZooming(false);
        }, 450);
      };

      handleWheel = (event) => {
        event.preventDefault();
        wheelDelta += event.deltaY;

        if (wheelTimerId !== null) return;

        wheelTimerId = window.setTimeout(() => {
          const direction = wheelDelta > 0 ? 1 : -1;
          const nextLevel = Math.min(
            14,
            Math.max(1, map.getLevel() + direction)
          );

          wheelDelta = 0;

          if (nextLevel !== map.getLevel()) {
            map.setLevel(nextLevel, {
              animate: { duration: 260 },
            });
          }

          window.setTimeout(() => {
            wheelTimerId = null;
          }, 260);
        }, 60);
      };

      window.kakao.maps.event.addListener(
        map,
        "zoom_changed",
        handleZoomChanged
      );
      mapContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });

      const bounds = new window.kakao.maps.LatLngBounds();

      reports.forEach((report) => {
        if (!Number.isFinite(report.latitude) || !Number.isFinite(report.longitude)) {
          return;
        }

        const position = new window.kakao.maps.LatLng(
          report.latitude,
          report.longitude
        );
        const marker = new window.kakao.maps.Marker({ map, position });
        const content = document.createElement("div");

        content.className = "lost-map-info";
        content.innerHTML = `
          <div class="lost-map-info-inner">
            <div class="lost-map-info-badges">
              <span class="lost-map-type ${
                report.reportType === "실종" ? "missing" : "sighting"
              }">${report.reportType ?? ""}</span>
              ${
                report.currentStatus
                  ? `<span class="lost-map-status ${
                      report.currentStatus.includes("보호")
                        ? "protection"
                        : report.currentStatus === "실종"
                          ? "missing"
                          : "sighting"
                    }">${report.currentStatus}</span>`
                  : ""
              }
            </div>
            <strong class="lost-map-breed">${report.breed ?? "품종 미상"}</strong>
            <p class="lost-map-location">${report.location ?? ""}</p>
            <p class="lost-map-date">${report.date ?? ""}</p>
          </div>
        `;

        const infoWindow = new window.kakao.maps.InfoWindow({
          content,
          removable: true,
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          infoWindows.forEach((item) => item.close());
          infoWindow.open(map, marker);
        });

        markers.push(marker);
        infoWindows.push(infoWindow);
        bounds.extend(position);
      });

      if (markers.length > 0) {
        reportBoundsRef.current = bounds;
        map.setBounds(bounds);
      }

      setMapLevel(map.getLevel());
      setMapStatus("ready");
      setMapError("");
    };

    const initializeMap = () => {
      if (window.kakao?.maps) {
        window.kakao.maps.load(createMap);
      } else {
        setMapStatus("error");
        setMapError("카카오맵 SDK 인증에 실패했습니다.");
      }
    };

    if (window.kakao?.maps) {
      initializeMap();
    } else {
      const existingScript = document.querySelector(
        'script[src*="//dapi.kakao.com/v2/maps/sdk.js"]'
      );

      if (existingScript) {
        existingScript.addEventListener("load", initializeMap, { once: true });
      } else {
        const script = document.createElement("script");

        script.src =
          `https://dapi.kakao.com/v2/maps/sdk.js` +
          `?appkey=${appKey}&autoload=false`;
        script.async = true;
        script.dataset.kakaoMap = "true";
        script.addEventListener("load", initializeMap, { once: true });
        script.addEventListener(
          "error",
          () => {
            setMapStatus("error");
            setMapError("카카오맵 스크립트 로드에 실패했습니다.");
          },
          { once: true }
        );

        document.head.appendChild(script);
      }
    }

    return () => {
      window.clearTimeout(wheelTimerId);
      window.clearTimeout(zoomFeedbackTimerId);

      if (mapContainer && handleWheel) {
        mapContainer.removeEventListener("wheel", handleWheel);
      }

      if (map && handleZoomChanged && window.kakao?.maps) {
        window.kakao.maps.event.removeListener(
          map,
          "zoom_changed",
          handleZoomChanged
        );
      }

      markers.forEach((marker) => marker.setMap(null));
      infoWindows.forEach((infoWindow) => infoWindow.close());
      mapInstanceRef.current = null;
      reportBoundsRef.current = null;
    };
  }, [appKey, reports]);

  return (
    <div className="lost-map">
      <div ref={mapRef} className="lost-map-area" />
      {mapStatus === "ready" && mapLevel !== null && (
        <>
          <div
            className={`lost-map-zoom-feedback ${isZooming ? "active" : ""}`}
            aria-live="polite"
          >
            {isZooming ? "보기 범위 조정 중" : "마우스 휠로 범위 조정"}
            <span>{mapLevel} / 14</span>
          </div>
          {reports.length > 1 && (
            <button
              type="button"
              className="lost-map-show-all"
              onClick={showAllReportLocations}
            >
              전체 위치 보기
            </button>
          )}
        </>
      )}
      {mapStatus === "loading" && (
        <div className="lost-map-message">지도를 불러오는 중입니다.</div>
      )}
      {mapStatus === "error" && (
        <div className="lost-map-message lost-map-error" role="alert">
          <strong>지도를 표시할 수 없습니다.</strong>
          <span>{mapError}</span>
          <small>카카오 개발자 콘솔의 JavaScript SDK 도메인을 확인해주세요.</small>
        </div>
      )}
    </div>
  );
}

export default LostMap;
