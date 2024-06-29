import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import RegistrationTypeSelection from "./RegistrationTypeSelection";
import SchoolRegistrationInfo from "./SchoolRegistrationInfo";
import SimpleIndividualRegistrationForm from "./SimpleIndividualRegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/register" element={<RegistrationTypeSelection />} />
        <Route path="/school-registration" element={<SchoolRegistrationInfo />} />
        <Route path="/individual-registration" element={<SimpleIndividualRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;