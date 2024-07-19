import React from 'react';
import '../css/ApplicationList.css'; 
import ApplicationStatus from './ApplicationStatus';

const ApplicationList = ({ applications, onStatusChange }) => {
  return (
    <div className="application-list">
      {applications.length === 0 ? (
        <p>No applications found for the selected status.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app.id}>
              <div className="application-details">
                <label>
                  <strong>Company:</strong> <span>{app.company}</span>
                </label>
                <label>
                  <strong>Position:</strong> <span>{app.position}</span>
                </label>
                <label>
                  <strong>Deadline:</strong> <span>{app.deadline}</span>
                </label>
              </div>
              <ApplicationStatus application={app} onStatusChange={onStatusChange} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationList;