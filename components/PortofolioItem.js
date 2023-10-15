function PortfolioItem({ imageSrc, title, description, skills }) {
    return (
        <div className="portfolio-item">
            <img src={imageSrc} className="portfolio-image" />
            <h4 className="portfolio-name">{title}</h4>
            <p className="portfolio-description">{description}</p>
            <div className="portfolio-skills">
                <strong>Tech-Stack:</strong> {skills.join(' · ')}
            </div>
        </div>
    );
}

export default PortfolioItem;
