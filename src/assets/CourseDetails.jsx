import React from "react";

function CourseDetails({ course, onBack, onEnroll }) {

  if (!course) {
    return (
      <div className="details-page">

        <h2>No course selected</h2>

        <button onClick={onBack} className="primary-btn">
          Back to Courses
        </button>

      </div>
    );
  }

  return (
    <div className="details-page">

      <header className="page-header">

        <div className="logo">
          <span>Learn</span>Hub
        </div>

        <button
          className="header-back"
          onClick={onBack}
        >
          ← Courses
        </button>

      </header>

      <div className="details-container">

        <div className="details-label">
          COURSE DETAILS
        </div>

        <h1>{course.title}</h1>

        <p className="details-description">
          {course.description}
        </p>

        <div className="details-stats">

          <div>
            <small>Category</small>
            <strong>{course.category}</strong>
          </div>

          <div>
            <small>Duration</small>
            <strong>{course.duration}</strong>
          </div>

          <div>
            <small>Level</small>
            <strong>{course.level}</strong>
          </div>

          <div>
            <small>Price</small>
            <strong>{course.price}</strong>
          </div>

        </div>

        <div className="details-body">

          <div>

            <h2>What You Will Learn</h2>

            <div className="topics">

              {course.topics.map((topic, index) => (

                <div
                  className="topic"
                  key={index}
                >
                  <span>✓</span>
                  {topic}
                </div>

              ))}

            </div>

          </div>

          <div className="enroll-card">

            <div className="enroll-card-icon">
              🎓
            </div>

            <h3>Ready to start?</h3>

            <p>
              Enroll now and begin your learning journey.
            </p>

            <h3>{course.price}</h3>

            <button
              className="enroll-btn"
              onClick={onEnroll}
            >
              Enroll Now →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;

