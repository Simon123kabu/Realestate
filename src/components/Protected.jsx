// src/components/Protected.jsx (Higher-Order Component for route protection)
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Protected = ({ children, requireAgent = false }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to home if not logged in (or trigger login modal in parent component)
    return <Navigate to="/" replace />;
  }

  if (requireAgent && user.role !== 'agent') {
    // Redirect if not agent
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;