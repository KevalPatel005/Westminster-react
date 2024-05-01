import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link, redirect, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const currUser = JSON.parse(localStorage.getItem("user"));

    setUser(currUser);
    axios
      .get("http://localhost:3333/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const redirectTo = () => {
    navigate("/campuses");
  };

  const handleClick = (courseId) => {
    console.log(user.courses);

    if(user.courses.some((c) => c.id === courseId)){
      return;
    }

    const newCourse = courses.filter((c) => c.id === courseId);

    const updatedUser = {
      ...user,
      courses: [...user.courses, ...newCourse],
    };

    console.log(updatedUser);
    localStorage.setItem("user", JSON.stringify({ ...updatedUser }));

    axios
      .put(`http://localhost:3333/users/` + user.id, { ...updatedUser })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

      navigate("mycourses");
  };

  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <h1>Welcome to Westminster University</h1>
          <p>London is our HOME !!!</p>
          <button onClick={redirectTo}>Our Campuses</button>
        </div>
      </div>
      <br />
      <h6 className="home-heading">Our Courses</h6>
      <div className="courses-container">
        {courses.map((course) => {
          return (
            <Card className="courses-card-container" key={course.id}>
              <Card.Header>{course.level}</Card.Header>
              <Card.Body>
                <Card.Title>{course.course}</Card.Title>
                <Card.Text>{course.intake}</Card.Text>
                <button
                  onClick={() => handleClick(course.id)}
                  className="waves-effect waves-light btn courses-btn"
                >
                  Enroll
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Home;
