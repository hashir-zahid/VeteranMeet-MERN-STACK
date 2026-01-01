// services/veteranService.js
import api from "./api";

/*
|--------------------------------------------------------------------------
| VETERAN SERVICES – VeteranMeet
|--------------------------------------------------------------------------
| Profile, social feed, and networking
*/

// Get logged-in veteran profile
export const getMyProfile = () => {
  return api.get("/veterans/me");
};

// Update veteran profile
export const updateVeteranProfile = (profileData) => {
  return api.put("/veterans/profile", profileData);
};

// Update hobbies / interests
export const updateHobbies = (hobbies) => {
  return api.put("/veterans/hobbies", { hobbies });
};

// Follow another veteran
export const followVeteran = (veteranId) => {
  return api.post(`/veterans/follow/${veteranId}`);
};

// Unfollow veteran
export const unfollowVeteran = (veteranId) => {
  return api.delete(`/veterans/unfollow/${veteranId}`);
};

// Get followers & following list
export const getConnections = () => {
  return api.get("/veterans/connections");
};

// Create a post (text / image / video)
export const createPost = (postData) => {
  return api.post("/posts", postData);
};

// Get social feed (followed veterans)
export const getFeed = () => {
  return api.get("/posts/feed");
};

// Like a post
export const likePost = (postId) => {
  return api.post(`/posts/${postId}/like`);
};

// Comment on a post
export const commentOnPost = (postId, comment) => {
  return api.post(`/posts/${postId}/comment`, { comment });
};

// Get veteran recognition (stars, badges, category)
export const getVeteranStars = () => {
  return api.get("/veterans/stars");
};
