import React, { useEffect, useState } from "react";
import "./Conform.css";

const Conform = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetch("https://club-laminate-server.onrender.com/conformList")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const renderOrderDetails = () => {
    return (
      <div className="container-fluid">
        <table className="comparison-table">
          <tbody>
            <tr>
              <td>fullName</td>
              <td>{selectedOrder.fullName}</td>
            </tr>
            <tr>
              <td>MobileNo</td>
              <td>{selectedOrder.mobileNo}</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{selectedOrder.quantity}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{selectedOrder.city}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{selectedOrder.state}</td>
            </tr>
            <tr>
              <td>Pincode</td>
              <td>{selectedOrder.pincode}</td>
            </tr>
            <tr>
              <td>orderDate</td>
              <td>{selectedOrder.orderDate}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{selectedOrder.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  // JSX
  const formattedOrders = orders.map((ord, index) => (
    <tr
      key={ord._id}
      onClick={() => handleOrderClick(ord)}
      className={index % 2 === 0 ? "even-row" : "odd-row"}
      style={{ cursor: "pointer" }}
    >
      <td align="center">{ord.fullName}</td>
      <td align="center">{formatDate(ord.orderDate)}</td>
    </tr>
  ));

  return (
    <div className="container">
      <div className="row justify-content-center tablebg">
        <div className="col-md-8">
          <div className="table-responsive">
            <table
              className="table table-hover table-bordered mt-4 mb-4"
              style={{ border: "1px solid gray", boxShadow: "2px 2px 2px 1px" }}
            >
              <thead className="thead-dark">
                <tr align="center">
                  <th
                    colSpan={2}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    HISTORY
                  </th>
                </tr>
                <tr align="center">
                  <th style={{ backgroundColor: "gray", color: "white" }}>
                    Name
                  </th>
                  <th style={{ backgroundColor: "gray", color: "white" }}>
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">{formattedOrders}</tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for displaying order details */}
      {selectedOrder && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Order Details</h4>
                {renderOrderDetails()}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{
                    paddingBottom: "1px",
                    border: "2px solid green",
                    fontSize: 15,
                    borderRadius: "5px",
                  }}
                  className="closeButton"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conform;
