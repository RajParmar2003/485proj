import React, { useState } from 'react';
import '../css/ApplicationForm.css';

const ApplicationForm = ({ onAdd }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ company, position, deadline });
    setCompany('');
    setPosition('');
    setDeadline('');
  };

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <label>Company:</label>
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />

      <label>Position:</label>
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />

      <label>Deadline:</label>
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />

      <button type="submit">Add Application</button>
    </form>
  );
};

export default ApplicationForm;
