// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddApplication from './pages/AddApplication';
import ViewApplications from './pages/ViewApplications';
import AnalyticsPage from './pages/AnalyticsPage';
import LoginPage from './components/LoginPage';
import LogoutButton from './components/LogoutButton';
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [applications, setApplications] = useState([]);

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Add Application</Link></li>
            <li><Link to="/view">View Applications</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            {!isAuthenticated ? <li><Link to="/login">Log In</Link></li> : <li><LogoutButton /></li>}
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/" element={<PrivateRoute component={AddApplication} onAdd={addApplication} />} />
          <Route path="/view" element={<PrivateRoute component={ViewApplications} applications={applications} />} />
          <Route path="/analytics" element={<PrivateRoute component={AnalyticsPage} applications={applications} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
