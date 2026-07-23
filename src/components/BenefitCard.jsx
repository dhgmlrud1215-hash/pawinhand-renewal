function BenefitCard({ item }) {
    return (
        <article className="benefit-card">
            <div className="benefit-card-image">
                <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="benefit-card-content">
                <span className="benefit-card-category">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
            </div>
        </article>
    );
}

export default BenefitCard;