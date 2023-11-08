import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/Login";
import JwtDecode from "./components/JwtDecode";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowComplaints from "./pages/Complaints";
import RegisterComplaint from "./pages/SubmitComplaint";
import Home from "./pages/Home";
import axios from "axios";
import HomeNavbar from './components/HomeNavbar';
import AllComplaints from './pages/AllComplaints';
import AdminNavbar from './components/AdminNavbar';

function App() {
  // ...
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token ? jwt_decode(token) : null);
  const [role, setRole] = useState(null);

  let uuser;
  let isAdmin = false;
  if (user === null) {
    console.log("Not logged in");
  } else if (user) {
    uuser = user.username;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user === null) {
          return;
        }

        const response = await axios.post("http://localhost:5000/api/getrole", {
          username: uuser,
        });

        if (Array.isArray(response.data) && response.data.length > 0) {
          const userRole = response.data[0].role;
          console.log("Role Found:", userRole);
          if(userRole==='admin'){
            isAdmin = true;
          }
          setRole(userRole);
        } else {
          console.log("No role data found for the user.");
        }
      } catch (error) {
        console.log("Message from get role", error.message);
      }
      console.log(isAdmin);
    };
    fetchData();
  }, []);

  return (
    <Router>
    {/* {user ? (isAdmin ? <HomeNavbar /> : <Navbar />) : <HomeNavbar/>} */}

    {user ? (
        <div>
          {role === "admin" ? (
            <AdminNavbar />
          ) : (
            <Navbar />
          )}
        </div>
      ) : (
        <HomeNavbar />
      )}

      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/decoded" element={<JwtDecode />} />
            <Route path="/allcomplaints" element={<AllComplaints />} />

            <Route
              path="/registercomplaint"
              element={user ? <RegisterComplaint /> : <Navigate to="/" />}
            />
            <Route
              path="/showcomplaints"
              element={user ? <ShowComplaints /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
