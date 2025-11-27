import React from "react";
import "./ServiceReview.css";

export default function ServiceReview() {
    return (
        <main className="container py-5 mt-5">
        <div className="card shadow-lg p-4">
            <h3 className="fw-bold mb-4">Submit a Review</h3>
            <form>
            <div className="mb-4">
                    <label className="form-label fw-medium">Your Rating</label>
                    <div className="star-rating d-flex justify-content-start mt-2">
                        <i className="fa-regular fa-star first-star"></i>
                        <i className="fa-regular fa-star gray-star"></i>
                        <i className="fa-regular fa-star gray-star"></i>
                        <i className="fa-regular fa-star gray-star"></i>
                        <i className="fa-regular fa-star gray-star"></i>
                    </div>
            </div>

            <div className="mb-4">
                <label className="form-label fw-medium">Your Review</label>
                <textarea
                className="form-control"
                rows="5"
                placeholder="Share your experience..."
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn main-btn rounded-pill fw-bold px-5 py-2 shadow"
            >
                Submit Review
            </button>
            </form>
        </div>
        </main>
    );
}
