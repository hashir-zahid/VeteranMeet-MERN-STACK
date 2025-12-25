// services/authService.js
import api from "./api";

// Veteran Registration
export const registerVeteran = (data) => {
  return api.post("/auth/register/veteran", data);
};

// Organization Registration
export const registerOrganization = (data) => {
  return api.post("/auth/register/organization", data);
};

// Login (Veteran / Organization)
export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};
