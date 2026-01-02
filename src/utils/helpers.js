// src/utils/helpers.js

import {
  STORAGE_KEYS,
  API_CONFIG,
  USER_ROLES,
} from "./constants";

// ==============================
// Local Storage Helpers
// ==============================
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Storage save error:", error);
  }
};

export const getFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Storage read error:", error);
    return null;
  }
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearAuthStorage = () => {
  removeFromStorage(STORAGE_KEYS.TOKEN);
  removeFromStorage(STORAGE_KEYS.USER);
};

// ==============================
// Auth Helpers
// ==============================
export const saveAuthData = (token, user) => {
  saveToStorage(STORAGE_KEYS.TOKEN, token);
  saveToStorage(STORAGE_KEYS.USER, user);
};

export const getAuthToken = () => {
  return getFromStorage(STORAGE_KEYS.TOKEN);
};

export const getAuthUser = () => {
  return getFromStorage(STORAGE_KEYS.USER);
};

export const isLoggedIn = () => {
  return !!getAuthToken();
};

export const hasRole = (role) => {
  const user = getAuthUser();
  return user?.role === role;
};

export const isAdmin = () => hasRole(USER_ROLES.ADMIN);
export const isVeteran = () => hasRole(USER_ROLES.VETERAN);

// ==============================
// API Helpers
// ==============================
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export const getAuthHeaders = () => {
  const token = getAuthToken();
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
};

// ==============================
// Date Helpers
// ==============================
export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatDateTime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// ==============================
// Validation Helpers
// ==============================
export const isEmailValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isEmpty = (value) =>
  value === null || value === undefined || value === "";

export const isPasswordStrong = (password) =>
  password?.length >= 6;

// ==============================
// Text Helpers
// ==============================
export const capitalize = (text = "") =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const truncateText = (text, length = 100) =>
  text.length > length ? `${text.slice(0, length)}...` : text;

// ==============================
// Error Helpers
// ==============================
export const getErrorMessage = (error) => {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "Unexpected error occurred"
  );
};
