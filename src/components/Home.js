import '../styles/Home.css'; // Ensure you create this CSS file
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="home-page container text-center mt-7">
      <h1 className="display-4 text-gradient">Welcome to Geo-Location Based Event Planner</h1>
      <p className="lead text-muted">
        Your All-in-One Solution for Creating and Managing Events
      </p>
      <p className="text-info">
        Navigate using the menu to explore more features and make unforgettable memories!
      </p>
      <div className="features-container">
        <h2 className="mt-4">Features:</h2>
        <ul className="list-unstyled">
          <li className="feature-item">📅 Create and Schedule Events</li>
          <li className="feature-item">🌍 Find Events Near You</li>
          <li className="feature-item">🔔 Get Reminders for Upcoming Events</li>
        </ul>
      </div>
      <div className="action-buttons mt-5">
        <button className="btn btn-primary m-2" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="btn btn-success m-2" onClick={() => navigate('/signup')}>
          Signup
        </button>
      </div>

      <footer className="footer mt-5">
        <p className="text-secondary">Crafting Experiences, One Event at a Time</p>
      </footer>
    </div>
  );
};

export default HomePage;
