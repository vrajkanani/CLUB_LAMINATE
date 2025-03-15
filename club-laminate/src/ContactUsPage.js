import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const apiUrl = "https://club-laminate-server.onrender.com/send-message";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      !isValidEmail(data.email) ||
      data.message.trim() === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all fields correctly.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            Swal.fire({
              title: "Submitted!",
              text: "Your message has been sent.",
              icon: "success",
            }).then(() => {
              setData({ name: "", email: "", message: "" });
              navigate("/");
            });
          } else {
            console.error(
              "Error occurred while submitting the message:",
              response.statusText
            );
          }
        } catch (error) {
          console.error(
            "Error occurred while submitting the message:",
            error.message
          );
        }
      }
    });
  };

  return (
    <div className="BNcontainer">
      <div className="BNform-wrapper">
        <h2 className="BNtitle">Contact Us</h2>

        {/* Contact Details */}
        <div className="BNcontact-details">
          <p>
            <strong>Address:</strong> Nana mauva road, opp. Marvadi Share
            Market, L Shivganga Society, Opp. Vatsalya Hospital, Nr. Kingsland
            Society, Rajkot, Gujarat 360005
          </p>
          <p>
            <strong>Email:</strong> info@clubmaterialstudio.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM Sat:
            10:00 AM - 4:00 PM Sun: Closed
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="BNform-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="BNform-row">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="BNform-row">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="BNform-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
