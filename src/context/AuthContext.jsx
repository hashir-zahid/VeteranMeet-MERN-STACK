import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // veteran/admin
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("veteranUser");
    const token = localStorage.getItem("veteranToken");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login (Veteran/Admin)
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, message: data.message };
      }

      // Save session
      localStorage.setItem("veteranUser", JSON.stringify(data.user));
      localStorage.setItem("veteranToken", data.token);
      setUser(data.user);

      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: "Server error" };
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("veteranUser");
    localStorage.removeItem("veteranToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
