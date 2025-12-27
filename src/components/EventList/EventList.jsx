import React from 'react';
import EventCard from './EventCard';
import './EventList.css';

const EventList = () => {
  const events = [
    { id: 1, title: 'Medical Support Visit', date: 'Dec 30, 2025', type: 'Hospital Visit', description: 'Visiting patients in local hospitals to offer support.' },
    { id: 2, title: 'Tech Mentorship', date: 'Jan 05, 2026', type: 'Professional', description: 'Training students in full-stack development principles.' },
    { id: 3, title: 'City Park Plantation', date: 'Jan 12, 2026', type: 'Plantation', description: 'Helping the environment one tree at a time.' }
  ];

  return (
    <div className="event-list-page">
      <h1>Upcoming Events</h1>
      <div className="event-grid">
        {events.map(ev => <EventCard key={ev.id} event={ev} />)}
      </div>
    </div>
  );
};

export default EventList;
