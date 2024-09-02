import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import useUserRole from '../hooks/useUserRole';

const ProtectedRoute = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const { role, loading: roleLoading } = useUserRole(user);

  if (loading || roleLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (requiredRole && role !== requiredRole) return <Navigate to="/unauthorized" />;
  
  return children;
};

export default ProtectedRoute;
