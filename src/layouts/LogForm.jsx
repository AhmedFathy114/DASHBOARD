import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../pages/Api";
import { useNavigate } from "react-router-dom";
function SigninForm() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await api.post(
        "/auth/login",
        {
          userName: username,
          password: password,
        }
      );

      const result = response.data;
      if (result) {
        const user = result.data;
        if (user.userType !== "admin") {
          setError("only admin can login!!");
          setUsername("");
          setPassword("");
          return;
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.token);
        alert("Succes login , welcome ✅")
        navigate("/dashboards", { replace: true });
        window.history.pushState(null, "", "/");
        return;
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        const msg = err.response.data.message;
         if (msg.includes("userName or email is required") || msg.includes("password is required") || msg.includes("user Not founded") || msg.includes("invalid password")) {
          setError("please enter a valid name or password!");
          setUsername("");
          setPassword("");
        } 
      } else {
        setError("server can not connect⚠️");
      }
    }

    setValidated(true);
  };

  return (
    <div className="log-form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustom01" className="mb-4">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </Form.Group>

        {error && <p className="text-danger fw-bold">{error}</p>}
        <Button type="submit" variant="dark">
          Signin
        </Button>
      </Form>
    </div>
  );
}

export default SigninForm;
