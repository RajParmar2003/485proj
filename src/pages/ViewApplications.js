// src/pages/ViewApplications.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationList from '../components/ApplicationList';

const ViewApplications = ({ applications }) => {
  const [appList, setAppList] = useState(applications.map(app => ({ ...app, status: app.status || 'pending' })));
  const [filteredAppList, setFilteredAppList] = useState(appList);
  const [filter, setFilter] = useState('');

  const handleStatusChange = (id, newStatus) => {
    const updatedList = appList.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setAppList(updatedList);
  };

  const handleFilterChange = (event) => {
    const status = event.target.value;
    setFilter(status);
  };

  useEffect(() => {
    filterApplications(filter);
  }, [filter, appList]);

  const filterApplications = (status) => {
    if (status) {
      const filteredList = appList.filter((app) => app.status === status);
      setFilteredAppList(filteredList);
    } else {
      setFilteredAppList(appList);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <label htmlFor="filter">Filter by status: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="no_word_back">No Word Back</option>
          <option value="pending">Pending</option>
          <option value="declined">Declined</option>
          <option value="accepted">Accepted</option>
        </select>
      </div>
      <ApplicationList applications={filteredAppList} onStatusChange={handleStatusChange} />
      <Footer />
    </div>
  );
};

export default ViewApplications;
