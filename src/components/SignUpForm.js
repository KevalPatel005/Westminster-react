import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUpUser = () => {
    axios
      .post("http://localhost:3333/users", {
        name,
        email,
        password,
        phone: "",
        address: "",
        courses: [],
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("hasReloaded", "false");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card-container">
      <div className="card card-wrapper">
        <h2 className="form-type my-heading">Signup to Student's Portal</h2>
        <input
          placeholder="Username"
          type="text"
          value={name}
          className="validate"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
        />
        <input
          placeholder="Email"
          value={email}
          type="text"
          className="validate"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          className="validate"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
        />

        <button type="submit" onClick={signUpUser} className="waves-effect waves-light btn my-btn">
          SignUp
        </button>
        <p className="redirect">
          Don't have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
