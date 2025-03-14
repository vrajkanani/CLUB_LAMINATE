import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className='hero-section'>
                <h1>Our Services</h1>
                <p>We offer premium laminate solutions on high-quality plywood, designed to elevate the aesthetics and durability of your spaces.</p>
                </div>
                <div className="service-cards">
                    <div className="service-card">
                        <h2>Customized Laminate Design</h2>
                        <p>We provide tailored laminate options to suit your unique design preferences, with a wide variety of colors, textures, and finishes.</p>
                    </div>
                    <div className="service-card">
                        <h2>Plywood Sourcing & Installation</h2>
                        <p>Our team sources the finest plywood materials and offers professional installation services to ensure lasting durability and performance.</p>
                    </div>
                    <div className="service-card">
                        <h2>Commercial & Residential Projects</h2>
                        <p>Whether it's for home or business, our laminate and plywood solutions are crafted to meet diverse project requirements and standards.</p>
                    </div>
                    <div className="service-card">
                        <h2>Consultation & Design Assistance</h2>
                        <p>Our design experts provide consultation to help you select the best materials and designs that align with your space and vision.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
