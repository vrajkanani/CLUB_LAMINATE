import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FeedBack = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState([]);
  const [replyEmail, setReplyEmail] = useState("");
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://club-laminate-server.onrender.com/messages")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, [message]);

  const handleCancel = async (msgId, event) => {
    try {
      await fetch(
        `https://club-laminate-server.onrender.com/messages/${msgId}`,
        {
          method: "DELETE",
        }
      );
      event.preventDefault();
      event.stopPropagation();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleReply = (email) => {
    setReplyEmail(email);
    setShowModal(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const recipientEmail = form.current["from_email"].value;
    emailjs
      .sendForm("service_c34k6c5", "template_blv462o", form.current, {
        to_email: recipientEmail,
        publicKey: "6SXlrsmeiD695P7x9",
      })
      .then(
        async () => {
          console.log("SUCCESS!");
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "Email sent!",
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
          form.current.reset();
          await window.location.reload();
          navigate("/Messages");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        {message.map((msg) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6"
            style={{ marginTop: "25px", marginBottom: "20px" }}
            key={msg._id}
          >
            <div className="main3">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="msgcard3">
                    <div className="card_content3">
                      <h4 className="card_title3" style={{ color: "black" }}>
                        Name: {msg.name}
                      </h4>
                      <div
                        className="card_text3"
                        style={{ color: "black", fontSize: "15px" }}
                      >
                        <p>Email: {msg.email}</p>
                        <p>Message: {msg.message}</p>
                      </div>
                      <div>
                        <button
                          className="completeButton"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ marginRight: "3px" }}
                          onClick={() => handleReply(msg.email)}
                        >
                          reply
                        </button>
                        <button
                          className="cancelButton"
                          onClick={(event) => handleCancel(msg._id, event)}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* for email send */}
      {/* Reply Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div
              className="modal-header d-flex justify-content-center"
              style={{ borderBottom: "none" }}
            >
              <h4
                className="modal-title fw-bold text-success"
                id="staticBackdropLabel"
              >
                ✉️ Reply to User
              </h4>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <form ref={form} id="replyForm">
                <div className="form-group mb-3">
                  <label htmlFor="from_name">Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value="club laminate"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="from_email">Email</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className="form-control"
                    placeholder="Enter recipient email"
                    defaultValue={replyEmail}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Write your reply..."
                    required
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer d-flex justify-content-end border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-success"
                form="replyForm"
                onClick={sendEmail}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

