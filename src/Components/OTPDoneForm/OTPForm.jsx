import React from "react";
import "./OTPForm.css";
import { Link } from "react-router-dom";

export default function BookForm({ onClose }) {
  return (
    <main
      className="bookform-main mt-0"
      onClick={(e) => e.stopPropagation()}
      style={{ pointerEvents: "none" }}
    >
      <div
        className="card shadow-lg p-2 py-md-3 px-md-5  mx-auto bookform-card"
        style={{ pointerEvents: "auto" }}
      >
        <i
          className="fa-regular fa-circle-xmark close-btn bg-white"
          onClick={onClose}
        ></i>
        <div className="text-center mb-2 mb-lg-3">
          <h1 className="fw-bold display-6 mb-1 text-start text-md-center">
            Done the service
          </h1>
          <p className="text-muted m-1">
            Confirmation form for termination of this service from the worker
          </p>
        </div>

        <div>
          <div className="row g-2 g-lg-3">
            <div className="col-md-6">
              <label className="form-label fw-medium">
                Client's OTP{" "}
                <sub className="text-warning">"The OTP Sent to client"</sub>
              </label>
              <div className="input-group">
                {/* <span className="input-group-text"></span> */}
                <input
                  type="number"
                  className="form-control num-input"
                  placeholder="The OTP code"
                  aria-label="Amount"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium">End Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6 mx-auto ">
              <label className="form-label fw-medium">Final Price</label>
              <div className="input-group">
                <span className="input-group-text">£</span>
                <input
                  type="number"
                  className="form-control num-input"
                  placeholder="0.00"
                  aria-label="Amount"
                />
                <span className="input-group-text">EGP</span>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <label className="form-label fw-medium">Notes to Customer</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="e.g. 'The front door lock is sticking...' or 'I need a custom-built bookshelf.'"
            ></textarea>
          </div>
          <div className="row">
            <div className="text-center mt-2 col-6 col-md-12 ">
              <button
                type="submit"
                className="btn btn-main w-100 py-3 fw-bold rounded-3 shadow-lg"
              >
                <i className="fa-solid fa-check-circle me-2"></i>I Done This
              </button>
            </div>
            <Link to="/services/details" className="col-6 col-md-12">
              <button
                className="btn btn-main w-100 py-3 fw-bold rounded-3 shadow-lg mt-2 mt-lg-3"
                onClick={onClose}
              >
                {" "}
                Back to the Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
