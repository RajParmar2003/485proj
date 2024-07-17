import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationList from '../components/ApplicationList';

const ViewApplications = ({ applications }) => {
  return (
    <div>
      <Header />
      <ApplicationList applications={applications} />
      <Footer />
    </div>
  );
};

export default ViewApplications;
