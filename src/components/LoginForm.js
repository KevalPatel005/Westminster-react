import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log(loginData);
    axios
      .get("http://localhost:3333/users")
      .then((res) => {
        const foundUser = res.data.find((user) => user.email === loginData.email);
        console.log(foundUser);
        if (foundUser.password === loginData.password) {
          localStorage.clear();
          localStorage.setItem("user", JSON.stringify(foundUser));
          localStorage.setItem("hasReloaded", "false");
          navigate("/");
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card-container">
      <div className="card card-wrapper">
        <h2 className="form-type my-heading">Login to Student's Portal</h2>
        <input
          placeholder="Email"
          type="text"
          className="validate"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="validate"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginUser} className="waves-effect waves-light btn my-btn">
          Login
        </button>
        <p className="redirect">
          Don't have an account ? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
