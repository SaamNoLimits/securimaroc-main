import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// --- Layout components are NOT imported or used as route elements in this version ---
// import DefaultLayout from './Components/main/DefaultLayout';
// import GuestLayout from './Components/main/GuestLayout';

// Import your page/view components from where they are located
// Ensure these paths are correct relative to where router.tsx is located
// Assuming a 'pages' folder for main pages like Homepage, otherwise adjust path
import Articles from './Components/main/Articles';
import Blog from './Components/main/Blog';
import Contact from './Components/main/Contact';
import Profile from './Components/main/Profile';
import Signin from './Components/main/Signin';
import Signup from './Components/main/Signup';
import Hero from './Components/main/Hero'; // Assuming Hero might be a standalone page route here

// Placeholder components from your structure if they are route elements
// import Background from './Components/main/Background';
// import StarBackground from './Components/main/StarBackground';
// import ArticleDetail from './Components/main/ArticleDetail'; // For individual articles/blogs
// import BlogPostDetail from './Components/main/BlogPostDetail';


const router = createBrowserRouter([
  {
    // --- Each path directly renders its component ---
    path: '/', // The route for the homepage
    // Note: In your previous router, '/' rendered <Hero/>. If Homepage is a component
    // that uses Hero and other sections, use <Homepage/> here.
    element: <Hero />, // Directly render the Homepage component or Hero, adjust as needed
  },
  {
    path: '/articles', // Route for the Articles listing page
    element: <Articles />, // Directly render the Articles component
  },
  {
    path: '/blog', // Route for the Blog index page
    element: <Blog />, // Directly render the Blog component
  },
  {
    path: '/contact', // Route for the Contact page
    element: <Contact />, // Directly render the Contact component
  },
  {
    path: '/profile', // Route for the Profile page
    element: <Profile />, // Directly render the Profile component
    // Note: Authentication checks need to be handled within Profile.tsx or higher up.
  },
  {
    path: '/signin', // Route for the Sign In page
    element: <Signin />, // Directly render the Signin component
     // Note: Redirecting authenticated users away needs to be handled separately.
  },
  {
    path: '/signup', // Route for the Sign Up page
    element: <Signup />, // Directly render the Signup component
     // Note: Redirecting authenticated users away needs to be handled separately.
  },
   
  // Add routes for individual articles or blog posts if needed
  // {
  //   path: '/articles/:articleId',
  //   element: <ArticleDetail />,
  // },
]);

const App: React.FC = () => {
  return (
    // The RouterProvider makes the router and its context available throughout your app.
    // All <Link> components and router hooks need this to be an ancestor.
    <RouterProvider router={router} />
  );
};

export default App;