import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Home2.css'; // Create a separate CSS file for styling

const Home2 = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/events/events');
                setEvents(response.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    const handleCreateEvent = () => {
        navigate('/create-event');
    };

    const handleEventDetails = () => {
        navigate('/event-details');
    };

    const handleLogout = () => {
        navigate('/'); // Navigate back to the home page
    };

    return (
        <div className="home2-container">
            <h1 className="welcome-text">Welcome to Your Event Manager</h1>
            <p className="intro-text">
                ✨ Transform your ideas into unforgettable experiences! 
                Whether it's a birthday bash, corporate gathering, or a community event, 
                we’re here to make it happen.
            </p>
            <p className="intro-text">
                🌟 Join a community of passionate event planners and 
                discover endless possibilities for your next gathering. 
                Start creating memories today!
            </p>
            <div className="button-container">
                <button className="btn btn-primary" onClick={handleCreateEvent}>
                    Create Event
                </button>
                <button className="btn btn-secondary" onClick={handleEventDetails}>
                    Event Details
                </button>
                <button className="btn btn-reminder" onClick={() => alertUpcomingEvents()}>
                    🗓️ Reminders
                </button>
            </div>
            <button className="btn btn-logout" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );

    function alertUpcomingEvents() {
        if (events.length === 0) {
            alert("No upcoming events.");
        } else {
            const eventDetails = events.map(event => `${event.title} - ${event.date}`).join('\n');
            alert(`Upcoming Events:\n${eventDetails}`);
        }
    }
};

export default Home2;
