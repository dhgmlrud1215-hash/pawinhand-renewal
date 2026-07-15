function ShelterList({ shelters }) {
    return (
        <div className="shelter-list">
            {shelters.map((shelter) => (
                <button
                    type="button"
                    className="shelter-list-item"
                    key={shelter.id}
                >
                 <div className="shelter-list-info">
                    <strong>
                        {shelter.name}

                        {shelter.verified && (
                            <span className="verified">✓</span>
                        )}
                    </strong>

                    <p>{shelter.region}</p>
                    <span>{shelter.phone}</span>
                 </div>

                 <div className="shelter-list-right">
                    {shelter.image && (
                        <img src={shelter.image} alt={shelter.name} />
                    )}

                    <span className="shelter-arrow">›</span>
                 </div>
                </button>
            ))}
        </div>
    );
}

export default ShelterList;
