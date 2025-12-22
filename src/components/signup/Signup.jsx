import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    profession: '',
    hobbies: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will connect to your Node.js/Express REST API
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      <section>
        <h2>Join VeteranMeet</h2>
        <p>Create your profile to connect with veterans and engage in community services.</p>
        <hr />

        <form onSubmit={handleSubmit}>
          {/* Account Credentials */}
          <fieldset>
            <legend>Account Details</legend>
            <div>
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder="Unique username" 
                value={formData.username}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
          </fieldset>

          {/* Veteran Profile Information */}
          <fieldset>
            <legend>Professional Profile</legend>
            <div>
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Your Name" 
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Profession</label>
              <input 
                type="text" 
                name="profession" 
                placeholder="e.g., Former Educator, Retired Engineer" 
                value={formData.profession}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Hobbies</label>
              <textarea 
                name="hobbies" 
                placeholder="e.g., Book reading, Plantation, Public speaking" 
                value={formData.hobbies}
                onChange={handleChange}
              ></textarea>
            </div>
          </fieldset>

          {/* Location for Event Searching */}
          <div>
            <label>Current City</label>
            <input 
              type="text" 
              name="city" 
              placeholder="Required for searching local events" 
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Create Veteran Profile</button>
        </form>
        
        <div>
          <p>Are you an Organization? <a href="/org-signup">Register here</a></p>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
