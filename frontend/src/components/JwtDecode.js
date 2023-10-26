import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function MyComponent() {
  // Retrieve the token from your storage (e.g., localStorage)
  const token = localStorage.getItem('token');
  
  // Check if the token exists
  if (!token) {
    return <p>You are not logged in.</p>;
  }

  // Decode the token to get user data
  const user = jwt_decode(token);

  // Now, 'user' contains the decoded user data (e.g., user.id, user.username)

  // You can use 'user' in your component's state or display user information
  return (
    <div>
      <p>Welcome, {user.username}!</p>
    </div>
  );
}

export default MyComponent;