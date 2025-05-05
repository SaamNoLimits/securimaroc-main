import React from 'react';
// import ArticlesSection from './ArticlesSection'; // You might reuse the section component
// import './Articles.css'; // Optional CSS

const Articles: React.FC = () => {
  return (
    <div className="articles-page">
      <div className="container">
        <h2>All Articles</h2>
        <p>This page would list all your articles.</p>
        {/* You could render ArticlesSection here or a different list/grid */}
        {/* <ArticlesSection /> */}
        {/* Or map through all articles */}
        {/* <p>Article 1</p><p>Article 2</p> */}
      </div>
    </div>
  );
};

export default Articles;