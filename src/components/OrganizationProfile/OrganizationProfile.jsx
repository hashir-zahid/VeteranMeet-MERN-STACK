import React from "react";
import "./OrganizationProfile.css";

const OrganizationProfile = () => {
  return (
    <div className="org-profile-container">
      {/* Header */}
      <div className="org-profile-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Organization Logo"
          className="org-logo"
        />
        <div>
          <h1>Veteran Support Organization</h1>
          <p className="org-tagline">
            Connecting Retired Professionals with Opportunities
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="org-section">
        <h2>About Us</h2>
        <p>
          We are a community-driven organization dedicated to helping retired
          professionals stay active, share knowledge, and find meaningful
          opportunities. VeteranMeet bridges the gap between experience and
          modern needs.
        </p>
      </section>

      {/* Details Section */}
      <section className="org-section org-details">
        <div>
          <h3>📍 Location</h3>
          <p>Islamabad, Pakistan</p>
        </div>
        <div>
          <h3>📞 Contact</h3>
          <p>+92 300 1234567</p>
        </div>
        <div>
          <h3>✉️ Email</h3>
          <p>info@veteranmeet.com</p>
        </div>
      </section>

      {/* Skills / Focus Areas */}
      <section className="org-section">
        <h2>Focus Areas</h2>
        <div className="org-tags">
          <span>Mentorship</span>
          <span>Consultancy</span>
          <span>Training</span>
          <span>Community Work</span>
          <span>Freelancing</span>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="org-actions">
        <button className="primary-btn">Contact Organization</button>
        <button className="secondary-btn">View Events</button>
      </div>
    </div>
  );
};

export default OrganizationProfile;
