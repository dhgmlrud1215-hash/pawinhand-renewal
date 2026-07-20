import { Link } from "react-router-dom";

function LostCard({ report }) {
    const currentStatusClass = report.currentStatus?.includes("보호")
        ? "protection"
        : report.currentStatus === "실종"
            ? "missing"
            : "sighting";

    return (
        <Link 
            to={`/lost/${report.id}`}
            className="lost-card"
            onClick={() => window.scrollTo(0, 0)}
        >
            <div className="lost-card-image">
                <img
                    src={report.images[0]}
                    alt={`${report.breed} ${report.reportType}`}
                />
            </div>

            <div className="lost-card-content">
                <div className="lost-card-title">
                    <div className="lost-card-badges">
                        <span
                            className={`status-badge ${
                                report.reportType === "실종" ? "missing" : "sighting"
                            }`}
                        >
                            {report.reportType}
                        </span>

                        {report.currentStatus && (
                            <span className={`current-status-badge ${currentStatusClass}`}>
                                {report.currentStatus}
                            </span>
                        )}
                    </div>

                    <strong>{report.breed}</strong>
                </div>

                <p className="lost-card-info">
                    {report.age} · {report.color} · {report.gender} · {report.weight}
                </p>

                <p className="lost-card-location">
                    <span aria-hidden="true">●</span>
                    {report.location}
                </p>

                <p className="lost-card-date">
                    <span aria-hidden="true">▣</span>
                    {report.date}
                </p>
            </div>
        </Link>
    )
}

export default LostCard;
