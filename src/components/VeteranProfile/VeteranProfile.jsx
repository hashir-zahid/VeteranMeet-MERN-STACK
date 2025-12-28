import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import StarBadge, { SimpleStarBadge } from '../StarBadge/StarBadge';
import Button from '../common/Button';
import Modal from '../common/Modal';
import Loader from '../common/Loader';
import EventCard from '../EventCard/EventCard';
import './VeteranProfile.css';
import {
  FaUserEdit,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaHeart,
  FaShareAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEdit,
  FaCamera,
  FaCheck,
  FaTimes
} from 'react-icons/fa';

const VeteranProfile = ({ 
  veteranId,
  isEditMode = false,
  onEdit,
  onSave,
  onClose,
  showFullProfile = true
}) => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('about');
  const [isEditing, setIsEditing] = useState(isEditMode);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({});
  const [newHobby, setNewHobby] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  // Sample data - Replace with API call
  const sampleProfile = {
    _id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    coverImage: 'https://images.unsplash.com/photo-1518834103326-7d2f48b6b1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    profession: 'Retired Teacher',
    location: 'New York, USA',
    bio: 'Retired high school teacher with 35 years of experience in education. Passionate about mentoring young minds and community service. Currently involved in various educational outreach programs.',
    stars: 45000,
    rank: 'Ruby Veteran',
    joinedDate: '2023-01-15',
    hobbies: ['Reading', 'Teaching', 'Gardening', 'Public Speaking', 'Mentoring'],
    skills: ['Education', 'Curriculum Development', 'Public Speaking', 'Leadership', 'Mentoring'],
    experience: [
      {
        id: 1,
        position: 'High School Teacher',
        company: 'Lincoln High School',
        duration: '1985-2020',
        description: 'Taught mathematics and physics to high school students.'
      },
      {
        id: 2,
        position: 'Educational Consultant',
        company: 'Self-Employed',
        duration: '2020-Present',
        description: 'Consulting schools on curriculum development and teacher training.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Masters in Education',
        institution: 'Columbia University',
        year: '1985'
      },
      {
        id: 2,
        degree: 'Bachelors in Mathematics',
        institution: 'University of California',
        year: '1983'
      }
    ],
    socialLinks: {
      website: 'https://johnsmith.com',
      linkedin: 'https://linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith',
      facebook: 'https://facebook.com/johnsmith'
    },
    stats: {
      eventsAttended: 45,
      eventsHosted: 12,
      followers: 234,
      following: 156,
      communityHours: 320
    },
    isFollowing: false,
    isCurrentUser: false
  };

  const sampleEvents = [
    {
      _id: 'e1',
      title: 'Educational Workshop for Underprivileged Children',
      type: 'Professional Talk',
      date: '2024-03-15T10:00:00',
      location: 'New York Public Library',
      stars: 2500,
      participantsCount: 45,
      maxParticipants: 50,
      description: 'A workshop focused on basic education skills for children from underprivileged backgrounds.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      organizer: sampleProfile,
      tags: ['Education', 'Children', 'Workshop'],
      isInterested: true
    },
    {
      _id: 'e2',
      title: 'Community Garden Planting Day',
      type: 'Plantation Drive',
      date: '2024-03-20T09:00:00',
      location: 'Central Park Community Garden',
      stars: 1800,
      participantsCount: 30,
      maxParticipants: 40,
      description: 'Join us for a day of planting and gardening in our community garden.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      organizer: sampleProfile,
      tags: ['Gardening', 'Community', 'Environment'],
      isInterested: false
    }
  ];

  useEffect(() => {
    fetchProfile();
  }, [veteranId]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const isCurrentUser = user?._id === veteranId;
      const profileData = {
        ...sampleProfile,
        _id: veteranId || '1',
        isCurrentUser,
        isFollowing: !isCurrentUser && Math.random() > 0.5
      };
      
      setProfile(profileData);
      setFormData(profileData);
      setEvents(sampleEvents);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddHobby = () => {
    if (newHobby.trim() && !formData.hobbies.includes(newHobby.trim())) {
      setFormData(prev => ({
        ...prev,
        hobbies: [...prev.hobbies, newHobby.trim()]
      }));
      setNewHobby('');
    }
  };

  const handleRemoveHobby = (hobbyToRemove) => {
    setFormData(prev => ({
      ...prev,
      hobbies: prev.hobbies.filter(hobby => hobby !== hobbyToRemove)
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (onSave) {
        await onSave(formData);
      }
      setIsEditing(false);
      setProfile(formData);
    } catch (error) {
      console.error('Failed to save profile:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      setIsEditing(false);
      setFormData(profile);
      setImagePreview('');
    }
  };

  const handleFollowToggle = async () => {
    if (!user) {
      alert('Please login to follow veterans');
      return;
    }

    try {
      // API call to toggle follow
      const newFollowingState = !profile.isFollowing;
      setProfile(prev => ({
        ...prev,
        isFollowing: newFollowingState,
        stats: {
          ...prev.stats,
          followers: newFollowingState ? prev.stats.followers + 1 : prev.stats.followers - 1
        }
      }));
    } catch (error) {
      console.error('Failed to toggle follow:', error);
    }
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/veteran/${veteranId}`;
    if (navigator.share) {
      navigator.share({
        title: `${profile.name}'s Profile`,
        text: `Check out ${profile.name}'s profile on VeteranMeet`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Profile link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <Loader type="spinner" size="large" message="Loading profile..." />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="profile-error">
        <h3>Profile not found</h3>
        <p>The veteran profile you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className={`veteran-profile ${showFullProfile ? 'full-profile' : 'compact-profile'}`}>
      {/* Cover Photo */}
      <div className="profile-cover">
        <img 
          src={profile.coverImage} 
          alt="Cover" 
          className="cover-image"
        />
        {isEditing && (
          <div className="cover-edit-overlay">
            <Button variant="outline" size="small">
              <FaCamera />
              Change Cover
            </Button>
          </div>
        )}
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={formData.profileImage || profile.profileImage} 
            alt={profile.name}
            className="profile-image"
          />
          {isEditing && (
            <div className="image-edit-overlay">
              <label htmlFor="profile-image-upload" className="edit-image-btn">
                <FaCamera />
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          )}
        </div>

        <div className="profile-info">
          <div className="profile-main-info">
            <h1 className="profile-name">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Name"
                />
              ) : (
                profile.name
              )}
            </h1>
            
            <div className="profile-profession">
              {isEditing ? (
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Profession"
                />
              ) : (
                <>
                  <FaBriefcase className="profession-icon" />
                  {profile.profession}
                </>
              )}
            </div>

            <div className="profile-location">
              <FaMapMarkerAlt className="location-icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Location"
                />
              ) : (
                profile.location
              )}
            </div>

            <div className="profile-joined">
              <FaCalendarAlt className="joined-icon" />
              Joined {new Date(profile.joinedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </div>
          </div>

          <div className="profile-actions">
            {!profile.isCurrentUser ? (
              <>
                <Button
                  variant={profile.isFollowing ? 'outline' : 'primary'}
                  size="medium"
                  onClick={handleFollowToggle}
                  className="follow-btn"
                >
                  <FaUsers />
                  {profile.isFollowing ? 'Following' : 'Follow'}
                </Button>
                
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={() => {/* Open message modal */}}
                >
                  <FaEnvelope />
                  Message
                </Button>
              </>
            ) : isEditing ? (
              <>
                <Button
                  variant="success"
                  size="medium"
                  onClick={handleSave}
                  loading={saving}
                  disabled={saving}
                >
                  <FaCheck />
                  Save Changes
                </Button>
                
                <Button
                  variant="danger"
                  size="medium"
                  onClick={handleCancel}
                  disabled={saving}
                >
                  <FaTimes />
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                size="medium"
                onClick={() => setIsEditing(true)}
              >
                <FaUserEdit />
                Edit Profile
              </Button>
            )}
            
            <Button
              variant="outline"
              size="medium"
              onClick={handleShare}
            >
              <FaShareAlt />
              Share
            </Button>
          </div>
        </div>

        {/* Star Badge */}
        <div className="profile-badge">
          <StarBadge 
            stars={profile.stars} 
            size="large" 
            showDetails={false}
            animate={true}
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="profile-stats">
        <div className="stat-item">
          <div className="stat-value">{profile.stats.eventsAttended}</div>
          <div className="stat-label">Events Attended</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{profile.stats.eventsHosted}</div>
          <div className="stat-label">Events Hosted</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{profile.stats.followers}</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{profile.stats.following}</div>
          <div className="stat-label">Following</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{profile.stats.communityHours}</div>
          <div className="stat-label">Community Hours</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events ({events.length})
          </button>
          <button
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            Social
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="about-content">
              <div className="bio-section">
                <h3>About Me</h3>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="edit-textarea"
                    placeholder="Tell us about yourself..."
                    rows="5"
                  />
                ) : (
                  <p className="bio-text">{profile.bio}</p>
                )}
              </div>

              <div className="hobbies-section">
                <h3>Hobbies & Interests</h3>
                <div className="hobbies-container">
                  {isEditing ? (
                    <div className="edit-hobbies">
                      <div className="hobbies-list">
                        {formData.hobbies.map((hobby, index) => (
                          <div key={index} className="hobby-tag edit">
                            {hobby}
                            <button
                              type="button"
                              onClick={() => handleRemoveHobby(hobby)}
                              className="remove-hobby"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="add-hobby-form">
                        <input
                          type="text"
                          value={newHobby}
                          onChange={(e) => setNewHobby(e.target.value)}
                          placeholder="Add a hobby..."
                          className="hobby-input"
                          onKeyPress={(e) => e.key === 'Enter' && handleAddHobby()}
                        />
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={handleAddHobby}
                          disabled={!newHobby.trim()}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="hobbies-list">
                      {profile.hobbies.map((hobby, index) => (
                        <span key={index} className="hobby-tag">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="skills-section">
                <h3>Skills & Expertise</h3>
                <div className="skills-list">
                  {profile.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <FaStar className="skill-icon" />
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="events-content">
              <div className="events-filters">
                <Button variant="outline" size="small">Upcoming</Button>
                <Button variant="outline" size="small">Past</Button>
                <Button variant="outline" size="small">Hosted</Button>
                <Button variant="outline" size="small">Interested</Button>
              </div>
              
              <div className="events-grid">
                {events.map(event => (
                  <EventCard
                    key={event._id}
                    event={event}
                    onInterestToggle={() => {}}
                    onShare={() => {}}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="experience-content">
              <div className="experience-section">
                <h3>
                  <FaBriefcase className="section-icon" />
                  Work Experience
                </h3>
                {profile.experience.map((exp) => (
                  <div key={exp.id} className="experience-item">
                    <div className="experience-header">
                      <h4 className="experience-position">{exp.position}</h4>
                      <span className="experience-company">{exp.company}</span>
                    </div>
                    <div className="experience-duration">{exp.duration}</div>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                ))}
              </div>

              <div className="education-section">
                <h3>
                  <FaGraduationCap className="section-icon" />
                  Education
                </h3>
                {profile.education.map((edu) => (
                  <div key={edu.id} className="education-item">
                    <div className="education-header">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <span className="education-institution">{edu.institution}</span>
                    </div>
                    <div className="education-year">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Tab */}
          {activeTab === 'social' && (
            <div className="social-content">
              <div className="social-links">
                {profile.socialLinks.website && (
                  <a 
                    href={profile.socialLinks.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGlobe />
                    <span>Website</span>
                  </a>
                )}
                
                {profile.socialLinks.linkedin && (
                  <a 
                    href={profile.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                )}
                
                {profile.socialLinks.twitter && (
                  <a 
                    href={profile.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaTwitter />
                    <span>Twitter</span>
                  </a>
                )}
                
                {profile.socialLinks.facebook && (
                  <a 
                    href={profile.socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaFacebook />
                    <span>Facebook</span>
                  </a>
                )}
              </div>

              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-items">
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>{profile.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VeteranProfile;
