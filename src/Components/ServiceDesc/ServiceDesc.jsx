import React,{useState} from "react";
import "./ServiceDesc.css";
import serviceImage from "../../assets/ServiceDetails/craftimg.png";
import { Link } from "react-router-dom";
import WDoneservice from "../../Pages/Services/WDoneServicePage/WDoneservice";

export default function ServiceDesc() {
    const [showDoneForm, setShowDoneForm] = useState(false);
    const handleDoneServiceClick = () => {
        setShowDoneForm(true);
    };
    
    const serviceState = "done"; 
    const category = "Plumbing"; 

    const getStateBgColor = (state) => {
        switch(state.toLowerCase()) {
            case "open":
                return "#28a745";
            case "in progress":
                return "#ffc107";
            case "done":
                return "#343a40";
            default:
                return "gray";
        }
    };
    return (
        <main className="container py-5 mt-5">
            <div className="card shadow-lg mb-5 border-0">
                <div className="position-relative">
                    <img
                        src={serviceImage}
                        className="card-img-top"
                        alt="Interior Design Service"
                    />
                    <div className="service-overlay position-absolute bottom-0 start-0 p-4 text-white">
                        <div className="d-flex gap-2 flex-wrap align-items-center mb-2">
                            <span className="badge home-badge text-uppercase fw-bold">
                                Home Improvement
                            </span>
                            <span 
                                className="badge text-uppercase fw-bold"
                                style={{
                                    backgroundColor: getStateBgColor(serviceState),
                                    color: "white"
                                }}
                            >
                                {serviceState}
                            </span>
                            <span 
                                className="badge text-uppercase fw-bold"
                                style={{
                                    backgroundColor: "#ff7300",
                                    color: "white"
                                }}
                            >
                                {category}
                            </span>
                        </div>
                        <h2 className="fw-bold">Interior Design Consultation</h2>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-md-8">
                            <h4 className="fw-bold">About this service</h4>
                            <p>
                                Professional interior design consultation to help you create the
                                perfect living space. We'll work together to transform your
                                vision into a beautiful and functional reality.
                            </p>

                            <h4 className="fw-bold mt-4">Description</h4>
                            <p>
                                Our process begins with an in-depth consultation to understand
                                your needs, preferences, and lifestyle. We then develop a
                                comprehensive design concept, including mood boards, color
                                palettes, and furniture layouts. Once the design is finalized, we
                                provide a detailed plan with product recommendations, a shopping
                                list, and placement guidelines.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h5 className="fw-bold mb-2">Budget</h5>
                            <div className="d-flex align-items-center text-secondary mb-3">
                                <span className="material-symbols-outlined mx-2">
                                    <i class="fa-solid fa-money-check-dollar"></i>
                                </span>
                                120 : 150 EGP
                            </div>

                            <h5 className="fw-bold mb-2">Location</h5>
                            <div className="d-flex align-items-center text-secondary mb-3">
                                <span className="material-symbols-outlined mx-2">
                                    {/* <i class="bi bi-geo-alt"></i> */}
                                    <i class="fa-solid fa-location-dot"></i>
                                </span>
                                    
                                    123 Oak Street, Anytown, USA
                            </div>

                            <h5 className="fw-bold fs-5 mt-4 mb-2">Implementation date</h5>
                            <div className="d-flex align-items-center text-secondary mb-4">
                                <span className="material-symbols-outlined mx-2">
                                    {/* <i class="bi bi-calendar-event"></i> */}
                                    <i class="fa-solid fa-calendar"></i>
                                </span>
                                22th December 2025
                            </div>
                            <Link to="/services/details/bookservice">
                            <button className="btn main-btn w-100 rounded-pill fw-bold shadow">
                                Book Now
                            </button>
                            </Link>
                            {/* <Link to="/services/details/doneservice" >
                            <button className="btn main-btn w-100 rounded-pill fw-bold shadow mt-3">
                                Done This Service
                            </button>
                            </Link> */}
                                <button className="btn main-btn w-100 rounded-pill fw-bold shadow mt-3" onClick={handleDoneServiceClick}>Done service</button>
                                    {showDoneForm && (
                                        <WDoneservice
                                        showDoneForm={showDoneForm}
                                        setShowDoneForm={setShowDoneForm}
                                        />
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
