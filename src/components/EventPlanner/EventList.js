import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { useEvents } from '../../Context/EventContext.js'; // Import the EventContext
import { Card, Button, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import '../../styles/EventList.css'; // Assuming you create a separate CSS file for custom styling

const EventList = () => {
  const { setEvents } = useEvents(); // Get setEvents from context
  const [events, setEventsLocal] = useState([]); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/events');
        const fetchedEvents = response.data.events; 
        
        // Set events in local state and context
        setEventsLocal(fetchedEvents);
        setEvents(fetchedEvents); // Update context state
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [setEvents]); // Dependency array should include setEvents

  return (
    <Container className="mt-5 event-list-container">
      <h2 >Upcoming Events</h2>
      

      {events.length === 0 ? (
        <p className="text-center">No events available.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {events.map((event) => (
            <Col key={event.id}>
              <Card className="event-card shadow-lg h-100">
                <Card.Body>
                  <Card.Title className="text-primary">{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"> <strong>Date:</strong>{new Date(event.date).toLocaleDateString()}</Card.Subtitle>
                  <Card.Text><strong>Location:</strong> {event.location}</Card.Text>
                  <Card.Text><strong>Description:</strong>{event.description}</Card.Text>
                  <p>Loooking forward for your arrival!</p>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div className="d-flex justify-content-center mt-4">
        <Button variant="secondary" onClick={() => navigate('/home2')}>Back</Button>
      </div>
    </Container>
  );
};

export default EventList;
