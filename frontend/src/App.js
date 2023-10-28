import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/Login";
import JwtDecode from "./components/JwtDecode";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowComplaints from "./pages/Complaints";
import RegisterComplaint from "./pages/SubmitComplaint";

function App() {
  // ...
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token ? jwt_decode(token) : null);

  const check = ()=>{
    if(!token) alert("You are not logged in!");
  }

  return (
    <Router>
        <Navbar />
      <div className="App">

        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {user ? (
                <div>
                  <span>Welcome, {user.username}!</span>
                  <Link to="/decoded">Decoded Data</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </ul>
          </nav> */}

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/decoded" element={<JwtDecode />} />
            <Route path="/registercomplaint" element={user ? <RegisterComplaint /> : <Navigate to="/" />} />
            {/* <Route path='/showcomplaints' element={<ShowComplaints/>} /> */}
            <Route path="/showcomplaints" element={user ? <ShowComplaints /> : <Navigate to="/" />} />
            {/* <Route
              path="/decoded"
              element={user ? <JwtDecode /> : <Navigate to="/login" />}
            /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
