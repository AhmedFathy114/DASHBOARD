import React, { useState } from "react";
import "./ServiceOffers.css";

export default function ServiceOffers() {
    const [viewNote, setViewNote] = useState(null);

    const offers = [
        { id: 1,
        workerName: "Noran Ayman", 
        comingDate: "2025-11-25", 
        startingPrice: 290, 
        notes: "Quick Fix"
        } ,

        { id: 2,
        workerName: "Mariam Shehata",
        comingDate: "2025-11-26",
        startingPrice: 300, 
        notes: "Fast Service" 
    },
        { id: 3, 
        workerName: "Asmaa Abdelwahab", 
        comingDate: "2025-11-27", 
        startingPrice: 280, 
        notes: "Good Work" 
    },
        { id: 4, 
        workerName: "Mahmoud Salah", 
        comingDate: "2025-11-28", 
        startingPrice: 320, 
        notes: "On Time" 
    },
        { id: 5, 
        workerName: "Mostafa Abdelsatar", 
        comingDate: "2025-11-29", 
        startingPrice: 270, 
        notes: "Reliable Staff" 
    },
        { id: 6, 
        workerName: "Ahmed Fathy", 
        comingDate: "2025-11-30", 
        startingPrice: 350, 
        notes: "Quality Job" 
    },
    ];

    return (
        <main className="container py-5 mt-4">
        <div className="card shadow-lg p-4 offers-big-card">
            <h3 className="fw-bold mb-4">
            Worker Offers
            </h3>

            <div className="offers-table-header d-flex justify-content-between px-3 py-2">
            <div className="col-2 fw-bold">Worker Name</div>
            <div className="col-2 fw-bold">Coming Date</div>
            <div className="col-2 fw-bold">Starting Price</div>
            <div className="col-3 fw-bold">Notes</div>
            <div className="col-2 fw-bold text-center">Accept</div>
            </div>

            {offers.map((o) => (
            <div key={o.id} className="offer-row card p-3 mb-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-2 worker-name">{o.workerName}</div>
                <div className="col-2">{o.comingDate}</div>
                <div className="col-2">{o.startingPrice} EGP</div>

                <div className="col-3">
                    <span
                    className="notes-btn"
                    onClick={() => setViewNote(o.notes)}
                    >
                    View Notes
                    </span>
                </div>

                <div className="col-2 text-center">
                    <button className="btn accept-btn px-4 py-1">Accept</button>
                </div>
                </div>
            </div>
            ))}

            {viewNote && (
            <div className="view-notes-backdrop" onClick={() => setViewNote(null)}>
                <div className="view-notes-box" onClick={(e) => e.stopPropagation()}>
                <h5>Notes</h5>
                <p>{viewNote}</p>
                <button
                    className="btn close-btn mt-2"
                    onClick={() => setViewNote(null)}
                >
                    Close
                </button>
                </div>
            </div>
            )}
        </div>
        </main>
    );
    }