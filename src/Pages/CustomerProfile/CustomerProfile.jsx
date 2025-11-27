import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Table,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageActionModal from "../../Components/ImageActionModal/ImageActionModal.jsx";
import ImageViewerModal from "../../Components/ImageViewerModal/ImageViewerModal.jsx";
import WorkerOffersTable from "../../Components/WorkerOffersTable/WorkerOffersTable.jsx";

// Customer Data
const customerData = {
  name: "Eleanor Vance",
  since: "2023",
  email: "eleanor.v@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 Craftwork Lane, Buildtown",
  //Intial user-photo
  profilePicDefaultUrl:
    "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  isWorker: true,
};

// Data for service history
const serviceHistory = [
  {
    service: "Plumbing Repair",
    date: "Jul 15, 2024",
    status: "Completed",
    initialRating: 0,
    id: 1,
  },
  {
    service: "Electrical Installation",
    date: "Jun 20, 2024",
    status: "Completed",
    initialRating: 5,
    id: 2,
  },
  {
    service: "Home Renovation Consultation",
    date: "May 10, 2024",
    status: "Completed",
    initialRating: 4.5,
    id: 3,
  },
  {
    service: "Custom Carpentry",
    date: "Apr 2, 2024",
    status: "In Progress",
    initialRating: null,
    id: 4,
  },
];

// Helper component for Interactive Rating (Unchanged)
const InteractiveRating = ({ initialRating, serviceId }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= (hover || rating);

    stars.push(
      <i
        key={i}
        className={`
                    ${
                      isFilled
                        ? "fa-solid active-star"
                        : "fa-regular empty-star"
                    } 
                    fa-star
                `}
        onClick={() => {
          // here API to send rating
          setRating(i);
          console.log(`Service ${serviceId} rated: ${i} stars`);
        }}
        onMouseEnter={() => setHover(i)}
        onMouseLeave={() => setHover(0)}
      ></i>
    );
  }

  return (
    <div className="d-flex justify-content-center gap-1 service-rating">
      {stars}
    </div>
  );
};

