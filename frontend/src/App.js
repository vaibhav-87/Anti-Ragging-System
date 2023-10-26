import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/Login";
import JwtDecode from "./components/JwtDecode";
import Logout from "./components/Logout";

function App() {
  // Check for the presence of a valid token
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {token ? "Logged in" : <Link to="/login">Login</Link>}
              {/* <li>
                <Link to="/login">Login</Link>
              </li> */}
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/decoded">Decoded Data</Link>
              </li>
              <li>
                <Link to="/logout">Logout User</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            {/* Home Route */}
            {/* <Route path="/" element={<Home />} /> */}

            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Register Route */}
            <Route path="/register" element={<Register />} />

            {/* Decoded Data Route (Protected) */}
            <Route
              path="/decoded"
              element={token ? <JwtDecode /> : <Navigate to="/login" />}
            />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
