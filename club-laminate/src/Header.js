// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { MdAccountCircle } from "react-icons/md";
// import "./Header.css";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const adminId = localStorage.getItem("adminId");
//   const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

//   const handleToggle = () => {
//     setIsNavbarCollapsed(!isNavbarCollapsed);
//   };

//   const handleNavLinkClick = () => {
//     setIsNavbarCollapsed(true);
//   };

//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Logout!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem("adminId");
//         Swal.fire({
//           title: "Logged Out!",
//           text: "You have been logged out.",
//           icon: "success",
//         }).then(() => {
//           navigate("/");
//         });
//       }
//     });
//   };

//   return (
//     <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
//       <div className="container">
//         <Link to="/" className="navbar-brand" onClick={handleNavLinkClick}>
//           <img src="./images/Club.png" height={55} alt="Club Logo" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded={!isNavbarCollapsed}
//           aria-label="Toggle navigation"
//           onClick={handleToggle}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
//               <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
//                 Home
//               </Link>
//             </li>
//             <li className={`nav-item ${location.pathname === "/BookNow" ? "active" : ""}`}>
//               <Link to="/BookNow" className="nav-link" onClick={handleNavLinkClick}>
//                 Book Now
//               </Link>
//             </li>
//             {adminId && (
//               <>
//                 <li className={`nav-item ${location.pathname === "/addproduct" ? "active" : ""}`}>
//                   <Link to="/addproduct" className="nav-link" onClick={handleNavLinkClick}>
//                     Add Product
//                   </Link>
//                 </li>
//                 <li className={`nav-item ${location.pathname === "/PandingOrders" ? "active" : ""}`}>
//                   <Link to="/PandingOrders" className="nav-link" onClick={handleNavLinkClick}>
//                     Orders
//                   </Link>
//                 </li>
//                 <li className={`nav-item ${location.pathname === "/ConformOrders" ? "active" : ""}`}>
//                   <Link to="/ConformOrders" className="nav-link" onClick={handleNavLinkClick}>
//                     History
//                   </Link>
//                 </li>
//                 <li className={`nav-item ${location.pathname === "/feedback" ? "active" : ""}`}>
//                   <Link to="/feedback" className="nav-link" onClick={handleNavLinkClick}>
//                     Feedback
//                   </Link>
//                 </li>
//               </>
//             )}
//             <li className={`nav-item ${location.pathname === "/AboutUsPage" ? "active" : ""}`}>
//               <Link to="/AboutUsPage" className="nav-link" onClick={handleNavLinkClick}>
//                 About Us
//               </Link>
//             </li>
//             <li className={`nav-item ${location.pathname === "/ContactUsPage" ? "active" : ""}`}>
//               <Link to="/ContactUsPage" className="nav-link" onClick={handleNavLinkClick}>
//                 Contact Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               {adminId ? (
//                 <div className="nav-link" onClick={() => { handleLogout(); handleNavLinkClick(); }}>
//                   <MdAccountCircle size={30} />
//                 </div>
//               ) : (
//                 <Link to="/Login" className="nav-link" onClick={handleNavLinkClick}>
//                   <MdAccountCircle size={30} />
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdAccountCircle } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const adminId = localStorage.getItem("adminId");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsNavbarCollapsed(true);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("adminId");
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out.",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container custom-navbar-container">
        <Link to="/" className="navbar-brand" onClick={handleNavLinkClick}>
          <img src="./images/Club.png" height={55} alt="Club Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/BookNow" ? "active" : ""}`}>
              <Link to="/BookNow" className="nav-link" onClick={handleNavLinkClick}>
                Book Now
              </Link>
            </li>
            {adminId && (
              <>
                <li className={`nav-item ${location.pathname === "/addproduct" ? "active" : ""}`}>
                  <Link to="/addproduct" className="nav-link" onClick={handleNavLinkClick}>
                    Add Product
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/PandingOrders" ? "active" : ""}`}>
                  <Link to="/PandingOrders" className="nav-link" onClick={handleNavLinkClick}>
                    Orders
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/ConformOrders" ? "active" : ""}`}>
                  <Link to="/ConformOrders" className="nav-link" onClick={handleNavLinkClick}>
                    History
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/feedback" ? "active" : ""}`}>
                  <Link to="/feedback" className="nav-link" onClick={handleNavLinkClick}>
                    Feedback
                  </Link>
                </li>
              </>
            )}
            <li className={`nav-item ${location.pathname === "/AboutUsPage" ? "active" : ""}`}>
              <Link to="/AboutUsPage" className="nav-link" onClick={handleNavLinkClick}>
                About Us
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/ContactUsPage" ? "active" : ""}`}>
              <Link to="/ContactUsPage" className="nav-link" onClick={handleNavLinkClick}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              {adminId ? (
                <div className="nav-link" onClick={() => { handleLogout(); handleNavLinkClick(); }}>
                  <MdAccountCircle size={30} />
                </div>
              ) : (
                <Link to="/Login" className="nav-link" onClick={handleNavLinkClick}>
                  <MdAccountCircle size={30} />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
