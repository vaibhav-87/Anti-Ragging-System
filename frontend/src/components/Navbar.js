import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token ? jwt_decode(token) : null);
  const navigate = useNavigate();

  const check = () => {
    if (!token) alert("You are not logged in!");
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link onClick={check} to="/registercomplaint">
              Register Complaint
            </Link>
          </li>
          <li>
            <Link onClick={check} to="/showcomplaints">
              Show Complaints
            </Link>
          </li>
          <li>
            <Link to="/decoded">Decoded Data</Link>
          </li>
          {user ? (
            <li>
              <>{user.username}</>
              <Link onClick={handleLogout} to="/">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
