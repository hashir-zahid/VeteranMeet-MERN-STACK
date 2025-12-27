import React from 'react';
import './Followers.css';

const Followers = () => {
  const followers = [
    { name: 'John Doe', role: 'Veteran', image: 'https://via.placeholder.com/50' },
    { name: 'NGO Save Earth', role: 'Organization', image: 'https://via.placeholder.com/50' },
    { name: 'Jane Smith', role: 'Software Engineer', image: 'https://via.placeholder.com/50' }
  ];

  return (
    <div className="followers-container">
      <h3>Followers ({followers.length})</h3>
      <div className="followers-list">
        {followers.map((f, i) => (
          <div key={i} className="follower-item">
            <img src={f.image} alt="profile" className="avatar" />
            <div className="follower-info">
              <span className="follower-name">{f.name}</span>
              <span className="follower-role">{f.role}</span>
            </div>
            <button className="btn-follow">Follow Back</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
