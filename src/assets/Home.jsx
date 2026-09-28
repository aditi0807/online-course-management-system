import React from "react";

function Home({ onLogin }) {
  return (
    <div className="home-page">

      <header className="home-header">
        <div className="logo">
          <span>Learn</span>Hub
        </div>

        <button className="nav-login" onClick={onLogin}>
          Login
        </button>
      </header>

      <main className="home-main">

        <div className="home-text">

          <div className="small-title">
            ONLINE LEARNING PLATFORM
          </div>

          <h1>
            Learn Today.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Explore professional courses, improve your skills and
            take the next step towards your career.
          </p>

          <button className="primary-btn" onClick={onLogin}>
            Get Started
          </button>

        </div>

        <div className="home-card">

          <div className="home-icon">🎓</div>

          <h3>Learn Without Limits</h3>

          <p>
            Quality courses designed to help students
            learn practical and professional skills.
          </p>

          <div className="home-line"></div>

          <div className="home-info">
            <div>
              <strong>10+</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Learning</span>
            </div>
          </div>

        </div>

      </main>

      <footer className="home-footer">
        © 2026 LearnHub • Online Course Management System
      </footer>

    </div>
  );
}

export default Home;