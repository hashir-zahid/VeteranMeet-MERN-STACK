import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  const [formData, setFormData] = useState({ title: '', date: '', type: 'Meetup', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
  };

  return (
    <div className="create-event-container">
      <div className="create-event-card">
        <h2>Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Event Title</label>
            <input type="text" placeholder="e.g. Plantation Drive" onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select onChange={(e) => setFormData({...formData, type: e.target.value})}>
                <option>Meetup</option>
                <option>Professional Task</option>
                <option>Plantation Drive</option>
                <option>Orphanage Visit</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea rows="4" placeholder="Describe the event goals..." onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
          </div>
          <button type="submit" className="btn-submit">Launch Event</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