function CustomerProfilePage() {
  // useState -> user-img url
  const [profileImageUrl, setProfileImageUrl] = useState(
    customerData.profilePicDefaultUrl
  );
  const [showImageMenu, setShowImageMenu] = useState(false);

  // Reference for the hidden file input
  const fileInputRef = useRef(null);
  // State for the enlarged image viewer
  const [showImageViewer, setShowImageViewer] = useState(false);

  // Is photo existing?
  const hasUploadedPhoto =
    profileImageUrl !== customerData.profilePicDefaultUrl;

  // Handle image file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a temporary URL for immediate preview (Temporary Storage)
      const newImageUrl = URL.createObjectURL(file);
      setProfileImageUrl(newImageUrl);
      console.log("New file selected:", file.name);
      alert(`New photo selected and set for preview: ${file.name}`);
      // Clear the input value to allow re-uploading the same file immediately
      event.target.value = null;
    }
  };

  // fake action until - database
  const handleImageAction = (action) => {
    setShowImageMenu(false); // Close the action menu immediately after selection

    if (action === "add" || action === "change") {
      // Trigger click on the hidden file input
      fileInputRef.current.click();
    } else if (action === "delete") {
      setProfileImageUrl(customerData.profilePicDefaultUrl);
      alert("Simulating photo deletion (Default URL set).");
    } else if (action === "open") {
      // Open the new image viewer modal
      setShowImageViewer(true);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4 mt-5">
        {/* Profile Sidebar Section */}
        <Col lg={4} className="mb-4">
          <Card className="p-4 shadow-lg rounded-4 border-0">
            {/* Customer Details */}
            <div className="d-flex align-items-center mb-4 gap-3 position-relative">
              <div
                className="rounded-circle shadow-sm profile-image-container"
                style={{
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                }}
                onClick={() => setShowImageMenu(true)} //open modal when click
              >
                {/* img */}
                <img
                  src={profileImageUrl}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Overlay on user-img */}
                <div className="profile-image-overlay d-flex justify-content-center align-items-center">
                  <i
                    className={`fa-solid ${
                      hasUploadedPhoto ? "fa-pen" : "fa-camera-retro"
                    } text-white fa-lg`}
                    style={{ pointerEvents: "none" }}
                  ></i>
                </div>
              </div>

              <div>
                <h2 className="fs-4 fw-bold text-dark">{customerData.name}</h2>
                <p className="text-muted m-0" style={{ fontSize: "0.9rem" }}>
                  Customer since {customerData.since}
                </p>
              </div>
            </div>

            {/* Contact Information List */}
            <ListGroup variant="flush" className="gap-3">
              <ListGroup.Item className="d-flex align-items-center p-0 border-0 bg-transparent">
                <i className="fa-solid fa-envelope me-3 text-muted"></i>
                <div>
                  <p className="fw-medium m-0">{customerData.email}</p>
                  <p className="text-muted m-0" style={{ fontSize: "0.75rem" }}>
                    Email
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center p-0 border-0 bg-transparent">
                <i className="fa-solid fa-phone me-3 text-muted"></i>
                <div>
                  <p className="fw-medium m-0">{customerData.phone}</p>
                  <p className="text-muted m-0" style={{ fontSize: "0.75rem" }}>
                    Phone Number
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center p-0 border-0 bg-transparent">
                <i className="fa-solid fa-location-dot me-3 text-muted"></i>
                <div>
                  <p className="fw-medium m-0">{customerData.address}</p>
                  <p className="text-muted m-0" style={{ fontSize: "0.75rem" }}>
                    Address
                  </p>
                </div>
              </ListGroup.Item>
            </ListGroup>

            {/* Edit Profile Button */}
            <Button
              as={Link}
              to="#"
              className="mt-4 w-100 fw-semibold profile-edit-btn" // استخدام profile-edit-btn
              style={{ borderRadius: "0.75rem" }}
            >
              <i className="fa-solid fa-edit me-2"></i> Edit Profile
            </Button>
          </Card>
        </Col>

        {/* Service History Section */}
        <Col lg={8}>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
            <div>
              {/* <h1
                className="fw-bold fs-3 heading "
                style={{ color: "var(--main-color)" }}
              >
                Service History
              </h1> */}
              <h2 class="display-6 fw-bolder pb-2">
                <span class="text-gradient">Service History</span>
              </h2>
              <p className="mt-1 text-muted m-0">
                Review your past service requests and book again.
              </p>
            </div>

            <div className="d-flex flex-column align-items-end gap-2">
              <Link to="/services/postservice">
                <Button className="main-btn rounded-pill fw-bold px-4 py-2 shadow-sm border-0">
                  <i className="fa-solid fa-plus me-2"></i> New Service Request
                </Button>
              </Link>

              {/* Find a new Service Button */}
              <Link to="/services">
                <Button
                  className="secondary-btn rounded-pill fw-bold px-4 py-2 shadow-sm border-0"
                  style={{
                    color: "var(--main-color)",
                    border: "2px solid var(--main-color)",
                  }}
                >
                  <i className="fa-solid fa-search me-2"></i> Find a new Service
                </Button>
              </Link>
            </div>
          </div>

          <Card className="shadow-lg border-0 rounded-4 overflow-hidden mb-5">
            {/* Service History Table */}
            <Table
              responsive
              hover
              className="mb-0 text-center align-middle"
              style={{ minWidth: "700px" }}
            >
              <thead className="table-light">
                <tr>
                  <th className="py-3 text-start">Service</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Rating</th>
                  <th className="py-3 text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {serviceHistory.map((service, index) => (
                  <tr key={index}>
                    <td className="text-start">
                      <p
                        className="fw-medium m-0"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {service.service}
                      </p>
                    </td>
                    <td className="text-muted text-nowrap">{service.date}</td>
                    <td>
                      <span
                        className={`badge ${
                          service.status === "Completed"
                            ? "bg-success"
                            : "bg-warning"
                        } fw-semibold px-3 py-2 rounded-pill`}
                      >
                        {service.status === "Completed"
                          ? "Completed"
                          : "In Progress"}
                      </span>
                    </td>
                    <td>
                      {service.initialRating !== null ? (
                        <InteractiveRating
                          initialRating={service.initialRating}
                          serviceId={service.id}
                        />
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                    <td className="text-end">
                      <div className="d-flex justify-content-end gap-2">
                        <Link
                          to={`/services/details/${service.id}`}
                          className="text-decoration-none"
                        >
                          <Button
                            variant="link"
                            className="fw-semibold text-sm p-0"
                            style={{
                              color: "var(--main-color)",
                              fontSize: "0.9rem",
                            }}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* Pagination Section*/}
            <div className="p-4 border-top d-flex justify-content-end align-items-center">
              <div className="d-flex align-items-center gap-1">
                <Button variant="light" disabled className="p-2 rounded-2">
                  <i className="fa-solid fa-chevron-left"></i>
                </Button>
                <Button
                  className="w-8 h-8 rounded-2 text-sm fw-bold main-botton active"
                  style={{ height: "32px", width: "32px", padding: 0 }}
                >
                  1
                </Button>
                <Button
                  variant="light"
                  className="w-8 h-8 rounded-2 text-sm"
                  style={{ height: "32px", width: "32px", padding: 0 }}
                >
                  2
                </Button>
                <Button
                  variant="light"
                  className="w-8 h-8 rounded-2 text-sm"
                  style={{ height: "32px", width: "32px", padding: 0 }}
                >
                  3
                </Button>
                <Button variant="light" className="p-2 rounded-2">
                  <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
            </div>
          </Card>

          {/* Worker Offers Table*/}
          {customerData.isWorker && (
            <div className="mt-5">
              <h2 class="display-6 fw-bolder pb-2">
                <span class="text-gradient">Worker Offers</span>
              </h2>
              <p className="mt-1 text-muted m-0 mb-3">
                View and manage the offers you have sent to clients.
              </p>
              <WorkerOffersTable />
            </div>
          )}
        </Col>
      </Row>

      {/* Hidden file input to trigger file explorer */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/png, image/jpeg, image/gif"
      />

      {/* ImageActionModal*/}
      <ImageActionModal
        isOpen={showImageMenu}
        onClose={() => setShowImageMenu(false)}
        hasPhoto={hasUploadedPhoto}
        onAction={handleImageAction}
      />

      {/* ImageViewerModal*/}
      {showImageViewer && (
        <ImageViewerModal
          imageUrl={profileImageUrl}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </Container>
  );
}

export default CustomerProfilePage;
