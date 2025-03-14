import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap
import './LoginPage.css'; // Custom CSS for additional styling

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
      const response = await fetch('http://localhost:3030/forgot', {
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
    <div className="login-page-container d-flex align-items-center justify-content-center">
      <div className="container login-container card shadow-lg">
        <div className="row">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-primary text-white">
            <h1 className="display-4">Welcome Back!</h1>
          </div>
          <div className="col-md-6 p-4 form-container">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
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
