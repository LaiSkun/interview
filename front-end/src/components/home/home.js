import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRefferalCode } from '../service/SellerService';
import Cookies from 'js-cookie';
import './home.css'

const Home = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const [productname, setProductName] = useState('');
    const [responseData, setResponseData] = useState('');

    const handleLogout = () => {
        // Thực hiện các bước để đăng xuất người dùng
        setAuth(false);
        Cookies.remove('loggedInUser');
        // Chuyển hướng người dùng đến trang đăng nhập
        navigate('/login');
    };
    const createRefferal = () => {
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
    const createLink = () => {
        const data = {
            productname: productname
        }
        console.log(data)
    }
    return (
        <div>
            <h2>Home</h2>
            <div>
                <label>Product name</label>
                <input
                    type="text"
                    value={productname}
                    onChange={(e) => setProductName(e.target.value)}
                />

            </div>

            <button type="button" onClick={handleLogout}>Logout</button>
            <button type="button" onClick={createRefferal}>Create Refferal Code</button>
            <button type="button" onClick={createLink}>Create Seller Link</button>

            
            <div class="alert alert-primary" role="alert">
            <p>Refferal Code: {responseData}</p>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Link</th>
                        <th scope="col">Status</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>X</td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default Home;
