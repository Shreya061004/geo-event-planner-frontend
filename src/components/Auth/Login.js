import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../../styles/Auth.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage(`Welcome back, ${response.data.user.fullname}!`); 
        setTimeout(() => {
          navigate('/home2'); 
        }, 2000);
      } else {
        setError(response.data.message); 
      }
    } catch (error) {
      console.error("Login error: ", error);
      setError(error.response?.data?.message || 'Login failed'); 
    }
  };

  return (
    <div className="login-container">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-gradient">Login</button>
          </div>
        </form>
        <p className="text-center mt-3">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
      <div className="footer-text text-center mt-3">
        <p>Join us to start planning your amazing events!</p>
        
      </div>
    </div>
  );
};

export default Login;
