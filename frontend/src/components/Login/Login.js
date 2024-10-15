import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminUsername, setAdminUsername] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    navigate("/products", { state: { id: email } });
                } else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            })
            .catch(e => {
                alert("Password required");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="animated-text">Login to purchase your daily needs!</div>
            <div className="login-container">
                {/* User Login Form */}
                <div className="user-login">
                    <h2>User Login</h2>
                    <form action="POST">
                        <input 
                            type="email" 
                            onChange={(e) => { setEmail(e.target.value); }} 
                            placeholder="Email" 
                        />
                        <input 
                            type="password" 
                            onChange={(e) => { setPassword(e.target.value); }} 
                            placeholder="Password" 
                        />
                        <input 
                            type="submit" 
                            onClick={submit} 
                        />
                    </form>
                    <p>Don't have an account?</p>
                    <Link className="signup-btn" to="/signup">Signup Page</Link>
                </div>
                
                {/* Admin Login Form */}
                <div className="admin-login">
                    <h2>Admin Login</h2>
                    <form>
                        <input 
                            type="text" 
                            value={adminUsername}
                            onChange={(e) => setAdminUsername(e.target.value)}
                            placeholder="Admin Username" 
                        />
                        <input 
                            type="password" 
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            placeholder="Admin Password" 
                        />
                        <button 
                            type="submit" 
                            onClick={(e) => {
                                e.preventDefault();
                                if (adminUsername === "sarvesh" && adminPassword === "123") {
                                    navigate('/admin');
                                } else {
                                    alert("Invalid admin credentials");
                                }
                            }}
                        >
                            Admin Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
