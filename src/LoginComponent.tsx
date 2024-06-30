import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Copyright © 2024 Sean Ma. All Rights Reserved.

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!email || !password || !isValidEmail(email)) {
      setError('Please enter a valid email address and password.');
    } else {
      setError('');
      setIsSubmitting(true);
      console.log('Login attempt with:', email, 'and password');

      // Add fade-out animation to the login form
      const formElement = e.target as HTMLFormElement;
      formElement.classList.add('animate-fadeOut');

      // Simulate login process and redirect to dashboard
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/StudentDashboard');
      }, 300); // Match this with the animation duration
    }
  }, [email, password, isSubmitting, navigate]);

  useEffect(() => {
    setIsSubmitting(false);
  }, [email, password]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-black bg-opacity-30 backdrop-blur-xl rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">QTMUN Portal</h1>

        {error && (
          <div 
            className="bg-red-500 bg-opacity-20 backdrop-blur-lg text-white p-3 rounded-md mb-6 text-sm"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out pr-20"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none transition-colors duration-300 bg-transparent px-3 py-2 text-2xl"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? '🙈' : '🙉'}
            </button>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 rounded-md mb-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>

        <p className="text-center text-sm text-gray-400">
          Not a member yet?{' '}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/register');
            }} 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Sign Up
          </a>
        </p>

        <p className="text-center text-xs text-gray-500 mt-8">
          Copyright © 2024 Sean Ma. All Rights Reserved.
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;