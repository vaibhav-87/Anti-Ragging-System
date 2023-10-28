import React from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

function JwtDecode() {
  const token = localStorage.getItem("token");

  //Checking whether the user is logged in or not if now then navigating to root route
  //In short securing this route
  if (!token) {
    alert("You are not logged in. Please log in first!");
    return <Navigate to="/" replace />;
  }

  try {
    const user = jwt_decode(token);

    return (
      <div>
        <p>Welcome, {user.username}!</p>
      </div>
    );
  } catch (error) {
    console.error("Error decoding the token:", error);
    localStorage.removeItem("token");
    return <p>Error decoding the token. Please log in again.</p>;
  }
}

export default JwtDecode;
