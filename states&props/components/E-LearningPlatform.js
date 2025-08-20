import React, { useState } from "react";
import './Appss.css'
function CourseApp() {
  const [selected, setSelected] = useState([]);
  const courses = [
    { id: 1, title: "React Basics", price: 999 },
    { id: 2, title: "Java Fullstack", price: 1499 },
    { id: 3, title: "Spring Boot", price: 1299 },
  ];

  const enroll = (course) => {
    setSelected([...selected, course]);
  };

  return (
    <div>
      <h2>Course App</h2>
      <div className="card-container">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <h3>{course.title}</h3>
            <p>₹{course.price}</p>
            <button onClick={() => enroll(course)}>Enroll</button>
          </div>
        ))}
      </div>
      <h3>Enrolled Courses:</h3>
      <ul>
        {selected.map((c, i) => (
          <li key={i}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseApp;
