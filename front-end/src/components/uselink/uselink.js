import React, { useEffect } from 'react';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import { call_create_user_Link } from '../service/SellerService';

import Cookies from 'js-cookie';

const UseLink = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    useEffect(() => {
        const userEmail = Cookies.get('loggedInUser');
        const data = { 
            userId: userEmail ,
            link : 'http://localhost:3000' + currentPath
        };
        console.log(data)
        call_create_user_Link(data)
        .then((response) => {
            console.log(response.data.data);
            if (response.data.errorCode === "0") {
                alert("Link used successfully");
            } else {
                alert(response.data.errorDesc);
            }
            navigate('/');
        })
        .catch((error) => {
            console.error('Error using link:', error);
            alert('An error occurred while using the link.');
            navigate('/');
        });
    }, []);
    
    
    return <div>Using link...</div>;
};

export default UseLink;
