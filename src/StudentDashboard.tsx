import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPanel = ({ title, content }) => (
  <div className="bg-blue-900 bg-opacity-40 backdrop-blur-md p-6 rounded-2xl border border-blue-300 border-opacity-20 
                  transition-all duration-300 ease-in-out
                  hover:bg-opacity-60 hover:shadow-lg hover:shadow-blue-500/50
                  hover:-translate-y-1 hover:scale-105
                  transform perspective-1000">
    <h2 className="text-xl font-semibold mb-4 text-blue-200">{title}</h2>
    <p className="text-gray-300">{content}</p>
  </div>
);

const NotificationItem = ({ title, content }) => (
  <div className="p-3 hover:bg-blue-600 hover:bg-opacity-30 transition-colors duration-200 rounded-lg">
    <h3 className="text-sm font-semibold text-blue-200">{title}</h3>
    <p className="text-xs text-gray-300">{content}</p>
  </div>
);

const StudentDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { title: "New Announcement", content: "Check the latest updates for the conference." },
    { title: "Schedule Change", content: "The opening ceremony time has been updated." },
    { title: "Document Submission", content: "Don't forget to submit your position paper." },
  ];

  useEffect(() => {
    alert('This is the QTMUN Portal Dashboard. Here you can view announcements, your delegate information, schedule, and resources.');
  }, [navigate]);

  const handleSignOut = () => {
    alert('This is the QTMUN Portal Dashboard. Here you can view announcements, your delegate information, schedule, and resources.');
  };

  const handleInfoClick = () => {
    alert('This is the QTMUN Portal Dashboard. Here you can view announcements, your delegate information, schedule, and resources.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-4 animate-fadeIn">
      <div className="w-full max-w-5xl bg-blue-950 bg-opacity-30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-blue-400 border-opacity-20">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">QTMUN Portal</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 bg-blue-500 bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className={`absolute right-0 mt-2 w-64 bg-blue-900 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg py-1 z-20 border border-blue-300 border-opacity-20 transition-all duration-300 ease-in-out ${notificationsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-3 border-b border-blue-700">
                  <h2 className="text-lg font-semibold text-white">Notifications</h2>
                </div>
                {notifications.map((notification, index) => (
                  <NotificationItem key={index} title={notification.title} content={notification.content} />
                ))}
              </div>
            </div>
            <span className="text-white">Welcome, User!</span>
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <img src="/api/placeholder/40/40" alt="User portrait" className="w-full h-full object-cover" />
              </button>
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <button
                  onClick={handleInfoClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Information
                </button>
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardPanel 
            title="Announcement" 
            content="Important announcements will be displayed in this section." 
          />
          <DashboardPanel 
            title="Delegate's Information" 
            content="Your delegate information will appear here." 
          />
          <DashboardPanel 
            title="Schedule" 
            content="Your event schedule will be shown here." 
          />
          <DashboardPanel 
            title="Resources" 
            content="Access your QTMUN resources from this panel." 
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;