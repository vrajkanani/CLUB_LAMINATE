import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap
import './LoginPage.css'; // Custom CSS for additional styling
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      showError("Please provide both username and password.");
      return;
    }

    try {
      const response = await fetch('https://club-laminate-server.onrender.com/forgot', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, password })
      });

      if (!response.ok) {
        throw new Error("Failed to log in. Please try again later.");
      }

      const res = await response.json();

      if (!res || !res.adminId) {
        throw new Error("Invalid username or password. Please try again.");
      }

      localStorage.setItem('adminId', JSON.stringify(res.adminId));
      showSuccess("You have successfully logged in.");
      navigate('/');
    } catch (error) {
      showError(error.message);
    }
  };

  const showError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  const showSuccess = (message) => {
    Swal.fire({
      title: "Login Successful!",
      text: message,
      icon: "success"
    });
  };

  return (
    <div className="login-page-container">
      <div className="container login-container card shadow-lg">
        <div className="row">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-primary text-white">
            <div className="text-center">
              <h1 className="display-4">Welcome Back!</h1>
              <p className="mt-3">Log in to manage your products and orders at Club Laminate</p>
            </div>
          </div>
          <div className="col-md-6 form-container">
            <h2 className="text-center">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-4 position-relative">
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-end-0">
                    <FaUser className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group mb-4 position-relative">
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-end-0">
                    <FaLock className="text-muted" />
                  </span>
                  <input
                    type="password"
                    className="form-control border-start-0"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
