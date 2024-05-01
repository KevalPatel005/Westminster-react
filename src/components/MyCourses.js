import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

function MyCourses() {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("user")).courses);

    console.log(course);
  }, []);

  return (
    <div className="courses-container">
      {course.map((course) => {
        return (
          <Card className="courses-card-container" key={course.id}>
            <Card.Header>{course.level}</Card.Header>
            <Card.Body>
              <Card.Title>{course.course}</Card.Title>
              <Card.Text>{course.intake}</Card.Text>
              <button disabled className="waves-effect waves-light btn courses-btn">
                Enrolled
              </button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default MyCourses;
