import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SavedPosts from './consumer/SavedPosts';
import Profile from './Profile';

const ConsumerDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="saved-posts" element={<SavedPosts />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

const Overview = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
    {/* Add personalized feed or recommendations here */}
    <p>Welcome to your dashboard!</p>
  </div>
);

export default ConsumerDashboard;
