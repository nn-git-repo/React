import React, { useState } from 'react'

/* --------------------------
   HOC 1: Authentication Check
--------------------------- */
const withAuthentication = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = true; // Mock value (can be dynamic)

    if (!isLoggedIn) {
      return <h3>Please log in to access this form.</h3>
    }

    return <WrappedComponent {...props} />
  }
}

/* --------------------------
   HOC 2: Validation
--------------------------- */
const withValidation = (WrappedComponent) => {
  return function ValidationComponent(props) {
    const handleValidation = (formData) => {
      if (!formData.comment || formData.comment.trim() === "") {
        alert("Please enter your feedback comment!")
        return false
      }
      if (!formData.milestone) {
        alert("Please select Yes/No for Milestone2 Completed")
        return false
      }
      return true
    }

    return <WrappedComponent {...props} validate={handleValidation} />
  }
}

/* --------------------------
   HOC 3: Logging
--------------------------- */
const withLogging = (WrappedComponent) => {
  return function LoggingComponent(props) {
    console.log("Form Opened")

    const handleLog = (action, data = null) => {
      console.log(`Action: ${action}`, data)
    }

    return <WrappedComponent {...props} log={handleLog} />
  }
}

/* --------------------------
   Base Feedback Form (UI only)
--------------------------- */
const FeedbackForm = ({ validate, log }) => {
  const [comment, setComment] = useState("")
  const [milestone, setMilestone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { comment, milestone }

    log("Submit Clicked", formData)

    if (validate(formData)) {
      log("Form Submitted Successfully", formData)
      alert("✅ Feedback Submitted Successfully!")
      setComment("")
      setMilestone("")
    } else {
      log("Validation Error", formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Employee Feedback Form</h2>

      <label style={styles.label}>Comments:</label>
      <textarea
        style={styles.input}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your feedback..."
      />

      <label style={styles.label}>MileStone2 Completed?</label>
      <div style={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="milestone"
            value="Yes"
            checked={milestone === "Yes"}
            onChange={(e) => setMilestone(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="milestone"
            value="No"
            checked={milestone === "No"}
            onChange={(e) => setMilestone(e.target.value)}
          />
          No
        </label>
      </div>

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  )
}

/* --------------------------
   Combine HOCs
--------------------------- */
const EnhancedFeedbackForm = withAuthentication(
  withValidation(withLogging(FeedbackForm))
)

/* --------------------------
   Styles (inline for demo)
--------------------------- */
const styles = {
  form: {
    width: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#f9f9f9",
    fontFamily: "Arial, sans-serif"
  },
  label: {
    display: "block",
    margin: "10px 0 5px"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #aaa"
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "15px"
  },
  button: {
    padding: "10px 15px",
    background: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
}

/* --------------------------
   Main Component Export
--------------------------- */
const ExampleFeedbackApp = () => {
  return (
    <div>
      <EnhancedFeedbackForm />
    </div>
  )
}

export default ExampleFeedbackApp
