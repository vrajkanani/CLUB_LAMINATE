import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import './AddProduct.css';

function AddProduct() {
  const navigate = useNavigate();
  const apiUrl = "https://660415702393662c31d092c5.mockapi.io/Product";

  const [data, setData] = useState({
    ProductName: "",
    ProductImage: "",
    ProductDescription: "",
    ProductPrice: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = () => {
    const errors = {};
    if (!data.ProductName.trim()) {
      errors.ProductName = "Product Name is required";
    }
    if (!data.ProductImage.trim()) {
      errors.ProductImage = "Product Image URL is required";
    }
    if (!data.ProductDescription.trim()) {
      errors.ProductDescription = "Product Description is required";
    }
    if (!data.ProductPrice.trim()) {
      errors.ProductPrice = "Product Price is required";
    } else if (isNaN(data.ProductPrice)) {
      errors.ProductPrice = "Product Price must be a number";
    }

    if (Object.keys(errors).length === 0) {
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        navigate("/");
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="title">Add New Product</h2>
      <div className="form-group">
        <label htmlFor="ProductName">Product Name:</label>
        <input
          type="text"
          name="ProductName"
          value={data.ProductName}
          onChange={handleInputChange}
          className={errors.ProductName ? "error-input" : ""}
        />
        {errors.ProductName && (
          <span className="error-text">{errors.ProductName}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="ProductImage">Product Image URL:</label>
        <input
          type="text"
          name="ProductImage"
          value={data.ProductImage}
          onChange={handleInputChange}
          className={errors.ProductImage ? "error-input" : ""}
        />
        {errors.ProductImage && (
          <span className="error-text">{errors.ProductImage}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="ProductDescription">Product Description:</label>
        <textarea
          name="ProductDescription"
          value={data.ProductDescription}
          onChange={handleInputChange}
          className={errors.ProductDescription ? "error-input" : ""}
        />
        {errors.ProductDescription && (
          <span className="error-text">{errors.ProductDescription}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="ProductPrice">Product Price:</label>
        <input
          type="text"
          name="ProductPrice"
          value={data.ProductPrice}
          onChange={handleInputChange}
          className={errors.ProductPrice ? "error-input" : ""}
        />
        {errors.ProductPrice && (
          <span className="error-text">{errors.ProductPrice}</span>
        )}
      </div>

      <div className="form-actions">
        <button className="submit-btn" onClick={handleSubmit}>
          Add Product
        </button>

        <Link to="/" className="back-btn">
          <MdKeyboardBackspace size={24} />
        </Link>
      </div>
    </div>
  );
}

export default AddProduct;
