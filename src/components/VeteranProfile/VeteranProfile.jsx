import React, { useState } from 'react';
import './VeteranProfile.css';

const VeteranProfile = () => {
  // 1. Mock User Data (In a real app, this comes from the Backend/Database)
  const [user, setUser] = useState({
    name: "Col. James Anderson (Ret.)",
    profession: "Retired Army Officer",
    location: "Rawalpindi, Pakistan",
    rank: "Golden Veteran", // Calculated based on stars
    stars: 52400,
    nextRank: 60000, // Threshold for Diamond
    profilePic: "https://via.placeholder.com/150",
    hobbies: ["Public Speaking", "Book Reading", "Gardening"],
    following: 120,
    followers: 450
  });

  // 2. Mock Posts Data
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Had a wonderful time speaking at the University today. The students were very engaged!",
      date: "2 hours ago",
      likes: 34
    },
    {
      id: 2,
      content: "Looking forward to the Plantation Drive next Sunday. Who is joining me?",
      date: "1 day ago",
      likes: 56
    }
  ]);

  const [newPost, setNewPost] = useState("");

  // 3. Handle Create Post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const postObject = {
      id: Date.now(),
      content: newPost,
      date: "Just now",
      likes: 0
    };

    setPosts([postObject, ...posts]); // Add new post to top
    setNewPost(""); // Clear input
  };

  // Helper to calculate progress bar width
  const calculateProgress = () => {
    return (user.stars / user.nextRank) * 100;
  };

  return (
    <div className="profile-container">
      {/* Navbar Placeholder */}
      <nav className="profile-navbar">
        <h2>VeteranMeet</h2>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="profile-layout">
        
        {/* LEFT COLUMN: User Info Card */}
        <aside className="profile-sidebar">
          <div className="card user-card">
            <div className="profile-pic-container">
              <img src={user.profilePic} alt="Profile" className="profile-pic" />
            </div>
            <h3 className="user-name">{user.name}</h3>
            <p className="user-profession">{user.profession}</p>
            <p className="user-location">📍 {user.location}</p>
            
            <div className="stats-row">
              <div className="stat">
                <strong>{user.followers}</strong>
                <span>Followers</span>
              </div>
              <div className="stat">
                <strong>{user.following}</strong>
                <span>Following</span>
              </div>
            </div>
          </div>

          {/* Gamification Card */}
          <div className="card rank-card">
            <h4>Current Rank</h4>
            <div className="badge-display">{user.rank}</div>
            
            <div className="star-display">
              <span className="star-icon">★</span>
              <span>{user.stars.toLocaleString()} Stars</span>
            </div>
            
            <div className="progress-container">
              <p>Progress to Diamond Veteran</p>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="card hobbies-card">
            <h4>My Hobbies</h4>
            <div className="tags-container">
              {user.hobbies.map((hobby, index) => (
                <span key={index} className="hobby-tag">{hobby}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Feed & Activity */}
        <main className="profile-feed">
          
          {/* Create Post Section */}
          <div className="card create-post-card">
            <form onSubmit={handlePostSubmit}>
              <textarea
                placeholder="Share your thoughts or announce an event..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows="3"
              ></textarea>
              <div className="post-actions">
                <button type="button" className="attach-btn">📷 Add Photo</button>
                <button type="submit" className="post-btn">Post Update</button>
              </div>
            </form>
          </div>

          {/* Feed List */}
          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="card post-card">
                <div className="post-header">
                  <img src={user.profilePic} alt="User" className="post-avatar" />
                  <div>
                    <span className="post-author">{user.name}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.content}</p>
                </div>
                <div className="post-footer">
                  <button className="like-btn">👍 Like ({post.likes})</button>
                  <button className="comment-btn">💬 Comment</button>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default VeteranProfile;
