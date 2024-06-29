import React, { useState } from 'react';

const SimpleIndividualRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
    affiliatedSchool: '',
    firstChoiceCommittee: '',
    firstChoiceDelegation: '',
    secondChoiceCommittee: '',
    secondChoiceDelegation: '',
    idInformation: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  // Mock data for committees and delegations
  const committees = ['Security Council', 'Human Rights Council', 'ECOSOC'];
  const delegations = ['USA', 'China', 'Russia', 'UK', 'France'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-black bg-opacity-30 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Individual Delegate Registration</h1>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-white text-sm font-medium mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="grade" className="block text-white text-sm font-medium mb-2">Grade</label>
          <input
            type="number"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="affiliatedSchool" className="block text-white text-sm font-medium mb-2">Affiliated School</label>
          <input
            type="text"
            id="affiliatedSchool"
            name="affiliatedSchool"
            value={formData.affiliatedSchool}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstChoiceCommittee" className="block text-white text-sm font-medium mb-2">1st Choice Committee</label>
          <select
            id="firstChoiceCommittee"
            name="firstChoiceCommittee"
            value={formData.firstChoiceCommittee}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Committee</option>
            {committees.map(committee => (
              <option key={committee} value={committee}>{committee}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="firstChoiceDelegation" className="block text-white text-sm font-medium mb-2">1st Choice Delegation</label>
          <select
            id="firstChoiceDelegation"
            name="firstChoiceDelegation"
            value={formData.firstChoiceDelegation}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Delegation</option>
            {delegations.map(delegation => (
              <option key={delegation} value={delegation}>{delegation}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="secondChoiceCommittee" className="block text-white text-sm font-medium mb-2">2nd Choice Committee</label>
          <select
            id="secondChoiceCommittee"
            name="secondChoiceCommittee"
            value={formData.secondChoiceCommittee}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Committee</option>
            {committees.map(committee => (
              <option key={committee} value={committee}>{committee}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="secondChoiceDelegation" className="block text-white text-sm font-medium mb-2">2nd Choice Delegation</label>
          <select
            id="secondChoiceDelegation"
            name="secondChoiceDelegation"
            value={formData.secondChoiceDelegation}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Delegation</option>
            {delegations.map(delegation => (
              <option key={delegation} value={delegation}>{delegation}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="idInformation" className="block text-white text-sm font-medium mb-2">ID Information</label>
          <input
            type="text"
            id="idInformation"
            name="idInformation"
            value={formData.idInformation}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default SimpleIndividualRegistrationForm;
