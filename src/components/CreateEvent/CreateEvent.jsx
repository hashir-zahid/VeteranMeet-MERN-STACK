import React, { useState } from 'react';
import { useEvents } from '../../context/EventContext';
import './CreateEvent.css';

const CreateEvent = () => {
  const { addEvent } = useEvents(); // Get the function from Context
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: 'Motivational Talk', // Default based on project doc
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.title || !formData.date) {
      alert("Please fill in the title and date");
      return;
    }

    // Call the context function to save to DB
    addEvent(formData);

    // Reset form after submission
    setFormData({ title: '', date: '', type: 'Motivational Talk', description: '' });
    alert("Event created and shared with followers!");
  };

  return (
    <div className="create-event-container">
      <form className="create-event-form" onSubmit={handleSubmit}>
        <h2>Create New Event</h2>
        
        <label>Event Title</label>
        <input 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="e.g. Professional Training" 
        />

        <label>Event Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option>Motivational Talk</option>
          <option>Professional Task</option>
          <option>Plantation Drive</option>
          <option>Orphanage Visit</option>
          <option>Hospital Visit</option>
        </select>

        <label>Date</label>
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
        />

        <label>Description</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Details for your followers..."
        />

        <button type="submit">Publish Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
