// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddApplication from './pages/AddApplication';
import ViewApplications from './pages/ViewApplications';
import './App.css';

const App = () => {
  const [applications, setApplications] = useState([]);

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Add Application</Link></li>
            <li><Link to="/view">View Applications</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AddApplication onAdd={addApplication} />} />
          <Route path="/view" element={<ViewApplications applications={applications} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
