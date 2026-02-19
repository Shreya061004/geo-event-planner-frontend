import React, { createContext, useContext, useState } from 'react';

// Create a Context
const EventContext = createContext();

// Create a Provider component
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    return (
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use the EventContext
export const useEvents = () => {
    return useContext(EventContext);
};
