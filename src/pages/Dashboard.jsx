import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreatePost from '../components/creator/CreatePost';
import ManagePosts from '../components/creator/ManagePosts';
import Analytics from '../components/creator/Analytics';
import SavedPosts from '../components/consumer/SavedPosts';
import Profile from '../components/Profile';
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Routes>
        <Route path="/" element={<Navigate to="profile" />} />
        <Route path="profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="create-post" element={
          <ProtectedRoute requiredRole="creator">
            <CreatePost />
          </ProtectedRoute>
        } />
        <Route path="manage-posts" element={
          <ProtectedRoute requiredRole="creator">
            <ManagePosts />
          </ProtectedRoute>
        } />
        <Route path="analytics" element={
          <ProtectedRoute requiredRole="creator">
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path="saved-posts" element={
          <ProtectedRoute requiredRole="consumer">
            <SavedPosts />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
};

export default Dashboard;
