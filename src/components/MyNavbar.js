import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("user") ? 1 : 0);
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/login");
  };

  const renderProfile = () => {
    if (isLoggedIn) {
      return <Nav.Link href="/profile">Profile</Nav.Link>;
    }
  };

  const renderLogout = () => {
    if (isLoggedIn) {
      return (
        <button className="btn btn-danger" onClick={logoutUser}>
          Logout
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      );
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="my-navbar">
      <div className="container">
        <Navbar.Brand href="/">Westminster University</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            {renderProfile()}
            <Nav.Link href="/mycourses">My Courses</Nav.Link>
            <Nav.Link href="/campuses">Contact</Nav.Link>
          </Nav>
          {renderLogout()}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
