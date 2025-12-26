// services/veteranService.js
import api from "./api";

// Create / Update Veteran Profile
export const updateVeteranProfile = (data) => {
  return api.put("/veterans/profile", data);
};

// Get logged-in veteran profile
export const getMyProfile = () => {
  return api.get("/veterans/me");
};

// Follow another veteran or organization
export const followUser = (userId) => {
  return api.post(`/veterans/follow/${userId}`);
};

// Add or edit hobbies
export const updateHobbies = (hobbies) => {
  return api.put("/veterans/hobbies", { hobbies });
};

// Create post (text / media / both)
export const createPost = (postData) => {
  return api.post("/veterans/post", postData);
};

// Get feed (followed users posts)
export const getFeed = () => {
  return api.get("/veterans/feed");
};

// Get veteran stars & category
export const getVeteranStars = () => {
  return api.get("/veterans/stars");
};
                  

