import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import RegistrationTypeSelection from "./RegistrationTypeSelection";
import SchoolRegistrationInfo from "./SchoolRegistrationInfo";
import SimpleIndividualRegistrationForm from "./SimpleIndividualRegistrationForm";
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';
import PresidentDashboard from './PresidentDashboard';
import NotFoundPage from './NotFoundPage';

const isLoggedIn = () => localStorage.getItem('userToken') !== null;
const isAdmin = () => localStorage.getItem('isAdmin') === 'true';
const isPresident = () => localStorage.getItem('isPresident') === 'true';

const ProtectedRoute = ({ children, redirectTo = "/" }) => {
  if (!isLoggedIn()) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};

const DashboardRouter = () => {
  if (isAdmin()) return <AdminDashboard />;
  if (isPresident()) return <PresidentDashboard />;
  return <StudentDashboard />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isLoggedIn() ? <Navigate to="/dashboard" replace /> : <LoginComponent />
        } />
        <Route path="/login" element={
          isLoggedIn() ? <Navigate to="/dashboard" replace /> : <LoginComponent />
        } />
        <Route path="/register" element={<RegistrationTypeSelection />} />
        <Route path="/school-registration" element={<SchoolRegistrationInfo />} />
        <Route path="/individual-registration" element={<SimpleIndividualRegistrationForm />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardRouter />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;