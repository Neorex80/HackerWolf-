import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, 'posts'), where('author', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postsData);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'posts', id));
        setPosts(posts.filter(post => post.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Your Posts</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <table className="min-w-full bg-gray-700">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Tags</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="text-center">
                <td className="py-2">{post.title}</td>
                <td className="py-2">{post.tags.join(', ')}</td>
                <td className="py-2">
                  {/* Implement Edit functionality as needed */}
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManagePosts;
