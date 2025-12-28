import { useEvents } from '../context/EventContext';

const EventList = () => {
  const { events } = useEvents(); // This replaces your hardcoded list

  return (
    <div className="event-grid">
      {events.map(ev => <EventCard key={ev.id} event={ev} />)}
    </div>
  );
};
