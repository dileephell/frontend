import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", credentials);
      setIsLoggedIn(true);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      await axios.post("http://localhost:3000/api/v1/user/signup", userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
