
import React, { useState } from "react";

function LoginForm() {
  // Step 1: Declare state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Step 3: Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Step 2: Bind inputs */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
