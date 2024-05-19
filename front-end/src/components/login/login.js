import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css'
import { login } from '../service/SellerService';
import Cookies from 'js-cookie';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,        
        };

        console.log(user);
        login(user).then((response) =>{
            console.log(response.data);
            if(response.data.errorCode === -1 | response.data.errorCode === 1 ){
                alert(response.data.errorDesc);
            }
            else{
                Cookies.set('loggedInUser', email);
                setAuth(true);
                navigate('/');

            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            setError('An error occurred during login.');
        });
    
    };

    return (
        <div className="login-box">
            <h2>Login</h2>  
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default Login;
