// src/utils/helpers.js

import { STORAGE_KEYS } from "./constants";

// ==============================
// Local Storage Helpers
// ==============================
export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};

// ==============================
// Auth Helpers
// ==============================
export const saveAuthData = (token, user) => {
  saveToStorage(STORAGE_KEYS.TOKEN, token);
  saveToStorage(STORAGE_KEYS.USER, user);
};

export const logoutUser = () => {
  removeFromStorage(STORAGE_KEYS.TOKEN);
  removeFromStorage(STORAGE_KEYS.USER);
};

// ==============================
// Date Helpers
// ==============================
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ==============================
// Validation Helpers
// ==============================
export const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isEmpty = (value) => {
  return value === null || value === undefined || value === "";
};

// ==============================
// Text Helpers
// ==============================
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// ==============================
// API Helper
// ==============================
export const buildApiUrl = (endpoint) => {
  return `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}${endpoint}`;
};
