import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRefferalCode } from '../service/SellerService';
import Cookies from 'js-cookie';

const Home = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [responseData, setResponseData] = useState('');

    const handleLogout = () => {
        // Thực hiện các bước để đăng xuất người dùng
        setAuth(false);
        // Chuyển hướng người dùng đến trang đăng nhập
        navigate('/login');
    };
    const createRefferal =() => {
        const userEmail = Cookies.get('loggedInUser');
        console.log(userEmail)
        const data = {
            email: userEmail,
        };
        createRefferalCode(data).then((response) => {
            console.log(response.data.data);
            setResponseData(response.data.data);
        })
    }

   

    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={createRefferal}>Create Refferal Code</button>
           
            <div>
                <p>Refferal Code: {responseData}</p>
            </div>
        </div>
    );
};

export default Home;
