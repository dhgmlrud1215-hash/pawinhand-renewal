import { useAuth } from "../context/authStore";

function NotificationPanel({ onClose }) {
    const { member } = useAuth();

    return (
        <>
            <button 
                type="button"
                className="notification-backdrop"
                aria-label="알림 닫기"
                onClick={onClose}
            />

            <div className="notification-panel">
                <div className="notification-header">
                    <h2>알림</h2>

                    {member && (
                        <button type="button" className="read-all-btn">
                            모두 읽음
                        </button>
                    )}
                </div>

                {member ? (
                  <ul className="notification-list">
                    <li className="notification-item unread">
                        <button type="button">
                            <div className="notification-icon">♥</div>

                            <div className="notification-content">
                                <strong>관심 동물의 새로운 소식이 등록되었어요</strong>
                                <p>모카의 보호 상태가 변경되었습니다.</p>
                                <span>10분 전</span>
                            </div>
                        </button>
                    </li>

                    <li className="notification-item unread">
                        <button type="button">
                            <div className="notification-icon">!</div>

                            <div className="notification-content">
                                <strong>실종 동물 제보가 도착했어요</strong>
                                <p>등록한 실종 지역 근처에서 새로운 제보가 등록되었습니다.</p>
                                <span>1시간 전</span>
                            </div>
                        </button>
                    </li>

                    <li className="notification-item">
                        <button type="button">
                            <div className="notification-icon">✓</div>

                            <div className="notification-content">
                                <strong>입양 신청이 정상적으로 접수되었어요</strong>
                                <p>보호소에서 신청 내용을 확인한 후 연락드릴 예정입니다.</p>
                                <span>어제</span>
                            </div>
                        </button>

                        <button type="button" className="notification-more">
                            알림 전체보기
                        </button>
                    </li>
                  </ul>
                ) : (
                  <div className="notification-empty">
                    <span aria-hidden="true">🔔</span>
                    <p>알림이 없습니다.</p>
                    <small>로그인하면 새로운 소식을 확인할 수 있어요.</small>
                  </div>
                )}
            </div>
        </>
    );
}

export default NotificationPanel;
