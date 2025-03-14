import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Footer.css"; // Ensure correct path to CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content">
        <h1 className="text-animation">CLUB MATERIAL STUDIO</h1>
        <p className="text-animation">
          For Interior, We Are Very Proud To Present CLUB SURFACES (Laminates,
          Veneer, Louvers)* - A Surface That Meets the Highest and Most Recent
          Standards of World-Class Quality, Providing Unique Benefits to End
          Users.
        </p>
        <div className="flex-container">
          <div>
            <h2>Explore</h2>
            <ul>
              <li>
                <Link to="/AboutUsPage" className="nav-link active text-animation">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ContactUsPage" className="nav-link active text-animation">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/ServicesPage" className="nav-link active text-animation">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="nav-link active text-animation">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Address</h2>
            <p className="text-animation">
              Nana mauva road, opp. Marvadi Share Market, L Shivganga Society,
              Opp. Vatsalya Hospital, Nr. Kingsland Society, Rajkot, Gujarat 360005
            </p>
            <p className="text-animation">
              <strong>Email:</strong> info@clubmaterialstudio.com
            </p>
            <p className="text-animation">
              <strong>Phone:</strong> +91 9876543210
            </p>
          </div>
          <div>
            <h2>Business Hours</h2>
            <p className="text-animation">
              <strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM
            </p>
            <p className="text-animation">
              <strong>Sat:</strong> 10:00 AM - 4:00 PM
            </p>
            <p className="text-animation">
              <strong>Sun:</strong> Closed
            </p>
          </div>
          <div>
            <h2>Subscribe to our Newsletter</h2>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="social-icons">
          <Link to="https://www.instagram.com/vraj_1108/" className="nav-link">
            <FaInstagram />
          </Link>
          <Link to="https://www.instagram.com/vraj_1108/" className="nav-link">
            <CiFacebook />
          </Link>
          <Link to="https://github.com/vrajkanani?tab=repositories" className="nav-link">
            <FaGithub />
          </Link>
        </div>
        <p className="text-animation" style={{ textAlign: "center", marginTop: "20px" }}>
          Copyright © 2023 Club Material Studio. All Rights Reserved. | Powered
          By: Vrajsoft
        </p>
      </div>
    </div>
  );
};

export default Footer;
