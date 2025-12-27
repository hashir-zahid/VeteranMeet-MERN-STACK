import React, { useState } from 'react';
import './InviteVeterans.css';

const InviteVeterans = () => {
  const categories = [
    "Motivational Talk", "Professional Training", 
    "Decision Making", "Plantation Drive", "Hospital Visit"
  ];

  return (
    <div className="invite-container">
      <div className="invite-box">
        <h3>Invite a Veteran</h3>
        <p>Connect with retired professionals for your organization's needs.</p>
        
        <form className="invite-form">
          <div className="input-group">
            <label>Select Veteran</label>
            <input type="text" placeholder="Search by name or expertise..." />
          </div>

          <div className="input-group">
            <label>Purpose of Invitation</label>
            <select>
              {categories.map((cat, i) => <option key={i}>{cat}</option>)}
            </select>
          </div>

          <div className="input-group">
            <label>Message / Details</label>
            <textarea placeholder="Briefly describe the task or event..."></textarea>
          </div>

          <button className="btn-send-invite">Send Invitation</button>
        </form>
      </div>
    </div>
  );
};

export default InviteVeterans;
