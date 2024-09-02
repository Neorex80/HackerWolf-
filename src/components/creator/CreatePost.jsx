import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
        author: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      navigate('/dashboard/manage-posts');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-700 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleCreatePost}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="content">Content</label>
          <textarea
            id="content"
            className="w-full px-3 py-2 rounded h-48"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="tags">Tags (comma separated)</label>
          <input
            type="text"
            id="tags"
            className="w-full px-3 py-2 rounded"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
