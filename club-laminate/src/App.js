import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AboutUsPage from "./AboutUsPage";
import ContactUsPage from "./ContactUsPage";
import Services from "./Services.js";
import LoginPage from "./LoginPage.js";
import BookNow from "./BookNow";
import Panding from "./panding";
import Conform from "./Conform";
import FeedBack from "./feedback.js";
import AddProduct from "./AddProduct.js";
import EditProduct from "./EditProduct.js"
import Product from "./Product.js";
import ClubLouvers1 from "./product/ClubLouvers1";
import ClubLouvers2 from "./product/ClubLouvers2";
import CoziLouvers1 from "./product/CoziLouvers1";
import CoziLouvers2 from "./product/CoziLouvers2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/BookNow" element={<BookNow />}></Route>
          <Route path="/PandingOrders" element={<Panding />}></Route>
          <Route path="/ConformOrders" element={<Conform />}></Route>
          <Route path="/feedback" element={<FeedBack />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/AboutUsPage" element={<AboutUsPage />}></Route>
          <Route path="/ContactUsPage" element={<ContactUsPage />}></Route>
          <Route path="/ServicesPage" element={<Services />}></Route>
          <Route path="/1 club louvers" element={<ClubLouvers1 />}></Route>
          <Route path="/2 club louvers" element={<ClubLouvers2 />}></Route>
          <Route path="/1 Cozi louvers" element={<CoziLouvers1 />}></Route>
          <Route path="/2 Cozi louvers" element={<CoziLouvers2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
