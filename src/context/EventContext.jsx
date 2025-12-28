import React, { createContext, useState, useContext, useEffect } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // 1. Load existing events from the Database on startup
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  // 2. Function to add a new event to the Database and UI
  const addEvent = async (newEvent) => {
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent)
      });
      
      if (response.ok) {
        const savedEvent = await response.json();
        // Update the local state so the UI refreshes instantly
        setEvents((prevEvents) => [...prevEvents, savedEvent]);
      }
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook for easy access
export const useEvents = () => useContext(EventContext);
