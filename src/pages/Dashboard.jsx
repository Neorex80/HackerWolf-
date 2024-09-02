import React from 'react';
import useUserRole from '../hooks/useUserRole';
import CreatorDashboard from '../components/CreatorDashboard';
import ConsumerDashboard from '../components/ConsumerDashboard';

const Dashboard = () => {
  const { role, loading } = useUserRole();

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while the role is being determined
  }

  if (role === 'creator') {
    return <CreatorDashboard />;
  } else if (role === 'consumer') {
    return <ConsumerDashboard />;
  } else {
    return <div>Unauthorized Access</div>; // Handle cases where the role is undefined or user isn't authorized
  }
};

export default Dashboard;
