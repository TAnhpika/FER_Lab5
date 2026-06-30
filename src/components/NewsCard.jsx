function NewsCard({ title, description, images }) {
    return (
        <div className="news-card">
            <img src={images} alt={title} />
            <div className="news-card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#">{title}</a>
            </div>
        </div>
    );
}
  
  export default NewsCard;