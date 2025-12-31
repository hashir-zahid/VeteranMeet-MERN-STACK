// src/services/api.js
import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: true, // useful if you later use cookies/sessions
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Handle global response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("token");
      // window.location.href = "/login"; // optional redirect
    }
    return Promise.reject(error);
  }
);

export default api;
