import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      alert("Login Successful!");
    } else {
      alert("Signup Successful!");
    }

    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter Name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            className="toggle-link"
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;