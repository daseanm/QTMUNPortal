import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SchoolRegistrationInfo = () => {
  const navigate = useNavigate(); // Create navigate variable

  const handleDownload = () => {
    // This is a placeholder function. In a real application, this would trigger the form download.
    console.log('Downloading form...');
  };

  const handleUnderstand = () => {
    console.log('User understood the instructions');
    navigate('/'); // Redirect to LoginComponent
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="w-full max-w-md bg-black bg-opacity-30 backdrop-blur-xl rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">School Registration</h1>

        <p className="text-white mb-6">
          To register as a school, please download the form below and send it to mun-bihz@basischina.com.
        </p>

        <button 
          onClick={handleDownload}
          className="w-full bg-blue-600 text-white py-3 rounded-md mb-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          Download Registration Form
        </button>

        <button 
          onClick={handleUnderstand}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default SchoolRegistrationInfo;