import React, { useState } from "react";
import api from "./Api";

function CreateAdmins() {

  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // 🔥 خليه هنا جوا الفنكشن
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/auth/createadminaccount",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);

      setFormData({
        userName: "",
        fullName: "",
        email: "",
        password: "",
        phone: "",
      });

    } catch (error) {
      console.log("🚀 ~ createAdminAccount ~ error:", error);
      setMessage(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} >
        
        <h4 className="text-center">Create Admin</h4>

        {message && <div>{message}</div>}

        <input
            style={{ width: "400px" }}
            type="text"
            name="userName"
            placeholder="User Name"
            className="form-control mb-2"
            value={formData.userName}
            onChange={handleChange}
            required
          />

        <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="form-control mb-2"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            value={formData.email}
            onChange={handleChange}
            required
          />

        <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-2"
            value={formData.password}
            onChange={handleChange}
            required
          />

        <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-control mb-2"
            value={formData.phone}
            onChange={handleChange}
          />
        <div className="text-center">
            <button className="btn btn-primary">Create Admin</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAdmins;

// const styles = {
//   page: {
//     background: "#d7eaea",
//     minHeight: "100vh",
//     paddingTop: "40px",
//   },
//   formBox: {
//     width: "35%",
//     margin: "auto",
//     background: "#d7eaea",
//     padding: "25px",
//     borderRadius: "10px",
//     border: "1px solid #c0dddd",
//   },
//   title: {
//     textAlign: "center",
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "12px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "15px",
//   },
//   button: {
//     width: "50%",
//     margin: "auto",
//     display: "block",
//     padding: "12px",
//     background: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   alert: {
//     background: "#e3f0ff",
//     padding: "10px",
//     borderRadius: "6px",
//     marginBottom: "10px",
//     border: "1px solid #b5d4ff",
//   },
// };
