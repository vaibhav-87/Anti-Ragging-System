import React from 'react';

const Logout = () => {
  // Clear the JWT token from localStorage
  localStorage.removeItem('token');

  // Redirect the user to the login page or any other desired page
  // You can use the <Navigate> component from 'react-router-dom' to redirect
  return (
    <div>
      <p>You have been logged out.</p>
      {/* Add a button or link to return to the login page */}
    </div>
  );
};

export default Logout;
