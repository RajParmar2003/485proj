import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationList from '../components/ApplicationList';

const ViewApplications = ({ applications }) => {
  const [appList, setAppList] = useState(applications);

  const handleStatusChange = (id, newStatus) => {
    setAppList((prevList) =>
      prevList.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div>
      <Header />
      <ApplicationList applications={appList} onStatusChange={handleStatusChange} />
      <Footer />
    </div>
  );
};

export default ViewApplications;