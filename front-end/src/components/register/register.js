import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle register logic here
        console.log('Registering with', email, password);
    };

    return (


        <div class="login-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> <label>Email:</label>
                </div>
                <div class="user-box">
                   
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><label>Password:</label>
                </div>
                <div class="user-box">

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    /> <label>Confirm Password:</label>
                </div>
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;
