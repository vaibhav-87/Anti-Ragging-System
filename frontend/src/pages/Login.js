import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', user);

      if (response.status === 200) {
        const token = response.data.token;

        // Store the token in localStorage
        localStorage.setItem('token', token);
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed!');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
