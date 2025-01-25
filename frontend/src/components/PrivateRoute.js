import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth_token'); // Assuming you store the token in localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
