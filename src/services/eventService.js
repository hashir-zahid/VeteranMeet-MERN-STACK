// services/eventService.js
import api from "./api";

// Create new community service event
export const createEvent = (eventData) => {
  return api.post("/events", eventData);
};

// Get all upcoming events
export const getAllEvents = () => {
  return api.get("/events");
};

// Get events based on veteran hobbies
export const getEventsByHobby = (hobby) => {
  return api.get(`/events/hobby/${hobby}`);
};

// Mark event as Interested
export const markInterested = (eventId) => {
  return api.post(`/events/${eventId}/interested`);
};

// Invite followers to event
export const inviteVeterans = (eventId, veteranIds) => {
  return api.post(`/events/${eventId}/invite`, { veteranIds });
};

// Search events by location & type
export const searchEvents = (city, type) => {
  return api.get(`/events/search?city=${city}&type=${type}`);
};


