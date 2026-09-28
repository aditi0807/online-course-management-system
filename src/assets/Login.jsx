import React, { useState } from "react";

function Login({ onLogin, onBack }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("userEmail", email);

    onLogin();
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          <span>Learn</span>Hub
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to continue your learning journey
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Login;