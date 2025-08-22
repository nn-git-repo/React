import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be blank";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be blank";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course name cannot be blank";
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback cannot be blank";
    } else if (formData.feedback.length < 20) {
      newErrors.feedback = "Feedback must be at least 20 characters";
    } else if (formData.feedback.length > 250) {
      newErrors.feedback = "Feedback cannot exceed 250 characters";
    }

    return newErrors;
  };

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Feedback submitted successfully!");
      console.log("Feedback Submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        course: "",
        feedback: "",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Course Feedback Form</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Course */}
        <div className="form-group">
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <p className="error">{errors.course}</p>}
        </div>

        {/* Feedback */}
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
          />
          {errors.feedback && <p className="error">{errors.feedback}</p>}
        </div>

        <button type="submit" className="btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
