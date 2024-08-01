import React, { useState } from "react";
import "./Signup.css";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import useRegister from "../../Hooks/useRegister.js";

function Signup() {
  const { register, loading } = useRegister();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({
      username: state.username,
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
            <h1>Welcome to DownWatch</h1>
            <input
              type="text"
              label="Username"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
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
              <Link className="link" to="/login">
                <p>Already have an account?</p>
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
