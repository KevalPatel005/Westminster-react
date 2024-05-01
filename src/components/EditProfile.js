import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    console.log(userId);
    axios
      .get(`http://localhost:3333/users/` + userId)
      .then((res) => {
        setUser(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateUser = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3333/users/` + user.id, {
        ...user,
      })
      .then((res) => {
        console.log("Update Successful");
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card-container">
      <form className="card card-wrapper" onSubmit={updateUser}>
        <h2 className="form-type my-heading">Upadte Profile</h2>
        <input
          placeholder="Username"
          type="text"
          value={user.name}
          className="validate"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          //   disabled
          name="name"
        />
        <input
          placeholder="Email"
          value={user.email}
          type="text"
          className="validate"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          //   disabled
          name="email"
        />

        <input
          placeholder="Phone"
          value={user.phone}
          type="text"
          className="validate"
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value });
          }}
          name="phone"
        />

        <input
          placeholder="address"
          value={user.address}
          type="text"
          className="validate"
          onChange={(e) => {
            setUser({ ...user, address: e.target.value });
          }}
          name="address"
        />

        <button type="submit" onClick={updateUser} className="waves-effect waves-light btn my-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
