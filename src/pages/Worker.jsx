import { useEffect , useState } from "react";
import Modal from "../layouts/Modal";
import api from "./Api";
function WorkerPage() {
  const token = localStorage.getItem("token");
  const [worker, setWorker] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    NIDnumber: "",
    age: "",
    phone: "",
    city: "",
    address: "",
    workerskills: "",
  });
  const fetch = async () => {
    try {
      const response = await api.get("/users/getAllWorkers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = response.data.data.workers;
      setWorker(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCreateWorker = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/auth/createWorkeraccount",
        {
          ...formData,
          workerskills: formData.workerskills || "none", 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Worker created successfully!");
      fetch();
      setFormData({
        userName: "",
        fullName: "",
        email: "",
        password: "",
        NIDnumber: "",
        age: "",
        phone: "",
        city: "",
        address: "",
        workerskills: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error creating worker");
      console.log("SERVER ERROR:", error.response?.data);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/deleteWorker/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWorker((prev) => prev.filter((worker) => worker.workerId !== id));
    } catch (error) {
      console.log(error);
    }
  };
  if (!worker || worker.length === 0) {
    return <h3 className="text-center mt-4">Empty!!</h3>;
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleCreateWorker} className="p-3 mb-4 border rounded">
          <h4 className="text-center">Create Worker</h4>
          <input
            style={{ width: "400px" }}
            type="text"
            name="userName"
            placeholder="User Name"
            className="form-control mb-2"
            value={formData.userName}
            onChange={handleInput}
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="form-control mb-2"
            value={formData.fullName}
            onChange={handleInput}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            value={formData.email}
            onChange={handleInput}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-2"
            value={formData.password}
            onChange={handleInput}
            required
          />
          <input
            type="text"
            name="NIDnumber"
            placeholder="NID Number"
            className="form-control mb-2"
            value={formData.NIDnumber}
            onChange={handleInput}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="form-control mb-2"
            value={formData.age}
            onChange={handleInput}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-control mb-2"
            value={formData.phone}
            onChange={handleInput}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="form-control mb-2"
            value={formData.city}
            onChange={handleInput}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="form-control mb-2"
            value={formData.address}
            onChange={handleInput}
          />
          <input
            type="text"
            name="workerskills"
            placeholder="Worker Skills"
            className="form-control mb-2"
            value={formData.workerskills}
            onChange={handleInput}
            required
          />

          <div className="text-center">
            <button className="btn btn-primary">Create Worker</button>
          </div>
        </form>
      </div>

      <table className="table-card">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>NIDnumber</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {worker.map((worker) => (
            <tr key={worker.workerId}>
              <td>{worker.workerId}</td>
              <td>{worker.fullName}</td>
              <td>{worker.email}</td>
              <td>{worker.NIDnumber}</td>
              <td>{worker.age}</td>
              <td>{worker.phone}</td>
              <td>{worker.city} {worker.address}</td>
              <td>
                <button
                  className="btn  btn-sm me-2"
                  style={{backgroundColor:"yellow"}}
                  onClick={() => { 
                    setSelectedWorker(worker);
                    setShowModal(true);
                  }}
                >
                  View
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(worker.workerId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <Modal  show={showModal} onClose={() => setShowModal(false)}>
          <div>
    <h2 className="text-center fw-bold mb-3">Worker Reviews ⭐</h2>
    {(selectedWorker?.warningMessages?.length || 0) === 0 ? (
      <p className="text-center">No reviews found.</p>
    ) : (
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <table className="table ">
          <thead>
            <tr className="text-center">
              <th>ServiceTitle</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Customer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {selectedWorker.warningMessages.map((rev, index) => (
            <tr key={index} className="text-center">
              <td>{rev.serviceTitle}</td>
              <td>{rev.rating} ⭐</td>
              <td>{rev.comment}</td>
              <td style={{whiteSpace:"nowrap"}}>{rev.customerName}</td>
              <td>{new Date(rev.reviewDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
    </Modal>
    </>
  );
}

export default WorkerPage;
