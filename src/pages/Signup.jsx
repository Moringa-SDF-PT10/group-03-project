// src/pages/Signup.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Try to register the user using signup function from context
    const success = signup(name, email, password);

    if (success) {
      navigate("/profile"); // Redirect to profile on success
    } else {
      setError("User with this email already exists");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label><br />
        <label>
          Email: <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label><br />
        <label>
          Password: <br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
