import React, { useState } from 'react';
import './OrganizationProfile.css';

const OrganizationProfile = () => {
  // 1. Mock Organization Info
  const [org, setOrg] = useState({
    name: "TechForHeroes Foundation",
    type: "NGO",
    location: "Islamabad, Pakistan",
    email: "contact@techforheroes.org",
    logo: "https://via.placeholder.com/150/0f766e/ffffff?text=TFH", // Teal placeholder
    mission: "Empowering retired veterans through technology training and placement.",
    totalEventsHosted: 24,
    activeEvents: 2
  });

  // 2. Mock Events Data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Introduction to Python",
      type: "Professional Talk",
      date: "2024-11-15",
      location: "NUST Campus, H-12",
      starValue: 500,
      attendees: 12,
      requiredHobbies: ["Coding", "Technology"]
    },
    {
      id: 2,
      title: "Weekend Plantation Drive",
      type: "Plantation Drive",
      date: "2024-11-20",
      location: "F-9 Park",
      starValue: 1200,
      attendees: 45,
      requiredHobbies: ["Gardening", "Nature"]
    }
  ]);

  // 3. Form State for Creating New Event
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'Public Talk',
    location: '',
    date: '',
    starValue: 0,
    requiredHobbies: ''
  });

  const [error, setError] = useState('');

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // 4. Handle Event Creation
  const handleCreateEvent = (e) => {
    e.preventDefault();
    setError('');

    // Validation: Star Limit (Requirement #9 & Community #5)
    if (newEvent.starValue > 5000) {
      setError('Event star count cannot exceed 5000.');
      return;
    }
    if (newEvent.starValue < 0) {
      setError('Stars cannot be negative.');
      return;
    }
    if (!newEvent.title || !newEvent.date) {
      setError('Please fill in required fields.');
      return;
    }

    const eventObject = {
      id: Date.now(),
      ...newEvent,
      attendees: 0,
      requiredHobbies: newEvent.requiredHobbies.split(',').map(h => h.trim()) // Convert string to array
    };

    setEvents([eventObject, ...events]);
    setShowCreateForm(false);
    // Reset form
    setNewEvent({ title: '', type: 'Public Talk', location: '', date: '', starValue: 0, requiredHobbies: '' });
  };

  return (
    <div className="org-container">
      {/* Navbar Placeholder */}
      <nav className="org-navbar">
        <h2>VeteranMeet <span className="org-badge">Partner</span></h2>
        <div className="nav-links">
          <span>Dashboard</span>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="org-content">
        
        {/* Header Section */}
        <header className="org-header">
          <div className="header-content">
            <img src={org.logo} alt="Logo" className="org-logo" />
            <div className="header-text">
              <h1>{org.name}</h1>
              <span className="org-type">{org.type}</span>
              <p className="org-mission">{org.mission}</p>
              <div className="org-meta">
                <span>📍 {org.location}</span>
                <span>📧 {org.email}</span>
              </div>
            </div>
          </div>
          
          <div className="header-stats">
            <div className="stat-box">
              <h3>{org.totalEventsHosted}</h3>
              <p>Total Events</p>
            </div>
            <div className="stat-box highlight">
              <h3>{org.activeEvents}</h3>
              <p>Active Now</p>
            </div>
          </div>
        </header>

        {/* Dashboard Actions */}
        <div className="dashboard-actions">
          <h2>Manage Community Events</h2>
          <button 
            className="create-btn"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? 'Cancel' : '+ Create New Event'}
          </button>
        </div>

        {/* Create Event Form (Conditional Render) */}
        {showCreateForm && (
          <div className="create-event-panel">
            <h3>Plan a New Service</h3>
            {error && <div className="error-banner">{error}</div>}
            
            <form onSubmit={handleCreateEvent} className="event-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Event Title</label>
                  <input name="title" value={newEvent.title} onChange={handleInputChange} placeholder="e.g. Annual Book Fair" />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select name="type" value={newEvent.type} onChange={handleInputChange}>
                    <option>Public Talk</option>
                    <option>Motivational Talk</option>
                    <option>Plantation Drive</option>
                    <option>Professional Task</option>
                    <option>Medical Visit</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input name="location" value={newEvent.location} onChange={handleInputChange} placeholder="City or Address" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Star Value (Max 5000)</label>
                  <input type="number" name="starValue" value={newEvent.starValue} onChange={handleInputChange} />
                  <small>These points will be awarded to attending veterans.</small>
                </div>
                <div className="form-group">
                  <label>Target Hobbies (comma separated)</label>
                  <input name="requiredHobbies" value={newEvent.requiredHobbies} onChange={handleInputChange} placeholder="e.g. Reading, Writing" />
                </div>
              </div>

              <button type="submit" className="submit-event-btn">Publish Event</button>
            </form>
          </div>
        )}

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((evt) => (
            <div key={evt.id} className="event-card">
              <div className="event-card-header">
                <span className="event-type-badge">{evt.type}</span>
                <span className="star-badge">★ {evt.starValue}</span>
              </div>
              
              <h4>{evt.title}</h4>
              
              <div className="event-details">
                <p>📅 {evt.date}</p>
                <p>📍 {evt.location}</p>
                <p>👥 {evt.attendees} Veterans interested</p>
              </div>

              <div className="event-tags">
                {Array.isArray(evt.requiredHobbies) ? evt.requiredHobbies.map((h, i) => (
                  <span key={i} className="mini-tag">{h}</span>
                )) : null}
              </div>

              <div className="card-actions">
                <button className="invite-btn">Invite Veterans</button>
                <button className="edit-btn">Edit Details</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrganizationProfile;
