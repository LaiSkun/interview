import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with', email, password);
    };
    return (
        <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>

    );
};

export default Login;
