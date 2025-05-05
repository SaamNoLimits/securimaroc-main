import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import './css/authform.css' ;

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useStateContext();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);
    setLoading(true);

    const fakeApiCall = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (formData.email === 'test@example.com' && formData.password === 'password123') {
        const fakeToken = 'FAKE_TOKEN_' + Math.random().toString(36).substring(2);
        const fakeUser = { name: 'Test User', email: formData.email };

        setUser(fakeUser);
        setToken(fakeToken);
        setLoading(false);
        navigate('/dashboard');
      } else {
        setErrors(['Invalid email or password.']);
        setLoading(false);
      }
    };

    fakeApiCall();
  };

  return (
    <div className="auth-form-container">
      <h2>Sign In to Your Account</h2>

      {errors && (
        <div className="auth-errors">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit}>
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <p className="auth-link">
        Not registered? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
};

export default Signin;
