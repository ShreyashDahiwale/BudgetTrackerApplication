import React, { useState } from "react";
import "../styles/main.css";

export default function SignupModal({ onClose, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration failed");
        return;
      }

      alert("Registration Successful!");
      onSuccess();
      onClose();

    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a strong password"
          />

          <button type="submit" className="btn-primary">Create Account</button>
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
