import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminUser, adminLoading] = useAuthState(auth);

  useEffect(() => {
    const fetchUsers = async () => {
      const db = getFirestore();
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setUsers(userList);
      setLoading(false);
    };

    if (adminUser) {
      fetchUsers();
    }
  }, [adminUser]);

  const updateUserRole = async (userId, newRole) => {
    const db = getFirestore();
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, { role: newRole });
    setUsers(users.map(user => (user.id === userId ? { ...user, role: newRole } : user)));
  };

  if (adminLoading || loading) {
    return <div>Loading...</div>;
  }

  if (!adminUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="admin-dashboard">
      <h2 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h2>
      <table className="min-w-full bg-gray-800 text-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Current Role</th>
            <th className="py-2 px-4">Change Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role || 'N/A'}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => updateUserRole(user.id, 'creator')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                >
                  Set as Creator
                </button>
                <button
                  onClick={() => updateUserRole(user.id, 'consumer')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded ml-2"
                >
                  Set as Consumer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
