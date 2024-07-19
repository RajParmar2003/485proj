import React, { useState } from 'react';

const ApplicationStatus = ({ application, onStatusChange }) => {
  const [status, setStatus] = useState(application.status || 'pending');

  const handleChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
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
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="declined">Declined</option>
        <option value="no_word_back">No Word Back</option>
      </select>
    </div>
  );
};

export default ApplicationStatus;