// services/eventService.js
import api from "./api";

/*
|--------------------------------------------------------------------------
| EVENT SERVICES – VeteranMeet
|--------------------------------------------------------------------------
| Handles community events for retired professionals
*/

// Create a new event (Veteran / Admin)
export const createEvent = (eventData) => {
  return api.post("/events", eventData);
};

// Get all upcoming events
export const getAllEvents = () => {
  return api.get("/events");
};

// Get single event by ID
export const getEventById = (eventId) => {
  return api.get(`/events/${eventId}`);
};

// Get events matching veteran interests / hobbies
export const getEventsByHobby = (hobby) => {
  return api.get(`/events/hobby/${hobby}`);
};

// Mark interest in an event
export const markInterested = (eventId) => {
  return api.post(`/events/${eventId}/interest`);
};

// Join an event
export const joinEvent = (eventId) => {
  return api.post(`/events/${
