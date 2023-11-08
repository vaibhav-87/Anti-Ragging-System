import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SubmitComplaint.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SubmitComplaint = () => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? jwt_decode(token) : null;
  const username = decodedToken ? decodedToken.username : null;

  const navigate = useNavigate();

  const [complaint, setComplaint] = useState({
    username: username,
    Location: '',
    Description: '',
    IncidentType: '',
    SeverityOfIncident: '',
    Date: '',
  });

  const handleComplaintRegi = async () => {
    if (!username) {
      alert('Please log in to register a complaint.');
      return;
    }

    if (
      Object.values(complaint).some((field) => field === '') ||
      Object.values(complaint).some((field) => field === undefined)
    ) {
      alert('Please fill in all fields before registering the complaint.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/complaint', complaint);
      console.log('Complaint Register', response);
      navigate('/')
    } catch (error) {
      console.log('An error occurred while registering a complaint', error.message);
    }
  };

  return (
    // <div>
    //   <input
    //     type="text"
    //     value={complaint.Location}
    //     onChange={(e) => setComplaint({ ...complaint, Location: e.target.value })}
    //     placeholder="Please Enter Location"
    //   />
    //   <input
    //     type="text"
    //     value={complaint.IncidentType}
    //     onChange={(e) => setComplaint({ ...complaint, IncidentType: e.target.value })}
    //     placeholder="Incident Type"
    //   />
    //   <input
    //     type="text"
    //     value={complaint.SeverityOfIncident}
    //     onChange={(e) => setComplaint({ ...complaint, SeverityOfIncident: e.target.value })}
    //     placeholder="Severity of Incident"
    //   />
    //   <input
    //     type="text"
    //     value={complaint.Date}
    //     onChange={(e) => setComplaint({ ...complaint, Date: e.target.value })}
    //     placeholder="Date"
    //   />
    //   <input
    //     type="text"
    //     value={complaint.Description}
    //     onChange={(e) => setComplaint({ ...complaint, Description: e.target.value })}
    //     placeholder="Describe Incident"
    //   />
    //   <button onClick={handleComplaintRegi}>Register</button>
    // </div>

    <div className='backcomplaint'>
        <div className="container">
      <div className='row'>

      <div className='text-center mt-5 mb-3 text-white fw-bold'>
        <h2>Register Your Complaint</h2>
        <hr class="w-50 mx-auto border border-light"/>

      </div>

      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          value={complaint.Location}
          onChange={(e) => setComplaint({ ...complaint, Location: e.target.value })}
          placeholder="Please Enter Location"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          value={complaint.IncidentType}
          onChange={(e) => setComplaint({ ...complaint, IncidentType: e.target.value })}
          placeholder="Incident Type"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          value={complaint.SeverityOfIncident}
          onChange={(e) => setComplaint({ ...complaint, SeverityOfIncident: e.target.value })}
          placeholder="Severity of Incident"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          value={complaint.Date}
          onChange={(e) => setComplaint({ ...complaint, Date: e.target.value })}
          placeholder="Date"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          value={complaint.Description}
          onChange={(e) => setComplaint({ ...complaint, Description: e.target.value })}
          placeholder="Describe Incident"
        />
      </div>
      <button onClick={handleComplaintRegi} className="btn btn-primary">Register</button>

      </div>
    </div>
    </div>
    


  );
};

export default SubmitComplaint;
