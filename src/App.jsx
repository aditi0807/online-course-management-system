import React, { useState } from "react";

import Home from "./assets/Home";
import Login from "./assets/Login";
import Courses from "./assets/Courses";
import CourseDetails from "./assets/CourseDetails";
import Enrollment from "./assets/Enrollment";
import Dashboard from "./assets/Dashboard";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openCourseDetails = (course) => {
    setSelectedCourse(course);
    setPage("details");
  };

  return (
    <div className="app">

      {page === "home" && (
        <Home onLogin={() => setPage("login")} />
      )}

      {page === "login" && (
        <Login
          onLogin={() => setPage("courses")}
          onBack={() => setPage("home")}
        />
      )}

      {page === "courses" && (
        <Courses
          onDetails={openCourseDetails}
          onDashboard={() => setPage("dashboard")}
        />
      )}

      {page === "details" && (
        <CourseDetails
          course={selectedCourse}
          onBack={() => setPage("courses")}
          onEnroll={() => setPage("enrollment")}
        />
      )}

      {page === "enrollment" && (
        <Enrollment
          course={selectedCourse}
          onComplete={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && (
        <Dashboard
          onCourses={() => setPage("courses")}
          onHome={() => setPage("home")}
        />
      )}

    </div>
  );
}

export default App;