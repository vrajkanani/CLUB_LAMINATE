import React from "react";
import "./Home.css";
import ClubLouvers1 from "./product/ClubLouvers1";
import Products from "./Product";

const HomePage = () => {
  return (
    <>
      <div className="container py-4">
        {/* Hero section */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="section-title">Our Products</h1>
            <p className="lead text-muted">Discover our premium collection of louvers</p>
          </div>
        </div>

        {/* Gallery section */}
        <div className="row mb-4">
          <div className="col-12 px-md-3 px-0">
            <div className="gallery-container">
              <div className="gallery">
                <img src="./images/home/img1.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img2.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img3.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img4.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img5.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img8.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img9.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img10.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img11.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img12.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img13.jpg" alt="Louver product" className="img-fluid"/>
                <img src="./images/home/img15.jpg" alt="Louver product" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
        
        {/* API Products section */}
        <div className="row mb-4">
          <div className="col-12 px-md-3 px-0">
            <div className="product-section">
              <div className="text-center mb-3">
                <h2 className="section-title">Featured Products</h2>
              </div>
              <div className="product-container">
                <Products />
              </div>
            </div>
          </div>
        </div>
        
        {/* Club Louvers 1 section */}
        <div className="row">
          <div className="col-12 px-md-3 px-0">
            <div className="product-section">
              <div className="text-center mb-3">
                <h2 className="section-title">Club Louvers Collection</h2>
              </div>
              <div className="product-container">
                <ClubLouvers1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
