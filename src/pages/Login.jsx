// src/pages/Login.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('Sign Up'); // 'Sign Up' or 'Login'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = mode === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const payload = mode === 'Sign Up' ? { name, email, password } : { email, password };
      const { data } = await axios.post(`${backendUrl}${url}`, payload);

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      if (
        err.response?.data?.code === 11000 ||
        err.response?.data?.message?.toLowerCase().includes('duplicate key')
      ) {
        toast.error('That email is already in use. Try logging in instead.');
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 pt-10 sm:pt-14">
      <form
        onSubmit={onSubmitHandler}
        className="relative max-w-md w-full bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
      >
        {/* Mode Toggle */}
        <div className="flex justify-center mb-6 space-x-4">
          {['Sign Up', 'Login'].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                mode === m
                  ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700 mb-4">
          {mode === 'Sign Up' ? 'Create Your Account' : 'Welcome Back'}
        </h2>
        <p className="text-center text-gray-700 mb-6 text-sm">
          {mode === 'Sign Up'
            ? 'Sign up to manage your appointments'
            : 'Log in to access your dashboard'}
        </p>

        {/* Name Field */}
        {mode === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          {mode === 'Sign Up' ? 'Create Account' : 'Log In'}
        </button>

        {/* Switch Mode Link */}
        <p className="mt-4 text-center text-gray-600 text-sm">
          {mode === 'Sign Up' ? 'Already have an account? ' : "Don't have an account? "}
          <span
            onClick={() => setMode(mode === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-teal-600 font-medium cursor-pointer underline"
          >
            {mode === 'Sign Up' ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
