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
      await fetch(`https://club-laminate-server.onrender.com/messages/${msgId}`, {
        method: "DELETE",
      });
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
      .sendForm("service_m4toew5", "template_f6o7urs", form.current, {
        to_email: recipientEmail,
        publicKey: "6SXlrsmeiD695P7x9",
      })
      .then(
        async () => {
          console.log("SUCCESS!");
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
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
            // style={{backgroundColor:"lightyellow"}}
            style={{
              marginTop: "25px",
              marginBottom: "32px",
            }}
            key={msg._id}
          >
            <div className="main3">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="msgcard3">
                    <div
                      className="card_content3"
                      //   style={{ fontFamily: "Comic Sans MS" }}
                    >
                      <h2 className="card_title3">Name : {msg.name}</h2>
                      <div
                        className="card_text3"
                        style={{ fontSize: "15px", paddingBottom: "3px" }}
                      >
                        <br />
                        <p>Email : {msg.email}</p>
                        <p>Message : {msg.message}</p>
                      </div>
                      <br />
                      <div>
                        <button
                          style={{
                            paddingBottom: "1px",
                            marginRight: "10px",
                            border: "2px solid green",
                            borderRadius: "5px",
                          }}
                          type="button"
                          className="completeButton"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => handleReply(msg.email)}
                        >
                          reply
                        </button>

                        <button
                          style={{
                            paddingBottom: "1px",
                            border: "2px solid red",
                            borderRadius: "5px",
                          }}
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Reply to User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form ref={form}>
                <label>Name</label>
                <input
                  type="text"
                  name="from_name"
                  style={{ border: "1px solid black" }}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="from_email"
                  style={{ border: "1px solid black" }}
                  defaultValue={replyEmail}
                />
                <label>Message</label>
                <br />
                <textarea name="message" cols={62} rows={10} />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={sendEmail}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
