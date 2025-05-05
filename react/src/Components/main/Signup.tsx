import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import './css/authform.css'; // Use the shared CSS for auth forms

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '' // For confirming password
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ** Registration Logic Goes Here **
    // You would typically send formData to your registration API endpoint
    console.log('Sign Up Attempt:', formData);
    // On successful registration, you might automatically sign the user in,
    // redirect them to a confirmation page, or redirect them to the signin page.
    alert('Sign Up attempted! (Check console)');
    // Example: on success redirect to signin
    // navigate('/signin'); // Assuming you get navigate from react-router-dom
  };

  return (
    <div className="auth-form-container"> {/* Use a shared container class */}
      <h2>Create a New Account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
         <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

         <div className="form-group">
          <label htmlFor="passwordConfirmation">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>


        <button type="submit" className="submit-button">Sign Up</button>
      </form>
       <p className="auth-link">
        Already registered? <Link to="/signin">Sign in here</Link>
      </p>
    </div>
  );
};

export default Signup;