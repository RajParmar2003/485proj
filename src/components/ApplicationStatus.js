// src/components/ApplicationStatus.js
import React, { useState, useEffect } from 'react';

const ApplicationStatus = ({ application, onStatusChange }) => {
  const [status, setStatus] = useState(() => {
    const savedStatus = localStorage.getItem(`status-${application.id}`);
    return savedStatus ? savedStatus : application.status || 'pending';
  });

  useEffect(() => {
    setStatus(application.status || 'pending');
  }, [application.status]);

  const handleChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    localStorage.setItem(`status-${application.id}`, newStatus);
    onStatusChange(application.id, newStatus);
  };

  return (
    <div>
      <label htmlFor={`status-${application.id}`}>Status: </label>
      <select
        id={`status-${application.id}`}
        value={status}
        onChange={handleChange}
      >
        <option value="no_word_back">No Word Back</option>
        <option value="pending">Pending</option>
        <option value="declined">Declined</option>
        <option value="accepted">Accepted</option>
      </select>
    </div>
  );
};

export default ApplicationStatus;
