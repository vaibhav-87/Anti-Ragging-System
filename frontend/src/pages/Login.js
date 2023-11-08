import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
import username from "../images/username.png";
import lock from "../images/lock.png";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { username, password } = user;

      if (username !== "" && password !== "") {
        const response = await axios.post(
          "http://localhost:5000/api/login",
          user
        );

        if (response.status === 200) {
          const token = response.data.token;
          console.log("Generated Token ", token);

          localStorage.setItem("token", token);
          console.log("Login Successful!");

          navigate('/');
          window.location.reload();
        } else {
          alert("Login failed!");
        }
      } else {
        alert("Please Enter Username and Password");
        return;
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed!");
    }
  };

  return (

    //ORIGINAL CODE FROM VAIBHAV
    //   <div>
    //     <input
    //       type="text"
    //       value={user.username}
    //       onChange={(e) => setUser({ ...user, username: e.target.value })}
    //       placeholder="Username"
    //     />
    //     <input
    //       type="password"
    //       value={user.password}
    //       onChange={(e) => setUser({ ...user, password: e.target.value })}
    //       placeholder="Password"
    //     />
    //     <button onClick={handleLogin}>Login</button>
    //   </div>
    // );

    //CHANGED CODE BY AYUSH
    <>
      <div className='backgroundimg'>

        <div id="login">
          <div className="details">
            <h2>Login</h2>
            <div className="input-box">

              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
              />

              <img src={username} alt="Can't Load image" />

            </div>
            <div className="input-box">

              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
              />

              <img src={lock} alt="Can't Load image" />

            </div>
            <button onClick={handleLogin} className="btns">Login</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
