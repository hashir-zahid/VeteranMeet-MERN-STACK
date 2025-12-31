// src/services/authService.js
import api from "./api";

/* =========================
   AUTHENTICATION SERVICES
   ========================= */

// Veteran Registration
export const registerVeteran = async (formData) => {
  const response = await api.post("/auth/register/veteran", formData);
  return response.data;
};

// Organization Registration
export const registerOrganization = async (formData) => {
  const response = await api.post("/auth/register/organization", formData);
  return response.data;
};

// Login (Veteran / Organization / Admin)
export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  // Save token if backend returns it
  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// Get Logged-in User Profile
export const getProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};
