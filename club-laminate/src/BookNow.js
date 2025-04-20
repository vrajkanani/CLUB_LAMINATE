import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./BookNow.css";

const BookNow = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    mobileNo: "",
    pincode: "",
    ProductName: "",
    quantity: 0,
    city: "",
    state: "",
    orderDate: "",
    address: "",
  });

  const [products, setProducts] = useState([]);
  const apiUrl = "https://club-laminate-server.onrender.com/BookNow";
  const productsApiUrl = "https://660415702393662c31d092c5.mockapi.io/Product";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(productsApiUrl);
        if (response.ok) {
          const productsData = await response.json();
          setProducts(productsData);
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error occurred while fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidMobile = (mobile) => /^\d{10}$/.test(mobile);

    if (
      data.fullName === "" ||
      data.mobileNo === "" ||
      !isValidMobile(data.mobileNo) ||
      data.pincode === "" ||
      data.city === "" ||
      data.state === "" ||
      data.ProductName === "" ||
      data.quantity <= 0 ||
      data.orderDate === "" ||
      data.address === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all fields.",
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
              text: "Your data has been submitted.",
              icon: "success",
            }).then((result) => {
              if (result.isConfirmed) {
                setData({
                  fullName: "",
                  mobileNo: "",
                  pincode: "",
                  ProductName: "",
                  quantity: 0,
                  city: "",
                  state: "",
                  orderDate: "",
                  address: "",
                });
                navigate("/");
              }
            });
          } else {
            console.error(
              "Error occurred while adding data:",
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error occurred while adding data:", error.message);
        }
      }
    });
  };

  return (
    <div className="bn-container">
      <div className="bn-form-wrapper">
        <h2 className="bn-title">Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="bn-form-row">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bn-form-row">
            <label htmlFor="mobileNo">Mobile Number:</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={data.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bn-form-row">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={data.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bn-form-row">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={data.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bn-form-row">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={data.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bn-form-row">
            <label htmlFor="ProductName">Product Name:</label>
            <select
              id="ProductName"
              name="ProductName"
              value={data.ProductName}
              onChange={handleChange}
              required
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.ProductName}>
                  {product.ProductName}
                </option>
              ))}
            </select>
          </div>
          <div className="bn-form-row">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
              required
            />
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              *One laminate is length x width of 8ft x 4ft (2440mm x 1220mm)
            </p>
          </div>
          <div className="bn-form-row">
            <label htmlFor="orderDate">Order Date:</label>
            <input
              type="date"
              id="orderDate"
              name="orderDate"
              value={data.orderDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bn-form-row">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={data.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="bn-form-row bn-submit">
            <button type="submit" className="bn-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
