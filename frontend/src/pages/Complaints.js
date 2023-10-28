import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwt_decode(token) : null;
  const username = decodedToken ? decodedToken.username : null;
  console.log("Hellow")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getcomplaint`,
          {
            params: { username: username },
          }
        );
        setComplaints(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [username]);

  console.log(complaints.length);
  let isComplaint = false;

  if (complaints.length !== 0) {
    isComplaint = true;
  }

  return (
    <div>
      <h1>Complaints</h1>

      {!isComplaint ? (
        <h2>No Complaints to Show</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Incident Type</th>
              <th>Severity of Incident</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr key={complaint._id}>
                <td>{index + 1}</td>
                <td>{complaint.Date}</td>
                <td>{complaint.Location}</td>
                <td>{complaint.Description}</td>
                <td>{complaint.IncidentType}</td>
                <td>{complaint.SeverityOfIncident}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Complaints;
