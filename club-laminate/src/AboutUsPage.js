import React from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
          We are dedicated to providing high-quality products and excellent
          customer service to our valued customers.
        </p>
      </section>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make online shopping a seamless and enjoyable
          experience for everyone.
        </p>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Quality:</strong> We source only the finest products from
            trusted suppliers to ensure that our customers receive top-notch
            items.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> We prioritize customer
            satisfaction above all else and strive to exceed expectations with
            every interaction.
          </li>
          <li>
            <strong>Reliability:</strong> You can count on us to deliver your
            orders promptly and securely, every time.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek new ways to
            enhance the online shopping experience and stay ahead of industry
            trends.
          </li>
        </ul>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="./images/teammembers/ceo.jpg" alt="Vraj Kanani" />
            <h3>Vraj Kanani</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="./images/teammembers/MarketingDirector.jpg" alt="Sanket Bhimani" />
            <h3>Sanket Bhimani</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, concerns, or feedback, please don't hesitate to reach out to our friendly support team.</p>
        <p>Email: info@clubmaterialstudio.com</p>
        <p>Phone: +91 9876543210</p>
      </section>
      <div className="responsive-map">
        <iframe
          title="About Us map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0750146728374!2d70.78013767506856!3d22.275148079704657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb7371f2c83f%3A0x11143260839b2176!2z8J2XlvCdl7nwnZiC8J2XryDwnZeg8J2XrvCdmIHwnZey8J2Xv_Cdl7bwnZeu8J2XuSDwnZem8J2YgfCdmILwnZex8J2XtvCdl7wgLUJlc3QgdmVuZWVyIHNob3dyb29tL0Jlc3QgaW50ZXJpb3IgcHJvZHVjdCBnYWxsYXJ5L0xhbWluYXRlIHNob3dyb29tLyBMYW1pbmF0ZSBkaXNwbGF5IC9Mb3V2ZXJz!5e0!3m2!1sen!2sin!4v1708860167142!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUsPage;
