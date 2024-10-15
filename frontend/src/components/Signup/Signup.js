import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        // Check if email and password fields are not empty
        if (email === '' || password === '' || confirmPassword === '') {
            alert("Please fill out all fields");
            return;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    history("/login", { state: { id: email } });
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Signup</h1>

            <form action="POST">
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    value={email}
                />
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    value={password}
                />
                <input 
                    type="password" 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                />
                <input 
                    type="submit" 
                    onClick={submit} 
                    value="Submit" 
                    disabled={!email || !password || !confirmPassword} 
                />
            </form>

            <br />
            <p>Already have an account?</p>
            <br />
            <Link className="login-btn" to="/login">Login Page</Link>
        </div>
    );
}

export default Login;
