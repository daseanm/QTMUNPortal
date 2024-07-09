import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    const isLoggedIn = localStorage.getItem('userToken') !== null;
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (isLoggedIn) {
      navigate(isAdmin ? '/admin' : '/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-4 animate-fadeIn">
      <div className="text-center bg-blue-950 bg-opacity-30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-400 border-opacity-20">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-blue-200 mb-8">Oops! Page not found.</p>
        <p className="text-xl text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button 
          onClick={handleGoHome}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;