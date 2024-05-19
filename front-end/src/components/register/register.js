import React, {  useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './register.css'; // Import file CSS
import { create_seller } from '../service/SellerService';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const user = {
            email,
            name,
            password,
            refferalCode: referralCode
        };
        console.log('User data being sent:', user);
        
        create_seller(user).then((response) =>{
            console.log(response.data);
            if(response.data.errorCode === 1 | response.data.errorCode === -1)
               alert("Tạo thất bại")
            else 
                navigate('/login');
        })
    };

    return (
        <div className="login-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <label>Confirm Password</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                    />
                    <label>Referral Code</label>
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
