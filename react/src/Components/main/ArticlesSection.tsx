import React from 'react';
import ArticlesCard from '../sub/ArticlesCard'; // Import the card component
import './css/articlesection.css'; // Link to the CSS file

// Dummy data - replace with actual data fetching logic
const dummyArticles = [
  { id: 1, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+1', title: 'The Impact of Technology on the Workplace: How Technology is Changing', author: 'John Doe', date: 'July 20, 2023' },
  { id: 2, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+2', title: 'Exploring the Wonders of Venice: A Traveler\'s Guide', author: 'Jane Smith', date: 'July 22, 2023' },
  { id: 3, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+3', title: 'Classic Cars and the Open Road: A Timeless Passion', author: 'Peter Jones', date: 'July 25, 2023' },
  { id: 4, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+4', title: 'Building Your Dream Home: Tips and Tricks', author: 'Sarah Lee', date: 'July 28, 2023' },
  { id: 5, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+5', title: 'Sustainable Living: Small Changes, Big Impact', author: 'David Chen', date: 'August 1, 2023' },
  { id: 6, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+6', title: 'The Future of Transportation: Electric Vehicles and Beyond', author: 'Maria Garcia', date: 'August 5, 2023' },
  { id: 7, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+7', title: 'Mastering the Art of Photography: Tips for Beginners', author: 'Chris Evans', date: 'August 8, 2023' },
  { id: 8, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+8', title: 'Discovering Paradise: Top Beach Destinations', author: 'Sophia Rodriguez', date: 'August 10, 2023' },
  { id: 9, imageUrl: 'https://via.placeholder.com/400x250?text=Article+Image+9', title: 'The Evolution of Gaming Consoles: From Pixels to Immersive Worlds', author: 'Michael Brown', date: 'August 12, 2023' },
];


const ArticlesSection: React.FC = () => {
  return (
    <section className="articles-section">
      <div className="container"> {/* Use a container for centering and max-width */}
        <h2>Latest Posts</h2>
        <div className="articles-grid"> {/* Grid for displaying articles */}
          {/* Map over dummy data to render ArticleCard for each */}
          {dummyArticles.map(article => (
            <ArticlesCard
              key={article.id} // Important for lists in React
              imageUrl={article.imageUrl}
              title={article.title}
              author={article.author}
              date={article.date}
              // Pass other data needed by ArticleCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;