import React from 'react';
import './BookForm.css';
import { Link } from 'react-router-dom';

export default function BookForm() {
    return (
        <main className="container pb-5 bookform-main">
            <div className="card shadow-lg p-5 mx-auto bookform-card">
                <div className="text-center mb-4">
                    <h1 className="fw-bold display-6 mb-2">Book a Service</h1>
                    <p className="text-muted">
                        Let's get the details to connect you with the right professional.
                    </p>
                </div>

                <div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="form-label fw-medium">Coming Date</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-medium">Starting Price</label>
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

                    <div className="mt-4">
                        <label className="form-label fw-medium">Notes to Customer</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="e.g. 'The front door lock is sticking...' or 'I need a custom-built bookshelf.'"
                        ></textarea>
                    </div>

                    <div className="text-center mt-5">
                        <button
                            type="submit"
                            className="btn main-btn w-100 py-3 fw-bold rounded-3 shadow-lg"
                        >
                            <i className="fa-solid fa-check-circle me-2"></i>
                            Confirm Booking
                        </button>
                    </div>
                    <Link to="/services/details"> 
                        <button className="btn main-btn w-100 py-3 fw-bold rounded-3 shadow-lg mt-3"> Back to the Service</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
