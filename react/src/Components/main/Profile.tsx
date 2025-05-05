import React, { useState, useEffect } from 'react';
import './css/profile .css'; // Link to the CSS file

// Define a type for user data (adjust based on your actual user structure)
interface UserProfile {
  name: string;
  email: string;
  // Add other user properties like avatar, joinDate, etc.
  avatarUrl?: string;
}

const Profile: React.FC = () => {
  // State to hold user data
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // In a real application, you would fetch the user data here
  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace with your actual API call to get user data
        // const response = await fetch('/api/currentUser');
        // if (!response.ok) {
        //   throw new Error('Failed to fetch user data');
        // }
        // const userData = await response.json();

        // Using dummy data for now
        const dummyUserData: UserProfile = {
          name: 'Logged In User',
          email: 'user@example.com',
          avatarUrl: 'https://via.placeholder.com/150?text=Avatar', // Placeholder avatar
        };

        setUser(dummyUserData);
        setLoading(false);

      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Could not load user profile.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div className="profile-page container">Loading Profile...</div>;
  }

  if (error) {
    return <div className="profile-page container error-message">{error}</div>;
  }

  if (!user) {
      // This case should ideally not happen if error is handled, but as a fallback
      return <div className="profile-page container">No user data available.</div>;
  }


  return (
    <div className="profile-page">
      <div className="container"> {/* Use a container for centering and max-width */}
        <h2>User Profile</h2>

        <div className="profile-content">
          <div className="profile-avatar">
            <img
              src={user.avatarUrl || 'https://via.placeholder.com/150?text=No+Avatar'} // Use placeholder if no avatar
              alt={`${user.name}'s Avatar`}
            />
          </div>
          <div className="profile-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Display other user details */}
            {/* <p><strong>Joined:</strong> {user.joinDate}</p> */}
            {/* Add sections for account settings, history, etc. */}
          </div>
        </div>

        {/* Example section for user activity */}
        <div className="profile-section">
            <h3>Recent Activity</h3>
            {/* Display a list of user's recent posts, comments, etc. */}
            <p>No recent activity to display yet.</p> {/* Placeholder */}
        </div>

        {/* Example section for settings */}
         <div className="profile-section">
            <h3>Account Settings</h3>
            {/* Links or forms for changing password, email, preferences */}
            <p><a href="#">Change Password</a></p>
            <p><a href="#">Update Profile Information</a></p>
        </div>

      </div>
    </div>
  );
};

export default Profile;