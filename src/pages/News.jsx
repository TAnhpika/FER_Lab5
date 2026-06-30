import { newsData } from "../data/newsData";
import NewsCard from "../components/NewsCard";

function News() {
  return (
    <div>
      <h1 className="page-title">News Category</h1>
      <div className="news-grid">
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            description={item.description}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
}

export default News;