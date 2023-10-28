import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        FirstName: '', LastName: '', username: '', password: ''
    });

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
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={user.FirstName}
                onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
                placeholder="First Name"
            />
            <input
                type="text"
                value={user.LastName}
                onChange={(e) => setUser({ ...user, LastName: e.target.value })}
                placeholder="Last Name"
            />
            <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
            />
            <input
                type="text"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
