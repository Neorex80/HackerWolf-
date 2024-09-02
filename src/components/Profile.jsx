import React, { useState } from 'react';
import { auth } from '../firebase';
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';

const Profile = () => {
  const user = auth.currentUser;
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, { displayName });
      setMessage('Profile updated successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    try {
      await updateEmail(user, email);
      setMessage('Email updated successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(user, password);
      setMessage('Password updated successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-700 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleUpdateProfile} className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Update Display Name</h3>
        <input
          type="text"
          className="w-full px-3 py-2 rounded mb-2"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Name
        </button>
      </form>

      <form onSubmit={handleUpdateEmail} className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Update Email</h3>
        <input
          type="email"
          className="w-full px-3 py-2 rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Email
        </button>
      </form>

      <form onSubmit={handleUpdatePassword}>
        <h3 className="text-lg font-semibold mb-2">Update Password</h3>
        <input
          type="password"
          className="w-full px-3 py-2 rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
