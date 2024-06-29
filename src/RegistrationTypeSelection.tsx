import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationTypeSelection = () => {
  const navigate = useNavigate();

  const handleSelectType = (type: 'individual' | 'school') => {
    if (type === 'individual') {
      navigate('/individual-registration');
    } else {
      navigate('/school-registration');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="w-full max-w-md bg-black bg-opacity-30 backdrop-blur-xl rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Choose Registration Type</h1>

        <button 
          onClick={() => handleSelectType('individual')}
          className="w-full bg-blue-600 text-white py-3 rounded-md mb-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          Registration for Individual Delegates
        </button>

        <button 
          onClick={() => handleSelectType('school')}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
        >
          Registration as a School
        </button>
      </div>
    </div>
  );
};

export default RegistrationTypeSelection;