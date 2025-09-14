import React from 'react';
import './PageNotFound.css';


import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className="back-home-btn">Back to Home</Link>
  </div>
);

export default PageNotFound;
