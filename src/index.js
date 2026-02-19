// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { EventProvider } from './Context/EventContext.js'; // Adjust path as necessary

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <EventProvider>
      <App />
    </EventProvider>
  </Router>
);
