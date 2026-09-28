import React, { useState } from "react";

function Enrollment({ course, onComplete }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    gender: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const enrollment = {
      ...form,
      course: course ? course.title : "Selected Course",
      duration: course ? course.duration : "",
      level: course ? course.level : "",
      price: course ? course.price : "",
    };

    localStorage.setItem(
      "enrollmentData",
      JSON.stringify(enrollment)
    );

    alert("Enrollment Successful!");

    onComplete();
  };

  return (
    <div className="enrollment-page">

      <header className="page-header">

        <div className="logo">
          <span>Learn</span>Hub
        </div>

      </header>

      <div className="enrollment-wrapper">

        <div className="enrollment-title">

          <span>ENROLLMENT</span>

          <h1>Complete Your Enrollment</h1>

          <p>
            Enter your details below to enroll in
            <strong> {course?.title}</strong>.
          </p>

        </div>

        <form
          className="enrollment-form"
          onSubmit={submitForm}
        >

          <div className="form-section">

            <h3>Personal Information</h3>

            <div className="form-grid">

              <div className="form-field">

                <label>Full Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>Qualification *</label>

                <input
                  type="text"
                  name="qualification"
                  placeholder="e.g. B.Sc Computer Science"
                  value={form.qualification}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-field">

                <label>Gender</label>

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              <div className="form-field">

                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

          <div className="selected-course">

            <div>

              <small>SELECTED COURSE</small>

              <h3>{course?.title}</h3>

            </div>

            <div className="selected-course-info">

              <div>
                {course?.duration}
              </div>

              <div>
                {course?.price}
              </div>

            </div>

          </div>

          <button
            type="submit"
            className="submit-enrollment"
          >
            Submit Enrollment →
          </button>

        </form>

      </div>

    </div>
  );
}

export default Enrollment;