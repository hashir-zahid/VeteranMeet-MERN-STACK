import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-badge">{event.type}</div>
      <h3>{event.title}</h3>
      <p className="event-date">📅 {event.date}</p>
      <p className="event-desc">{event.description.substring(0, 100)}...</p>
      <button className="btn-view">View Details</button>
    </div>
  );
};

export default EventCard;
