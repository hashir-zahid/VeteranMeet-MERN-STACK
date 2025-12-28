import React from "react";
import "./Followers.css";

const Followers = ({ followers }) => {
  return (
    <div className="followers-container">
      <h2 className="followers-title">Followers</h2>

      {followers && followers.length > 0 ? (
        <ul className="followers-list">
          {followers.map((follower) => (
            <li key={follower.id} className="follower-card">
              <img
                src={follower.avatar}
                alt={follower.name}
                className="follower-avatar"
              />

              <div className="follower-info">
                <h4>{follower.name}</h4>
                <p>{follower.rank || "Veteran Member"}</p>
              </div>

              <button className="follow-btn">View</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-followers">No followers yet.</p>
      )}
    </div>
  );
};

export default Followers;
  
