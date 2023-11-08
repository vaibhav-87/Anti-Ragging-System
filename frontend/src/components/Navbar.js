import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./navbar.css";

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
      <nav className="navbar navbar-expand-lg bg-white py-4">
        <div className="container">
          <div className="d-flex justify-content-between w-100">
            <Link style={{ paddingRight: '0px' }} className="navbar-brand text-black" to="/">
              Antiragging
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5 text-black"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={check}
                    className="nav-link fs-5"
                    to="/registercomplaint"
                  >
                    Report Incident
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={check}
                    className="nav-link fs-5"
                    to="/showcomplaints"
                  >
                    Track Report
                  </Link>
                </li>

                {user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link fs-5" to="/">
                        {user.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link fs-5"
                        onClick={handleLogout}
                        to="/"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link fs-5" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fs-5" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
