import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Campuses from "./components/Campuses";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import MyCourses from "./components/MyCourses";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
