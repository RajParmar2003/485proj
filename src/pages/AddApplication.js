import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';

const AddApplication = ({ onAdd }) => {
  return (
    <div>
      <Header />
      <ApplicationForm onAdd={onAdd} />
      <Footer />
    </div>
  );
};

export default AddApplication;
