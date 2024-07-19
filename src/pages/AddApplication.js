// src/pages/AddApplication.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';
import { v4 as uuidv4 } from 'uuid';

const AddApplication = ({ onAdd }) => {
  const handleAddApplication = (application) => {
    onAdd({ ...application, id: uuidv4(), status: 'pending' });
  };

  return (
    <div>
      <Header />
      <ApplicationForm onAdd={handleAddApplication} />
      <Footer />
    </div>
  );
};

export default AddApplication;
