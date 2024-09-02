import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './creator/CreatePost';
import ManagePosts from './creator/ManagePosts';
import Analytics from './creator/Analytics';
import Profile from './Profile';

const CreatorDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="create-post" element={<CreatePost />} />
      <Route path="manage-posts" element={<ManagePosts />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

const Overview = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
    {/* Add overview statistics and recent activities here */}
    <p>Welcome to your dashboard!</p>
  </div>
);

export default CreatorDashboard;
