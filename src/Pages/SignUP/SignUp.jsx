import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "@fortawesome/fontawesome-free/css/all.min.css"; 


export default function SignUp() {
  let navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleRegister(formValues) {
    setIsLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", formValues)
      .then((apiResponse) => {
        setIsLoading(false);
        navigate("/");
        console.log(apiResponse);
      })
      .catch((apiResponse) => {
        setApiError(apiResponse.response.data.message);
        setIsLoading(false);
      });
  }

  let signupSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Z][a-z]{2,20}( [A-Z][a-z]{2,20})?$/,
        "Name must start with uppercase letter then lowercase"
      )
      .required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    address: Yup.string()
      .matches(
        /^[A-Za-z0-9À-ÖØ-öø-ÿ\s,.'/-]{5,100}$/,
        "Invalid address format"
      )
      .required("Address is required"),
    city: Yup.string()
      .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/, "Invalid City")
      .required("City is required"),
    phone: Yup.string()
      .matches(/^01[0,1,2,5][0-9]{8}$/, "Accept only Egyptian phone numbers")
      .required("Phone is required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{7}$/,
        "Password must start with uppercase and be at least 8 chars"
      )
      .required("Password is required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      phone: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      <div className="py-5 col-md-5 col-10 mx-auto formContainer row">
        {apiError ? (
          <div className="alert alert-danger py-2" role="alert">
            {apiError}
          </div>
        ) : null}

        <h2 className="text-center py-2 mb-0 fw-bold heading">
          Create Your Account
        </h2>
        <p className="text-center fw-medium mb-5">
          Join a community of skilled artisans and clients
        </p>

        <Form onSubmit={formik.handleSubmit} className="form shadow bg-light rounded">
          
          <FloatingLabel controlId="userName" label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Fady.."
              className="pt-4 pb-0"
            />
          </FloatingLabel>
          {formik.errors.name && formik.touched.name && (
            <div className="alert alert-danger py-2">{formik.errors.name}</div>
          )}

          
          <FloatingLabel controlId="userEmail" label="Email Address" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Fady12@gmail.com"
              className="pt-4 pb-0"
            />
          </FloatingLabel>
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger py-2">{formik.errors.email}</div>
          )}

          
          <FloatingLabel controlId="userAddress" label="Address" className="mb-3">
            <Form.Control
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Qaha, Almuaize street"
              className="pt-4 pb-0"
            />
          </FloatingLabel>
          {formik.errors.address && formik.touched.address && (
            <div className="alert alert-danger py-2">{formik.errors.address}</div>
          )}

          
          <FloatingLabel controlId="userCity" label="City" className="mb-3">
            <Form.Control
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Benha"
              className="pt-4 pb-0"
            />
          </FloatingLabel>
          {formik.errors.city && formik.touched.city && (
            <div className="alert alert-danger py-2">{formik.errors.city}</div>
          )}

          
          <FloatingLabel controlId="userPhone" label="Phone Number" className="mb-3">
            <Form.Control
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="01023734855"
              className="pt-4 pb-0"
            />
          </FloatingLabel>
          {formik.errors.phone && formik.touched.phone && (
            <div className="alert alert-danger py-2">{formik.errors.phone}</div>
          )}

          
          <FloatingLabel
            controlId="userPassword"
            label="Password"
            className="mb-3 position-relative"
          >
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Password"
              className="pt-4 pb-0"
            />
            <i
              className={`fa-solid ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } password-toggle`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </FloatingLabel>
          {formik.errors.password && formik.touched.password && (
            <div className="alert alert-danger py-2">{formik.errors.password}</div>
          )}

          <FloatingLabel
            controlId="userConfirmPassword"
            label="Confirm Password"
            className="mb-3 position-relative"
          >
            <Form.Control
              type={showConfirmPassword ? "text" : "password"}
              name="ConfirmPassword"
              value={formik.values.ConfirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm Password"
              className="pt-4 pb-0"
            />
            <i
              className={`fa-solid ${
                showConfirmPassword ? "fa-eye-slash" : "fa-eye"
              } password-toggle`}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </FloatingLabel>
          {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword && (
            <div className="alert alert-danger py-2">
              {formik.errors.ConfirmPassword}
            </div>
          )}

          
          <div className="d-flex align-items-start gap-3 justify-content-center my-4">
            <input id="agree" type="checkbox" className="mt-2 ms-2 big-check" />
            <label htmlFor="agree" className="text-muted agreePolicy">
              I agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>.
            </label>
          </div>

          
          <button type="submit" className="border-0 w-100 py-1 fw-medium fs-5 btn submitBtn">
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Sign Up"}
          </button>
        <p className="mt-4 text-center text-muted">
          Already have an account?
          <span>
            <Link to={"/login"} className="fw-medium text-decoration-none tologin">
              {" "}
              Login
            </Link>
          </span>
        </p>
        </Form>
      </div>
    </>
  );
}
