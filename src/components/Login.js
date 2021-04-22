import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import '../assets/styles/Login.css';
import { Link } from "react-router-dom";
import logo from "../assets/amazon_logo_black.png";

const Login = () => (
    <Formik
        initialValues={{ email: "", password: "" }}

        validationSchema={
            Yup.object().shape({
                email: Yup.string().email().required("Required"),
                password: Yup.string().required("No password provided.").min(8, "Password is too short - should be 8 chars minimum.").matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}
    >
        {props => {
            const {values,touched,errors,handleChange,handleBlur,handleSubmit} = props;
            return (
                <div className='login'>
                    <Link to='/'>
                        <img className="login__logo" src={logo} alt="Amazon Logo" />
                    </Link>

                    <div className='login__container'>
                        <h1>Sign-in</h1>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email && "error"}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="email">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <button className='login__signInButton' type="submit">
                                Login
          </button>
                        </form>
                        <p>
                            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                 </p>
                        <Link to={'/registration'}>
                            <div>
                                <button className='login__registerButton'>Create your Amazon Account</button>
                            </div></Link></div></div>
            );
        }}
    </Formik>

)
export default Login;
