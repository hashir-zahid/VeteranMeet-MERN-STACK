import { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you will connect this to Express API
    console.log("Event Created:", formData);

    alert("Event created successfully!");

    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="create-event-container">
      <h2>Create New Event</h2>

      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter event title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Event location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
            <option value="Training">Training</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe the event"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
