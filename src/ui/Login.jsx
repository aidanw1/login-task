import React, { useState, useEffect } from "react";
import validate from "../validation/validateLogin";
import useForm from "../validation/useForm";

const LOCAL_STORAGE_KEY = "user_values";

export default function Login() {
  // const [initialValues, setInitialValues] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { values, handleChange, handleSubmit, errors } = useForm(
    login,
    validate,
    LOCAL_STORAGE_KEY,
    rememberMe,
    setRememberMe
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  const onChangeCheckbox = (e) => {
    setRememberMe(e.target.checked);
  };

  // onChange={() => setIsChecked(!isChecked)}
  return (
    <div className="grid">
      <div className="login-container">
        <div className="login-container__content">
          <img src="./green.svg" alt="green energy company logo" />
          <div className="headers">
            <h2 className="headers__heading">Example login screen</h2>
            <h3 className="headers__sub-heading">
              Getting started with Green.
            </h3>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="login-container__content__input-box">
              <label htmlFor="email">Email Address</label>
              {/* pass in email key returned from the values object stored in useForm custom hook */}
              {/* set the default value using || to an empty string if values.email doesnt exist */}
              <input
                className={`${errors.email && "warning"}`}
                value={values.email || ""}
                onChange={handleChange}
                required
                name="email"
                type="email"
                maxLength="50"
              />
              {errors.email && <p className="help">{errors.email}</p>}
            </div>
            <div className="login-container__content__remember-device">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={onChangeCheckbox}
              />
              <label>Remember this device</label>
            </div>
            <button className="login-container__content--btn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
