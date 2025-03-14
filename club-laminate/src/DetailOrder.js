import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailOrder() {
    const { id } = useParams();
    const [ord, setOrd] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3030/orderList/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch order details: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setOrd(data);
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };

        fetchOrderDetails();
    }, [id]);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    return (
        <div className="row">
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50 bookbg">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-heading">
                            <h2 className="title">Order Details</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row m-b-55">
                                    <div className="name">Full Name</div>
                                    <div className="value">
                                        <div className="input-group-desc">
                                            <input
                                                className="input--style-5"
                                                type="text"
                                                name="fullName"
                                                value={ord.fullName || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Mobile No</div>
                                    <div className="value">
                                        <div className="input-group-desc">
                                            <input
                                                className="input--style-5"
                                                type="text"
                                                name="mobileNo"
                                                value={ord.mobileNo || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Location</div>
                                    <div className="value">
                                        <div className="row row-space">
                                            <div className="col-2">
                                                <div className="input-group-desc">
                                                    <input
                                                        className="input--style-5"
                                                        type="text"
                                                        name="city"
                                                        value={ord.city || ""}
                                                        readOnly
                                                    />
                                                    <label className="label--desc">City</label>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="input-group-desc">
                                                    <input
                                                        className="input--style-5"
                                                        type="text"
                                                        name="state"
                                                        value={ord.state || ""}
                                                        readOnly
                                                    />
                                                    <label className="label--desc">State</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Pincode</div>
                                    <div className="value">
                                        <div className="input-group-desc">
                                            <input
                                                className="input--style-5"
                                                type="text"
                                                name="pincode"
                                                value={ord.pincode || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Details</div>
                                    <div className="value">
                                        <div className="row row-space">
                                            <div className="col-2">
                                                <div className="input-group-desc">
                                                    <input
                                                        className="input--style-5"
                                                        type="text"
                                                        name="quantity"
                                                        value={ord.quantity || ""}
                                                        readOnly
                                                    />
                                                    <label className="label--desc">Quantity</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Order Date</div>
                                    <div className="value">
                                        <div className="input-group-desc">
                                            <input
                                                className="input--style-5"
                                                type="text"
                                                name="orderDate"
                                                value={formatDate(ord.orderDate)}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Address</div>
                                    <div className="value">
                                        <div className="input-group-desc">
                                            <textarea
                                                className="input--style-5"
                                                name="address"
                                                style={{ width: "100%", height: "150px" }}
                                                value={ord.address || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn--radius-2 btn-dark btn-lg mr-2" type="button" onClick={() => navigate('/PandingOrders')}>
                                    <i className="fas fa-arrow-left mr-2"></i>Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailOrder;
