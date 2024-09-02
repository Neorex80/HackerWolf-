import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Analytics = () => {
  const [stats, setStats] = useState({});
  const [error, setError] = useState('');

  const fetchAnalytics = async () => {
    try {
      const q = query(collection(db, 'posts'), where('author', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      let totalViews = 0;
      let totalLikes = 0;
      querySnapshot.forEach(doc => {
        const data = doc.data();
        totalViews += data.views || 0;
        totalLikes += data.likes || 0;
      });
      setStats({ totalPosts: querySnapshot.size, totalViews, totalLikes });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Analytics</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-700 rounded">
          <h3 className="text-lg font-semibold">Total Posts</h3>
          <p className="text-2xl">{stats.totalPosts}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded">
          <h3 className="text-lg font-semibold">Total Views</h3>
          <p className="text-2xl">{stats.totalViews}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded">
          <h3 className="text-lg font-semibold">Total Likes</h3>
          <p className="text-2xl">{stats.totalLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
