// src/pages/AdminLogin.js
import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Define the username and password (example: admin/admin123)
    const correctUsername = 'admin';
    const correctPassword = 'admin123';

    if (username === correctUsername && password === correctPassword) {
      onLogin(); // Call onLogin to update the parent component state
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
