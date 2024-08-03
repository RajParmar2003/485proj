// src/pages/AnalyticsPage.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AnalyticsPage.css';

const AnalyticsPage = ({ applications }) => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    // Calculate data for the current week
    const currentWeekData = calculateWeeklyData(applications);
    setWeeklyData(currentWeekData);

    // Calculate status data
    const statusData = calculateStatusData(applications);
    setStatusData(statusData);
  }, [applications]);

  const calculateWeeklyData = (applications) => {
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const daysOfWeek = Array.from({ length: 7 }, (_, i) => new Date(startOfWeek).setDate(startOfWeek.getDate() + i));

    const data = daysOfWeek.map(day => ({
      date: new Date(day).toLocaleDateString(),
      applications: applications.filter(app => new Date(app.date).toLocaleDateString() === new Date(day).toLocaleDateString()).length,
    }));
    
    return data;
  };

  const calculateStatusData = (applications) => {
    const statuses = ['no_word_back', 'pending', 'declined', 'accepted'];
    const data = statuses.map(status => ({
      name: status,
      value: applications.filter(app => {
        const savedStatus = localStorage.getItem(`status-${app.id}`);
        return (savedStatus || app.status) === status;
      }).length,
    }));
    return data;
  };

  return (
    <div className="analytics-page">
      <Header />
      <div className="charts-container">
        <h2>Application Analytics</h2>

        <div className="chart-wrapper">
          <h3>Applications Submitted This Week</h3>
          <LineChart width={600} height={300} data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="applications" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="chart-wrapper">
          <h3>Applications by Status</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={statusData}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getStatusColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'no_word_back':
      return '#ffbb28';
    case 'pending':
      return '#0088fe';
    case 'declined':
      return '#ff4d4d';
    case 'accepted':
      return '#00c49f';
    default:
      return '#8884d8';
  }
};

export default AnalyticsPage;
