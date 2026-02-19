import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.css'; // Path to App.css
import Home from './components/Home';
import Home2 from './components/Home2'; // Ensure this import is correct
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EventList from './components/EventPlanner/EventList';
import EventForm from './components/EventPlanner/EventForm';

const App = () => {
    return (
        <div>
            <div className="mt-16"> {/* mt-16 to add margin for fixed navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home2" element={<Home2 />} />
                    <Route path="/create-event" element={<EventForm />} />
                    <Route path="/event-details" element={<EventList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </div>
    );
};

export default App;
