import React from 'react';
import { useState } from "react";
import "./ClubLouvers1";

function Club_louvers2() {
  let arr = [
    {
      ProductID: 1,
      ProductName: "Product 1",
      ProductImage: "./images/2 club louvers/img1.jpg",
      ProductDescription: "Description of Product 1",
      ProductPrice: 19.99
    },
    {
      ProductID: 2,
      ProductName: "Product 2",
      ProductImage: "./images/2 club louvers/img2.jpg",
      ProductDescription: "Description of Product 2",
      ProductPrice: 24.99
    },
    {
      ProductID: 3,
      ProductName: "Product 3",
      ProductImage: "./images/2 club louvers/img3.jpg",
      ProductDescription: "Description of Product 3",
      ProductPrice: 29.99
    },
    {
      ProductID: 4,
      ProductName: "Product 4",
      ProductImage: "./images/2 club louvers/img4.jpg",
      ProductDescription: "Description of Product 4",
      ProductPrice: 34.99
    },
    {
      ProductID: 5,
      ProductName: "Product 5",
      ProductImage: "./images/2 club louvers/img5.jpg",
      ProductDescription: "Description of Product 5",
      ProductPrice: 39.99
    },
    {
      ProductID: 6,
      ProductName: "Product 6",
      ProductImage: "./images/2 club louvers/img6.jpg",
      ProductDescription: "Description of Product 6",
      ProductPrice: 44.99
    },
    {
      ProductID: 7,
      ProductName: "Product 7",
      ProductImage: "./images/2 club louvers/img7.jpg",
      ProductDescription: "Description of Product 7",
      ProductPrice: 49.99
    },
    {
      ProductID: 8,
      ProductName: "Product 8",
      ProductImage: "./images/2 club louvers/img8.jpg",
      ProductDescription: "Description of Product 8",
      ProductPrice: 54.99
    },
    {
      ProductID: 9,
      ProductName: "Product 9",
      ProductImage: "./images/2 club louvers/img9.jpg",
      ProductDescription: "Description of Product 9",
      ProductPrice: 59.99
    },
    {
      ProductID: 10,
      ProductName: "Product 10",
      ProductImage: "./images/2 club louvers/img10.jpg",
      ProductDescription: "Description of Product 10",
      ProductPrice: 64.99
    },
    {
      ProductID: 11,
      ProductName: "Product 11",
      ProductImage: "./images/2 club louvers/img11.jpg",
      ProductDescription: "Description of Product 11",
      ProductPrice: 69.99
    },
    {
      ProductID: 12,
      ProductName: "Product 12",
      ProductImage: "./images/2 club louvers/img12.jpg",
      ProductDescription: "Description of Product 12",
      ProductPrice: 74.99
    },
    {
      ProductID: 13,
      ProductName: "Product 13",
      ProductImage: "./images/2 club louvers/img13.jpg",
      ProductDescription: "Description of Product 13",
      ProductPrice: 79.99
    },
    {
      ProductID: 14,
      ProductName: "Product 14",
      ProductImage: "./images/2 club louvers/img14.jpg",
      ProductDescription: "Description of Product 14",
      ProductPrice: 84.99
    },
    {
      ProductID: 15,
      ProductName: "Product 15",
      ProductImage: "./images/2 club louvers/img15.jpg",
      ProductDescription: "Description of Product 15",
      ProductPrice: 89.99
    },
    {
      ProductID: 16,
      ProductName: "Product 16",
      ProductImage: "./images/2 club louvers/img16.jpg",
      ProductDescription: "Description of Product 16",
      ProductPrice: 94.99
    },
    {
      ProductID: 17,
      ProductName: "Product 17",
      ProductImage: "./images/2 club louvers/img17.jpg",
      ProductDescription: "Description of Product 17",
      ProductPrice: 99.99
    },
    {
      ProductID: 18,
      ProductName: "Product 18",
      ProductImage: "./images/2 club louvers/img18.jpg",
      ProductDescription: "Description of Product 18",
      ProductPrice: 104.99
    },
    {
      ProductID: 19,
      ProductName: "Product 19",
      ProductImage: "./images/2 club louvers/img19.jpg",
      ProductDescription: "Description of Product 19",
      ProductPrice: 109.99
    },
    {
      ProductID: 20,
      ProductName: "Product 20",
      ProductImage: "./images/2 club louvers/img20.jpg",
      ProductDescription: "Description of Product 20",
      ProductPrice: 114.99
    },
    {
      ProductID: 21,
      ProductName: "Product 21",
      ProductImage: "./images/2 club louvers/img21.jpg",
      ProductDescription: "Description of Product 21",
      ProductPrice: 119.99
    },
    {
      ProductID: 22,
      ProductName: "Product 22",
      ProductImage: "./images/2 club louvers/img22.jpg",
      ProductDescription: "Description of Product 22",
      ProductPrice: 124.99
    },
    {
      ProductID: 23,
      ProductName: "Product 23",
      ProductImage: "./images/2 club louvers/img23.jpg",
      ProductDescription: "Description of Product 23",
      ProductPrice: 129.99
    },
    {
      ProductID: 24,
      ProductName: "Product 24",
      ProductImage: "./images/2 club louvers/img24.jpg",
      ProductDescription: "Description of Product 24",
      ProductPrice: 134.99
    }
  ];
  const [pro] = useState(arr);

  let view = pro.map((pro, index) => {
    return (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="product-card">
          <img
            src={pro.ProductImage}
            alt="Product"
            className="product-image"
          />
          <div className="product-details">
          <h2 className="product-name pt-2">{pro.ProductName}</h2>
            <p className="product-price p-1">₹{pro.ProductPrice}</p>
            <p className="Product-Discription p-1">{pro.ProductDescription}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row">{view}</div>;
}
export default Club_louvers2;