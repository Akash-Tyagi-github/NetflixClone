import React from "react";
import { useFormik } from "formik";
import "./Form.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Form = () => {
  let navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email !").required("*Required"),
    password: Yup.string().required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      navigate("../displaymovie");
    },
  });
  return (
    <>
      <div  className="form">
        <h1 id="signinheading">Sign In</h1>

        <div className="inputs">
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
          {formik.errors.email && formik.touched.email ? (
            <h1 id="errormesg">{formik.errors.email}</h1>
          ) : null}
        </div>
        <div className="inputs">
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password ? (
            <h1 id="errormesg">{formik.errors.password}</h1>
          ) : null}
        </div>

        <button id="formbtn" type="submit" onClick={formik.handleSubmit}>
          Submit
        </button>
      </div>
      <div className="ticker">
        <div>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          <label id="ticker1" for="remember">
            Remember me
          </label>
        </div>
        <h1 id="hlp">Nedd help?</h1>
      </div>
      <div className="detail">
        <h1 id="one">
          New to Netflix?<a id="two"> Sign up now.</a>
        </h1>
        <h1 id="three">
          This page is protected by Google reCAPTCHA to
          <br />
          ensure you're not a bot. Learn more
        </h1>
      </div>
    </>
  );
};
export default Form;
