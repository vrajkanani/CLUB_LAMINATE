import React from "react";
import Header from "./Header.js"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { PiArrowFatUpDuotone } from "react-icons/pi";
import "./Layout.css";


function Layout() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <br />
        <div className="row m-5">
          <Outlet />
        </div>
        <button className="floating-button" onClick={scrollToTop}>
          <PiArrowFatUpDuotone size={25} />
        </button>
        <br />
        <div className="row">
          <Footer />
        </div>
        <br />
      </div>
    </>
  );
}

export default Layout;

