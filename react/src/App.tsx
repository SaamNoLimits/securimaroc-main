import React from 'react';
// Import the components you created
import Navbar from './Components/main/Navbar';
import Hero from './Components/main/Hero';
import ArticlesSection from './Components/main/ArticlesSection'; // The section with the article grid
import Footer from './Components/main/Footer';
import Contact from './Components/main/Contact';
import Signin from './Components/main/Signin';
import Signup from './Components/main/Signup';
import UserPreferencesForm from './Components/main/UserPrefe';
// Import your layout component if you are using one, e.g.:
// import DefaultLayout from '../Components/main/DefaultLayout';

// Import global styles if needed, often done in main.tsx or App.tsx
// import '../App.css';

const Homepage: React.FC = () => {
  return (
    // Wrap with your layout component if you use one:
    // <DefaultLayout>
    <> {/* Use a React Fragment if not using a specific layout component */}      
      <UserPreferencesForm/>
      
    </>
    // </DefaultLayout>
  );
};

export default Homepage;