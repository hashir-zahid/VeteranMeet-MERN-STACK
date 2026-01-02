// src/utils/constants.js

// ==============================
// App Info
// ==============================
export const APP_CONFIG = {
  NAME: "VeteranMeet",
  VERSION: "1.0.0",
};

// ==============================
// Environment
// ==============================
export const ENV = import.meta.env.MODE || "development";

// ==============================
// API Configuration
// ==============================
export const API_CONFIG = {
  BASE_URL:
    import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  TIMEOUT: 10000,
};

// ==============================
// API Endpoints
// ==============================
export const API_ENDPOINTS = {
  AUTH: {
    BASE: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PROFILE: "/auth/profile",
  },

  USERS: {
    BASE: "/users",
    BY_ID: (id) => `/users/${id}`,
  },

  VETERANS: {
    BASE: "/veterans",
    BY_ID: (id) => `/veterans/${id}`,
  },

  EVENTS: {
    BASE: "/events",
    BY_ID: (id) => `/events/${id}`,
  },
};

// ==============================
// User Roles
// ==============================
export const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  VETERAN: "veteran",
  USER: "user",
});

// ==============================
// Local Storage Keys
// ==============================
export const STORAGE_KEYS = Object.freeze({
  TOKEN: "veteranmeet_token",
  USER: "veteranmeet_user",
});

// ==============================
// Date Formats
// ==============================
export const DATE_FORMATS = {
  SHORT: "DD MMM YYYY",
  FULL: "DD MMM YYYY, hh:mm A",
};

// ==============================
// UI Messages
// ==============================
export const UI_MESSAGES = {
  LOADING: "Loading, please wait...",
  ERROR_GENERIC: "Something went wrong. Please try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NO_DATA: "No data available",
  LOGIN_REQUIRED: "Please login to continue"_
