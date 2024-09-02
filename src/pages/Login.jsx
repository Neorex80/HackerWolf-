import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to the dashboard on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Login to HACKERWOLF</h2>
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-green-400 text-black font-bold rounded hover:bg-green-500 mb-4"
        >
          Login
        </button>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 mr-2"
          >
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={handleGithubLogin}
            className="w-full py-2 bg-gray-700 text-white font-bold rounded hover:bg-gray-800 ml-2"
          >
            Sign in with GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
