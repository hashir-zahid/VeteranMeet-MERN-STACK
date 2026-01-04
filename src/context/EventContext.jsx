import React, { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const API_URL = "http://localhost:5000/api/events";

  // Fetch all VeteranMeet events
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to load events:", error);
    }
  };

  // Add new event (Admin only)
  const addEvent = async (eventData) => {
    try {
      const token = localStorage.getItem("veteranToken");

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });

      if (!res.ok) {
        throw new Error("Event creation failed");
      }

      const newEvent = await res.json();
      setEvents((prev) => [...prev, newEvent]);
    } catch (error) {
      console.error("Add event error:", error);
    }
  };

  return (
    <EventContext.Provider value={{ events, addEvent, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook
export const useEvents = () => useContext(EventContext);
