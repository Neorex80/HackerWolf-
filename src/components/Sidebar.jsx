import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-6 text-2xl font-bold">HACKERWOLF</div>
      <nav className="mt-10">
        <ul>
          <li className="px-6 py-2 hover:bg-gray-700">
            <Link to="/dashboard">Home</Link>
          </li>
          {role === 'creator' && (
            <>
              <li className="px-6 py-2 hover:bg-gray-700">
                <Link to="/dashboard/create-post">Create Post</Link>
              </li>
              <li className="px-6 py-2 hover:bg-gray-700">
                <Link to="/dashboard/manage-posts">Manage Posts</Link>
              </li>
              <li className="px-6 py-2 hover:bg-gray-700">
                <Link to="/dashboard/analytics">Analytics</Link>
              </li>
            </>
          )}
          <li className="px-6 py-2 hover:bg-gray-700">
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
