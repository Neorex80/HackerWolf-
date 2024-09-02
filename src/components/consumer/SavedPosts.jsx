import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const SavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState([]);
  const [error, setError] = useState('');

  const fetchSavedPosts = async () => {
    try {
      const q = query(collection(db, 'savedPosts'), where('userId', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const postsData = [];
      for (const docSnap of querySnapshot.docs) {
        const postRef = doc(db, 'posts', docSnap.data().postId);
        const postSnap = await getDoc(postRef);
        if (postSnap.exists()) {
          postsData.push({ id: postSnap.id, ...postSnap.data() });
        }
      }
      setSavedPosts(postsData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchSavedPosts();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Saved Posts</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {savedPosts.length === 0 ? (
        <p>You have no saved posts.</p>
      ) : (
        <ul>
          {savedPosts.map(post => (
            <li key={post.id} className="mb-2">
              <a href={`/posts/${post.id}`} className="text-blue-400 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedPosts;
