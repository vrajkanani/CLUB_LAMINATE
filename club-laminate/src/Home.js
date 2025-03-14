import React from "react";
import "./Home.css";
import ClubLouvers1 from "./product/ClubLouvers1";
import ClubLouvers2 from "./product/ClubLouvers2";
import CoziLouvers1 from "./product/CoziLouvers1";
import CoziLouvers2 from "./product/CoziLouvers2";
import Products from "./Product";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center text-success mb-2 p-5 ">
            <h2>Our Product</h2>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 p-3">
            <div className="gallery justify-content-start">
              <img src="./images/home/img1.jpg" alt="asdf"></img>
              <img src="./images/home/img2.jpg" alt="asdf"></img>
              <img src="./images/home/img3.jpg" alt="asdf"></img>
              <img src="./images/home/img4.jpg" alt="asdf"></img>
              <img src="./images/home/img5.jpg" alt="asdf"></img>
              <img src="./images/home/img8.jpg" alt="asdf"></img>
              <img src="./images/home/img9.jpg" alt="asdf"></img>
              <img src="./images/home/img10.jpg" alt="asdf"></img>
              <img src="./images/home/img11.jpg" alt="asdf"></img>
              <img src="./images/home/img12.jpg" alt="asdf"></img>
              <img src="./images/home/img13.jpg" alt="asdf"></img>
              <img src="./images/home/img15.jpg" alt="asdf"></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 p-5">
            <div className="row">
              <div className="col text-center text-success mb-2 p-5 ">
                <h2>from api</h2>
              </div>
            </div>
            <Products />
            <div className="row">
              <div className="col text-center text-success mb-2 p-5 ">
                <h2>Club Louvers 1</h2>
              </div>
            </div>
            <ClubLouvers1 />
            <div className="row">
              <div className="col text-center text-success mb-2 p-5 ">
                <h2>Club Louvers 2</h2>
              </div>
            </div>
            <ClubLouvers2 />
            <div className="row">
              <div className="col text-center text-success mb-2 p-5 ">
                <h2>Cozi Louvers 1</h2>
              </div>
            </div>
            <CoziLouvers1 />
            <div className="row">
              <div className="col text-center text-success mb-2 p-5 ">
                <h2>Cozi Louvers 2</h2>
              </div>
            </div>
            <CoziLouvers2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
