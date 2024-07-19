import React from 'react';
import './ApplicationList.css';
import ApplicationStatus from './ApplicationStatus';


const ApplicationList = ({ applications, onStatusChange }) => {
  return (
    <div className="application-list">
      {applications.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        <ul>
          {applications.map((app, index) => (
            <li key={index}>
              <strong>Company:</strong> {app.company} | <strong>Position:</strong> {app.position} | <strong>Deadline:</strong> {app.deadline}
              <ApplicationStatus application={app} onStatusChange={onStatusChange} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationList;
