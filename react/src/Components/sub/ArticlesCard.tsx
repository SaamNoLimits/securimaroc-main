import React from 'react';
import './css/ArticleCard.css'; // Link to the CSS file

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  // You might add a 'link' prop for the article URL
}

const ArticlesCard: React.FC<ArticleCardProps> = ({ imageUrl, title, author, date }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-card-image" />
      <div className="article-card-content">
        <h3>{title}</h3>
        <p className="article-card-meta">By {author} | {date}</p>
        {/* Link to the full article - replace # with dynamic link */}
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default ArticlesCard;