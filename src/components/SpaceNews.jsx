import { useState, useEffect } from 'react';

function SpaceNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchNews = async () => {
      const url = "https://api.spaceflightnewsapi.net/v4/articles/?limit=3";

      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`);

        const data = await response.json();
        setNews(data.results);
      } catch (error) {
        setError(`Failed to fetch news: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  return (
    <section className="glass-box">
      <div className="section-header">
        <h2>📰 Latest Space News</h2>
      </div>
      <div>
        {loading && <p>⏳ Fetching latest space news...</p>}
        {error && <p>⚠ {error}</p>}
        {!loading && !error && news.map((article, index) => (
          <div key={index}>
            <h4>{article.title}</h4>
            <p>{article.summary || "No summary available."}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            {index < news.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpaceNews;
