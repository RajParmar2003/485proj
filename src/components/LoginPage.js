// src/components/LoginPage.js
import React from "react";
import LoginButton from "./LoginButton";
import "../css/LoginPage.css"; // Adjusted path to point to the css directory

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Internship Application Tracker</h2>
        <p>Please log in to continue</p>
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
