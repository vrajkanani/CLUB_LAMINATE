import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

function Products() {
  const [products, setProducts] = useState([]);
  const adminId = localStorage.getItem("adminId");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://660415702393662c31d092c5.mockapi.io/Product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://660415702393662c31d092c5.mockapi.io/Product/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProducts(); // Refresh the product list after deletion
      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  const handleEditProduct = (productId) => {
    navigate(`/editproduct/${productId}`);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up">
          <div className="product-card">
            <img src={product.ProductImage} alt="Product" className="product-image" />
            <div className="product-details">
              <h2 className="product-name pt-2">{product.ProductName}</h2>
              <p className="product-price p-1">₹{product.ProductPrice}</p>
              <p className="product-description p-1">{product.ProductDescription}</p>
              {adminId && (
  <div className="admin-actions">
    <button
      style={{
        paddingBottom: "1px",
        border: "2px solid green",
        fontSize: 15,
        borderRadius: "5px",
        marginRight: "5px",
      }}
      className="p-1 editButton"
      onClick={() => handleEditProduct(product.id)}
    >
      Edit
    </button>

    <button
      style={{
        paddingBottom: "1px",
        border: "2px solid red",
        fontSize: 15,
        borderRadius: "5px",
      }}
      className="p-1 deleteButton"
      onClick={() => handleDeleteProduct(product.id)}
    >
      Delete
    </button>
  </div>
)}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
