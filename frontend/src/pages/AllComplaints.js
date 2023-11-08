import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwt_decode(token) : null;
  const username = decodedToken ? decodedToken.username : null;
  console.log("Hellow");
  
  const deleteComplaint = async(id)=>{
    console.log(id);
    await axios.delete("http://localhost:5000/api/deletecomplaint", {
      data: { _id: id },
    })
    .then(
      console.log("Complaint Deleted!"),
      window.location.reload(false)
      )
    .catch((e)=>{
      console.log(e)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/allcomplaints`,
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
    <div className="container">
      <div className="text-center">
        <h1>Complaints</h1>
      </div>

      {!isComplaint ? (
        <div className="text-center">
          <h2>No Complaints to Show</h2>
        </div>
      ) : (
        <table className="table table-responsive mx-auto">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th scope="col">Incident Type</th>
              <th scope="col">Severity of Incident</th>
              <th scope="col">complaint Status</th>
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
                <td>{complaint.status}</td>
                <button onClick={()=> deleteComplaint(complaint._id)} >Solved!</button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Complaints;
