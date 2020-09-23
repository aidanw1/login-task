import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState(false);

  return (
    <div className="login-container">
      <div className="login-container__content">
        <img src="./green.svg" alt="green energy company logo" />
        <div className="headers">
          <h2 className="headers__heading">Example login screen</h2>
          <h3 className="headers__sub-heading">Getting started with Green.</h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser("");
            alert(`${user} has logged in`);
          }}
        >
          <div className="login-container__content__input-box">
            <label htmlFor="email">Email Address</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="input"
              type="email"
              id="email"
              maxLength="50"
            />
          </div>
          <div className="login-container__content__remember-device">
            <input type="checkbox" />
            <label>Remember this device</label>
          </div>
          {message ? <div>Please enter valid email</div> : undefined}
          <button
            disabled={user.length < 1}
            className="login-container__content--btn"
            type="submit"
            value="Submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
