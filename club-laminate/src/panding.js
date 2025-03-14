import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Panding.css";

function Panding() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3030/orderList")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleCancel = async (orderId) => {
    try {
      await fetch(`http://localhost:3030/orderList/${orderId}`, {
        method: "DELETE",
      });
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleComplete = async (order) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:3030/orderList/${order._id}`,
        {
          method: "DELETE",
        }
      );

      if (!deleteResponse.ok) {
        throw new Error(
          `Failed to delete order: ${deleteResponse.status} ${deleteResponse.statusText}`
        );
      }

      const addResponse = await fetch("http://localhost:3030/addConform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!addResponse.ok) {
        throw new Error(
          `Failed to add order to conform list: ${addResponse.status} ${addResponse.statusText}`
        );
      }

      const responseData = await addResponse.json();
      console.log("Response from server:", responseData);

      setOrders((prevOrders) => prevOrders.filter((o) => o._id !== order._id));
      Swal.fire({
        title: "Order completed Successful!",
        text: "You have successfully Order complete.",
        icon: "success",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error completing order:", error);
    }
  };

  const formattedOrders = orders.map((order) => (
    <div className="col-lg-3 col-md-4 col-sm-6 p-3" key={order._id}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-3">Name: {order.fullName}</h4>
          <h6 className="card-subtitle">City: {order.city}</h6>
          <h6 className="card-group-item">Product Name: {order.ProductName}</h6>
          <h6 className="list-group-item">Quantity: {order.quantity}</h6>
          <br/>
          <button
          style={{
            paddingBottom: "1px",
            border: "2px solid green",
            borderRadius: "5px",
          }}
          className="completeButton"
            onClick={() => handleComplete(order)}
          >
            Complete
          </button>
          &nbsp;
          <button
            style={{
              paddingBottom: "1px",
              border: "2px solid red",
              borderRadius: "5px",
            }}
            className="cancelButton"
            onClick={() =>
              handleCancel(order._id).then(() => {
                navigate("/PandingOrders");
              })
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{formattedOrders}</div>
    </div>
  );
}

export default Panding;
