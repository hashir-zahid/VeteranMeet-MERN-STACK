// src/utils/constants.js

// ==============================
// App Info
// ==============================
export const APP_NAME = "VeteranMeet";

// ==============================
// API Configuration
// ==============================
export const API_BASE_URL = "http://localhost:5000/api";

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: "/auth",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",

  USERS: "/users",
  VETERANS: "/veterans",

  EVENTS: "/events",
  EVENT_BY_ID: (id) => `/events/${id}`,
};

// ==============================
// User Roles
// ==============================
export const USER_ROLES = {
  ADMIN: "admin",
  VETERAN: "veteran",
  USER: "user",
};

// ==============================
// Local Storage Keys
// ==============================
export const STORAGE_KEYS = {
  TOKEN: "veteranmeet_token",
  USER: "veteranmeet_user",
};

// ==============================
// Date Formats
// ==============================
export const DATE_FORMATS = {
  DISPLAY: "DD MMM YYYY",
  FULL: "DD MMM YYYY, hh:mm A",
};

// ==============================
// UI Messages
// ==============================
export const MESSAGES = {
  LOADING: "Loading, please wait...",
  ERROR: "Something went wrong. Please try again.",
  NO_DATA: "No data available",
};
