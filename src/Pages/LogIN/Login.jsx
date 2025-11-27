import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import {  FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
export default function SignUp() {
    let navigate = useNavigate();
    const [apiError, setApiError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleLogin(formValues)
    {
        setIsLoading(true);
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',formValues)
        .then((apiResponse)=>{
            setIsLoading(false)
            navigate('/');
            console.log(apiResponse);
        })
        .catch((apiResponse)=>{
            setApiError(apiResponse.response.data.message);
            setIsLoading(false);
        })
        
    }
    let signinShcema = Yup.object().shape(
        {
            email:Yup.string().email('invalid Email').required('Email is required'),
            password:Yup.string().matches(/^[A-Z][a-z 0-9]{7}$/,'Password must be at least 8 chars').required('Password is required'),
        }
    )
    let formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:signinShcema,
        onSubmit:handleLogin
    })





  return (
    <>
      <div className="py-5 col-md-4 col-10  mx-auto formContainer row ">
        {apiError?<div className="alert alert-danger py-2 " role="alert">
            {apiError}
        </div>:null
        }
        <h2 className='text-center py-2 mb-0 fw-bold heading '>Welcome Back</h2>
        <p className=" text-center fw-medium mb-5 ">Login to continue your journey </p>
        <Form onSubmit={formik.handleSubmit} className="form shadow bg-light rounded">

          <FloatingLabel
            controlId="userEmail"
            label="UserName or Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Fady12@gmail.com"
              className="pt-4 pb-0"
            />
          </FloatingLabel>
          {formik.errors.email && formik.touched.email?<div className="alert alert-danger py-2 " role="alert">
            {formik.errors.email}
          </div>:null}

        
          <FloatingLabel
            controlId="userPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type={showPassword?"text":"password"}
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Fady.."
              className="pt-4 pb-0"
            />
            {<i
              className={`fa-solid ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } password-toggle`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>}
          </FloatingLabel>
          {formik.errors.password && formik.touched.password?<div className="alert alert-danger py-2 " role="alert">
            {formik.errors.password}
          </div>:null}
            <div className="d-flex align-items-center justify-content-between">

            <div className="d-flex align-items-start gap-2 justify-content-start my-4 remember ">
                <input id="agree" type="checkBox" className="mt-2 ms-1 big-radio"/>
                <label htmlFor="agree" className=" text-muted ">
                Remember me
                </label>
            </div>
            <Link to='/' className="forget text-decoration-none">Forget Your Password ?</Link>
            </div>

            <button type="submit" className="border-0 w-100 py-1 fw-medium fs-5 btn submitBtn ">
            {isLoading?<i className="fas fa-spinner fa-spin"></i>:'Log In'}
            </button>
        <p className=" mt-4 text-center text-muted">
            Don't have an account ? 
            <span>
              <Link to={"/signup"} className="fw-medium text-decoration-none tologin">
                {' '}Sign Up
              </Link>
            </span>
        </p>
        </Form>
      </div>
    </>
  );
}
