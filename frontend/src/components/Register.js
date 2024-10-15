import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Optional: For styling

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5001/api/register', { email, password });
            // Handle successful registration (e.g., redirect to login)
            alert('Registration successful!');
        } catch (error) {
            // Handle registration errors
            alert('Registration failed!');
        }
    };

    return (
        <div className='auth-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>Confirm Password:</label>
                <input
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;
