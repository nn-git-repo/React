import React, { useState } from "react";
import './Appss.css'
const CourseCard = ({ course, enrollCourse }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>By {course.author}</p>
      <p>Duration: {course.duration}</p>
      <button 
        onClick={() => enrollCourse(course)}
        disabled={course.enrolled}
      >
        {course.enrolled ? "Already Enrolled" : "Enroll"}
      </button>
    </div>
  );
};

const CourseApp = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", author: "John", duration: "5h", enrolled: false },
    { id: 2, title: "Java OOP", author: "Mary", duration: "6h", enrolled: false },
    { id: 3, title: "Spring Boot", author: "Alex", duration: "8h", enrolled: false }
  ]);

  const enrollCourse = (course) => {
    setCourses(courses.map(c =>
      c.id === course.id ? { ...c, enrolled: true } : c
    ));
  };

  return (
    <div>
      <h1>E-Learning Platform</h1>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} enrollCourse={enrollCourse} />
      ))}
    </div>
  );
};

export default CourseApp;
