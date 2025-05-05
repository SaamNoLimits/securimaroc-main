import React from 'react';
import './css/blog.css'; // Link to the CSS file

// You might reuse the ArticlesSection component or create a new component
// specifically for listing blog posts if the layout differs from the homepage.
// import ArticlesSection from './ArticlesSection'; // Example: Reusing the articles grid section

// Dummy data for demonstration - replace with actual blog post data
const dummyBlogPosts = [
  { id: 1, title: 'First Steps in Web Development', author: 'Alex Johnson', date: 'August 15, 2023', excerpt: 'Learning the basics of HTML, CSS, and JavaScript...' },
  { id: 2, title: 'Understanding React Hooks', author: 'Jordan Lee', date: 'August 20, 2023', excerpt: 'A deep dive into useState, useEffect, and custom hooks...' },
  { id: 3, title: 'CSS Grid vs Flexbox: When to Use Which?', author: 'Casey Brown', date: 'August 25, 2023', excerpt: 'Comparing modern CSS layout techniques...' },
  // Add more dummy data or fetch real data here
];


const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="container"> {/* Use a container for centering and max-width */}
        <h2>Our Blog</h2>
        <p className="blog-intro">
          Welcome to our blog! Stay updated with our latest posts on various topics.
        </p>

        {/*
          Here you display the list of blog posts.
          You could map over your blog post data to render each post.
          You might use a component like ArticlesCard (if suitable for blog post previews)
          or create a dedicated BlogPostPreview component.
        */}
        <div className="blog-posts-list">
           {dummyBlogPosts.map(post => (
             <div key={post.id} className="blog-post-item">
               <h3>{post.title}</h3>
               <p className="post-meta">By {post.author} | {post.date}</p>
               <p>{post.excerpt}</p>
               {/* Add a link to the full blog post */}
               <a href={`/blog/${post.id}`} className="read-more">Read More</a> {/* Example dynamic link */}
             </div>
           ))}
        </div>

        {/* Optional: Add a sidebar with categories, tags, archives, etc. */}
        {/* <div className="blog-sidebar">
             <h4>Categories</h4>
             <ul> ... </ul>
             <h4>Recent Posts</h4>
             <ul> ... </ul>
        </div> */}

      </div>
    </div>
  );
};

export default Blog;