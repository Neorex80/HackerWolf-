import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import useUserRole from '../hooks/useUserRole';  

const ProtectedRoute = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const { role, loading: roleLoading } = useUserRole(user);

  if (loading || roleLoading) return <div>Loading...</div>;
  if (!user || (requiredRole && role !== requiredRole)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;