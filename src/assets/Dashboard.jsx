import React from "react";

function Dashboard({ onCourses, onHome }) {

  const data = JSON.parse(
    localStorage.getItem("enrollmentData") || "null"
  );

  return (
    <div className="dashboard-page">

      <header className="page-header">

        <div className="logo">
          <span>Learn</span>Hub
        </div>

        <div className="dashboard-nav">

          <button onClick={onCourses}>
            Courses
          </button>

          <button onClick={onHome}>
            Home
          </button>

        </div>

      </header>

      <main className="dashboard-container">

        <div className="dashboard-welcome">

          <div>

            <span>STUDENT DASHBOARD</span>

            <h1>
              Welcome, {data?.name || "Student"} 👋
            </h1>

            <p>
              Here is your enrollment information.
            </p>

          </div>

          <div className="dashboard-badge">
            ✓ Enrolled
          </div>

        </div>

        {!data ? (

          <div className="empty-dashboard">

            <div>📚</div>

            <h2>No Enrollment Found</h2>

            <p>
              You haven't enrolled in any course yet.
            </p>

            <button
              className="primary-btn"
              onClick={onCourses}
            >
              Explore Courses
            </button>

          </div>

        ) : (

          <>

            <div className="dashboard-cards">

              <div className="dashboard-card">

                <small>ENROLLED COURSE</small>

                <h2>{data.course}</h2>

                <p>
                  {data.duration} • {data.level}
                </p>

                <strong>
                  {data.price}
                </strong>

              </div>

              <div className="dashboard-card">

                <small>STUDENT</small>

                <h2>{data.name}</h2>

                <p>{data.qualification}</p>

              </div>

              <div className="dashboard-card">

                <small>LOCATION</small>

                <h2>
                  {data.city || "Not Provided"}
                </h2>

                <p>{data.phone}</p>

              </div>

            </div>

            <div className="student-details">

              <div className="student-details-header">

                <div>

                  <span>PROFILE</span>

                  <h2>
                    Enrollment Details
                  </h2>

                </div>

              </div>

              <div className="details-grid">

                <div>
                  <label>Full Name</label>
                  <strong>{data.name}</strong>
                </div>

                <div>
                  <label>Email Address</label>
                  <strong>{data.email}</strong>
                </div>

                <div>
                  <label>Phone Number</label>
                  <strong>{data.phone}</strong>
                </div>

                <div>
                  <label>Qualification</label>
                  <strong>{data.qualification}</strong>
                </div>

                <div>
                  <label>Gender</label>
                  <strong>
                    {data.gender || "Not Provided"}
                  </strong>
                </div>

                <div>
                  <label>City</label>
                  <strong>
                    {data.city || "Not Provided"}
                  </strong>
                </div>

                <div>
                  <label>Course Price</label>
                  <strong>
                    {data.price}
                  </strong>
                </div>

              </div>

            </div>

            <div className="dashboard-course">

              <div>

                <span>YOUR COURSE</span>

                <h2>{data.course}</h2>

                <p>
                  Course Fee: {data.price}
                </p>

              </div>

              <button
                className="primary-btn"
                onClick={onCourses}
              >
                View Other Courses
              </button>

            </div>

          </>

        )}

      </main>

    </div>
  );
}

export default Dashboard;
