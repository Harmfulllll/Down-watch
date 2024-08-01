import React, { useState } from "react";
import "./Login.css";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin.js";

function Login() {
  const { login, loading } = useLogin();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email: state.email,
      password: state.password,
    });
  };
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="signup-main">
      <div className="sign-up">
        <div className="form-container">
          <form action="" onSubmit={handleSubmit}>
            <h1>Welcome Back</h1>
            <input
              type="text"
              label="Email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              label="Password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button className="login-submit" disabled={loading}>
              {loading ? <BeatLoader color="white" size={10} /> : "Sign Up"}
            </button>
            <div className="no-account">
              <Link className="link" to="/register">
                <p>Don't have an account? Sign Up</p>
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
