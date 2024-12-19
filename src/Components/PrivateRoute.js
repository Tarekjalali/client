import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.AuthReducer.user);

  // If no token, redirect to home
  if (!token) {
    return <Navigate to="/" />;
  }

  // If a required role is specified and the user's role does not match, show an unauthorized message
  if (requiredRole && user?.role !== requiredRole) {
    return <h1>You do not have access</h1>;
  }

  // If token and (if specified) role matches, render the children
  return children;
}

export default PrivateRoute;