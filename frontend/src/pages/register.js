import React, { useState } from 'react';
import axios from 'axios';

import './register.css';
import username from "../images/username.png";
import lock from "../images/lock.png";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        FirstName: '', LastName: '', username: '', password: ''
    });
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (
            Object.values(user).some((field) => field === '') ||
            Object.values(user).some((field) => field === undefined)
        ) {
            alert('Please fill in all fields before registering.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register', user);
            console.log('Registration successful', response.data);
            navigate("/");
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (

        //ORIGINAL CODE FROM VAIBHAV
        // <div>
        //     <input
        //         type="text"
        //         value={user.FirstName}
        //         onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
        //         placeholder="First Name"
        //     />
        //     <input
        //         type="text"
        //         value={user.LastName}
        //         onChange={(e) => setUser({ ...user, LastName: e.target.value })}
        //         placeholder="Last Name"
        //     />
        //     <input
        //         type="text"
        //         value={user.username}
        //         onChange={(e) => setUser({ ...user, username: e.target.value })}
        //         placeholder="Username"
        //     />
        //     <input
        //         type="text"
        //         value={user.password}
        //         onChange={(e) => setUser({ ...user, password: e.target.value })}
        //         placeholder="Password"
        //     />
        //     <button onClick={handleRegister}>Register</button>
        // </div>

        //CHANGED CODE BY AYUSH
        <div className='backgroundimg'>

            <div id="login">
                <div className="details">
                    <h2>Registration</h2>
                    <div className="input-box">
                        <input
                            type="text"
                            value={user.FirstName}
                            onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
                            placeholder="First Name"
                        />

                        <img src={username} alt="Can't Load image" />

                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            value={user.LastName}
                            onChange={(e) => setUser({ ...user, LastName: e.target.value })}
                            placeholder="Last Name"
                        />

                        <img src={username} alt="Can't Load image" />

                    </div>
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
                            type="text"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                        />

                        <img src={lock} alt="Can't Load image" />

                    </div>
                    <button onClick={handleRegister} className='btns'>Register</button>
                </div>
            </div>
        </div>
            );
}

export default Register;