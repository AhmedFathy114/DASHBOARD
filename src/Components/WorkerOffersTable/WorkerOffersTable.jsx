import React, { useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";

const workerOffersData = [
  {
    id: 1,
    service: "Plumbing Repair (Leak fix)",
    offer: 300,
    comingDate: "2025-12-01",
    price: 290,
    notes: "Requires specific sealant type, confirmed availability.",
    sendingDate: "2025-11-24",
    status: "Completed",
  },
  {
    id: 2,
    service: "Custom Carpentry (Bookshelf)",
    offer: 1500,
    comingDate: "2025-12-10",
    price: 1450,
    notes: "Price includes material cost (Pine wood). Draft sketch provided.",
    sendingDate: "2025-11-20",
    status: "In Progress",
  },
  {
    id: 3,
    service: "Electrical Installation (New Sockets)",
    offer: 550,
    comingDate: "2025-12-05",
    price: 550,
    notes: "Requires power shutdown for safety; takes 3 hours.",
    sendingDate: "2025-11-18",
    status: "Rejected",
  },
  {
    id: 4,
    service: "Painter (Wall Repaint)",
    offer: 800,
    comingDate: "2025-12-03",
    price: 780,
    notes: "Standard white paint included. Extra cost for color matching.",
    sendingDate: "2025-11-23",
    status: "Accepted",
  },
];

const NotesViewer = ({ note, onClose }) => {
  return (
    <div className="view-notes-backdrop" onClick={onClose}>
      <div className="view-notes-box" onClick={(e) => e.stopPropagation()}>
        <h5>Worker's Note</h5>
        <p>{note}</p>
        <button className="btn close-btn mt-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default function WorkerOffersTable() {
  const [viewNote, setViewNote] = useState(null);

  const getStatusBadge = (status) => {
    const statusMap = {
      Completed: { variant: "success", text: "Completed" },
      Accepted: { variant: "primary", text: "Accepted" },
      "In Progress": { variant: "warning", text: "In Progress" },
      Rejected: { variant: "danger", text: "Rejected" },
    };
    const { variant, text } = statusMap[status] || {
      variant: "secondary",
      text: "Pending",
    };
    return (
      <Badge bg={variant} className="fw-semibold px-3 py-2 rounded-pill">
        {text}
      </Badge>
    );
  };

  return (
    <div className="card shadow-lg p-4 offers-big-card">
      <h3 className="fw-bold mb-4">Worker's Sent Offers</h3>
      <Table responsive hover className="mb-0 align-middle">
        <thead className="table-light offers-table-header">
          <tr>
            <th className="py-3 text-start">Service</th>
            <th className="py-3">Offer Price</th>
            <th className="py-3">Coming Date</th>
            <th className="py-3">Notes</th>
            <th className="py-3">Sending Date</th>
            <th className="py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {workerOffersData.map((offer) => (
            <tr key={offer.id} className="offer-row">
              <td className="text-start">{offer.service}</td>
              <td>{offer.offer} EGP</td>
              <td>{offer.comingDate}</td>
              <td>
                <span
                  className="notes-btn"
                  onClick={() => setViewNote(offer.notes)}
                >
                  View Notes
                </span>
              </td>
              <td>{offer.sendingDate}</td>
              <td className="text-center">{getStatusBadge(offer.status)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Notes Viewer Modal */}
      {viewNote && (
        <NotesViewer note={viewNote} onClose={() => setViewNote(null)} />
      )}
    </div>
  );
}
